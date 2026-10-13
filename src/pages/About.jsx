
export default function About() {
    return (
        <section className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12 dark:border-gray-700 dark:bg-gray-800">
                <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    About the project
                </span>

                <h1 className="mt-4 text-4xl font-black text-gray-900 dark:text-white">
                    A simpler way to discover your team.
                </h1>

                <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                    TeamSpace is a sample team directory application built
                    to demonstrate React fundamentals, component reuse,
                    client-side routing, state management, and side effects.
                </p>

                <h2 className="mt-9 text-xl font-bold text-gray-900 dark:text-white">
                    Technologies used
                </h2>

                <ul className="mt-4 space-y-3">
                    {[
                        'React for reusable UI components',
                        'Vite for development and building',
                        'Tailwind CSS for responsive styling',
                        'React Router DOM for page navigation',
                        'useState for search, favorites, and dark mode',
                        'useEffect for loading data and updating the page title',
                        'Git and GitHub for version control',
                    ].map((technology) => (
                        <li
                            key={technology}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                        >
                            <span className="font-bold text-indigo-600 dark:text-indigo-400">
                                ✓
                            </span>
                            {technology}
                        </li>
                    ))}
                </ul>

                <p className="mt-9 rounded-2xl bg-indigo-50 p-5 text-sm leading-6 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200">
                    This project uses fictional sample data stored locally
                    in the application. It does not require a backend or
                    external user-data API.
                </p>
            </div>
        </section>
    )
}
