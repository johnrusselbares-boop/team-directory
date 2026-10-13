
import { Link } from 'react-router-dom'
import Button from './Button'

export default function UserCard({
    user,
    isFavorite,
    onToggleFavorite,
}) {
    return (
        <article className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-start justify-between gap-3">
                <Link
                    to={`/users/${user.id}`}
                    className="flex min-w-0 items-center gap-3"
                    aria-label={`View ${user.name}'s profile`}
                >
                    <img
                        src={user.avatar}
                        alt={user.name}
                        loading="lazy"
                        className="h-16 w-16 shrink-0 rounded-2xl object-cover"
                    />

                    <div className="min-w-0">
                        <h2 className="truncate font-bold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                            {user.name}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {user.role}
                        </p>
                    </div>
                </Link>

                <button
                    type="button"
                    onClick={() => onToggleFavorite(user.id)}
                    aria-label={
                        isFavorite
                            ? `Remove ${user.name} from favorites`
                            : `Add ${user.name} to favorites`
                    }
                    aria-pressed={isFavorite}
                    className={`rounded-xl p-2 text-xl transition hover:bg-gray-100 dark:hover:bg-gray-700 ${isFavorite
                            ? 'text-rose-500'
                            : 'text-gray-400'
                        }`}
                >
                    {isFavorite ? '♥' : '♡'}
                </button>
            </div>

            <div className="mt-5">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    {user.department}
                </span>

                <p className="mt-4 min-h-12 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {user.bio}
                </p>

                <p className="mt-3 truncate text-sm text-gray-500 dark:text-gray-400">
                    ✉ {user.email}
                </p>

                <Link
                    to={`/users/${user.id}`}
                    className="mt-5 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
                >
                    View profile →
                </Link>
            </div>
        </article>
    )
}
