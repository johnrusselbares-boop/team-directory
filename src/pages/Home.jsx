
import { Link } from 'react-router-dom'
import { users } from '../data/users'

export default function Home() {
    const departments = [
        ...new Set(users.map((user) => user.department)),
    ]

    return (
        <div className="space-y-12">
            <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 px-7 py-12 text-white shadow-xl sm:px-12 sm:py-16">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-indigo-200">
                    Welcome to TeamSpace
                </p>

                <h1 className="max-w-2xl text-4xl font-black leading-tight sm:text-6xl">
                    Meet the people behind the work.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-indigo-100 sm:text-lg">
                    Discover our team, explore professional profiles,
                    and keep your favorite colleagues close at hand.
                </p>

                <Link
                    to="/users"
                    className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-indigo-700 transition hover:bg-indigo-50"
                >
                    Explore the team →
                </Link>
            </section>

            <section>
                <div className="mb-6">
                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                        Team overview
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        A quick look at our people and departments.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Team members
                        </p>
                        <p className="mt-3 text-4xl font-black text-indigo-600 dark:text-indigo-400">
                            {users.length}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Departments
                        </p>
                        <p className="mt-3 text-4xl font-black text-indigo-600 dark:text-indigo-400">
                            {departments.length}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Profiles available
                        </p>
                        <p className="mt-3 text-4xl font-black text-indigo-600 dark:text-indigo-400">
                            100%
                        </p>
                    </div>
                </div>
            </section>

            <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-7 dark:border-indigo-900 dark:bg-indigo-950/40">
                <h2 className="text-xl font-bold text-indigo-950 dark:text-indigo-200">
                    Find your people
                </h2>
                <p className="mt-2 leading-7 text-indigo-900 dark:text-indigo-300">
                    Search team members by name, job title, or department.
                    Save favorite profiles and explore their professional details.
                </p>
                <Link
                    to="/users"
                    className="mt-4 inline-block font-bold text-indigo-700 hover:underline dark:text-indigo-300"
                >
                    Open team directory →
                </Link>
            </section>
        </div>
    )
}
