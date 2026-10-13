
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { users } from '../data/users'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Button from '../components/Button'

export default function UserDetails({
    favorites,
    onToggleFavorite,
}) {
    const { id } = useParams()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        let active = true

        setLoading(true)
        setError('')
        setUser(null)

        const timer = setTimeout(() => {
            if (!active) return

            const foundUser = users.find(
                (item) => item.id === Number(id),
            )

            if (foundUser) {
                setUser(foundUser)
            } else {
                setError('The requested team member does not exist.')
            }

            setLoading(false)
        }, 1000)

        return () => {
            active = false
            clearTimeout(timer)
        }
    }, [id])

    if (loading) {
        return <Loader message="Loading team member profile..." />
    }

    if (error || !user) {
        return (
            <div className="space-y-5">
                <ErrorMessage
                    title="Profile not found"
                    message={error || 'This profile is unavailable.'}
                />
                <Link
                    to="/users"
                    className="inline-block font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                >
                    ← Back to directory
                </Link>
            </div>
        )
    }

    const isFavorite = favorites.includes(user.id)

    return (
        <section className="mx-auto max-w-3xl">
            <Link
                to="/users"
                className="mb-6 inline-block font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
            >
                ← Back to directory
            </Link>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="h-32 bg-gradient-to-r from-indigo-600 to-violet-700" />

                <div className="px-6 pb-8 sm:px-10">
                    <div className="-mt-14 flex flex-wrap items-end justify-between gap-4">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-28 w-28 rounded-3xl border-4 border-white object-cover shadow-md dark:border-gray-800"
                        />

                        <Button
                            variant={isFavorite ? 'danger' : 'outline'}
                            onClick={() => onToggleFavorite(user.id)}
                        >
                            {isFavorite ? '♥ Remove favorite' : '♡ Add favorite'}
                        </Button>
                    </div>

                    <h1 className="mt-6 text-3xl font-black text-gray-900 dark:text-white">
                        {user.name}
                    </h1>

                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                        {user.role}
                    </p>

                    <span className="mt-4 inline-block rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                        {user.department}
                    </span>

                    <div className="mt-8 space-y-5 border-t border-gray-200 pt-7 dark:border-gray-700">
                        <div>
                            <h2 className="font-bold text-gray-900 dark:text-white">
                                About
                            </h2>
                            <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                                {user.bio}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-bold text-gray-900 dark:text-white">
                                Contact information
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                Email: {user.email}
                            </p>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                Location: {user.location}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-bold text-gray-900 dark:text-white">
                                Skills
                            </h2>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {user.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
