
import { NavLink } from 'react-router-dom'
import Button from './Button'

export default function Navbar({
    darkMode,
    onToggleDarkMode,
    favoriteCount,
}) {
    const links = [
        { to: '/', label: 'Home', end: true },
        { to: '/users', label: 'Team Directory', end: false },
        { to: '/about', label: 'About', end: true },
    ]

    return (
        <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-700 dark:bg-gray-900/90">
            <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
                <NavLink to="/" className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-black text-white">
                        T
                    </span>

                    <span>
                        <span className="block text-lg font-extrabold text-gray-900 dark:text-white">
                            TeamSpace
                        </span>
                        <span className="block text-xs text-gray-500 dark:text-gray-400">
                            Team Directory
                        </span>
                    </span>
                </NavLink>

                <div className="flex flex-wrap items-center gap-2">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            className={({ isActive }) =>
                                `rounded-xl px-3 py-2 text-sm font-semibold transition ${isActive
                                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}

                    <NavLink
                        to="/users"
                        state={{ showFavorites: true }}
                        className="rounded-xl px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                        ♥ {favoriteCount}
                    </NavLink>

                    <Button
                        variant="outline"
                        onClick={onToggleDarkMode}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? '☀️ Light' : '🌙 Dark'}
                    </Button>
                </div>
            </nav>
        </header>
    )
}
