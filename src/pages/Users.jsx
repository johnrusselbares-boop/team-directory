
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { users as localUsers } from '../data/users'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Button from '../components/Button'

export default function Users({
    favorites,
    onToggleFavorite,
}) {
    const [search, setSearch] = useState('')
    const [showFavorites, setShowFavorites] = useState(false)
    const [team, setTeam] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const location = useLocation()

    useEffect(() => {
        if (location.state?.showFavorites) {
            setShowFavorites(true)
        }
    }, [location.state])

    useEffect(() => {
        let active = true

        setLoading(true)
        setError('')

        const timer = setTimeout(() => {
            try {
                if (active) {
                    setTeam(localUsers)
                    setLoading(false)
                }
            } catch {
                if (active) {
                    setError('Unable to load the team directory.')
                    setLoading(false)
                }
            }
        }, 1000)

        return () => {
            active = false
            clearTimeout(timer)
        }
    }, [])

    const filteredUsers = team.filter((user) => {
        const term = search.toLowerCase().trim()

        const matchesSearch =
            user.name.toLowerCase().includes(term) ||
            user.role.toLowerCase().includes(term) ||
            user.department.toLowerCase().includes(term)

        const matchesFavorites =
            !showFavorites || favorites.includes(user.id)

        return matchesSearch && matchesFavorites
    })

    function retryLoading() {
        setError('')
        setLoading(true)

        setTimeout(() => {
            setTeam(localUsers)
            setLoading(false)
        }, 1000)
    }

    return (
        <section>
            <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Our people
                </p>

                <h1 className="mt-2 text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
                    Team Directory
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Discover the people, skills, and departments across our team.
                </p>
            </div>

            <div className="mb-7 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                    <label htmlFor="team-search" className="sr-only">
                        Search team members
                    </label>

                    <input
                        id="team-search"
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search name, role, or department..."
                        className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-indigo-950"
                    />
                </div>

                <Button
                    variant={showFavorites ? 'primary' : 'outline'}
                    onClick={() => setShowFavorites((current) => !current)}
                >
                    {showFavorites ? '♥ Favorites only' : '♡ Show favorites'}
                </Button>
            </div>

            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {loading
                        ? 'Loading team members...'
                        : `${filteredUsers.length} member(s) found`}
                </p>

                {showFavorites && (
                    <button
                        onClick={() => setShowFavorites(false)}
                        className="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                        Show everyone
                    </button>
                )}
            </div>

            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage
                    title="Unable to load team"
                    message={error}
                    onRetry={retryLoading}
                />
            ) : filteredUsers.length === 0 ? (
                <ErrorMessage
                    title="No team members found"
                    message={
                        showFavorites && favorites.length === 0
                            ? 'You have not added any favorites yet. Select the heart on a team member card.'
                            : 'Try another search term or change your favorites filter.'
                    }
                />
            ) : (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredUsers.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            isFavorite={favorites.includes(user.id)}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}
