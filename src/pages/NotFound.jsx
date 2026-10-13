
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="flex min-h-[55vh] flex-col items-center justify-center text-center">
            <p className="text-8xl font-black text-indigo-600 dark:text-indigo-400">
                404
            </p>

            <h1 className="mt-5 text-3xl font-extrabold text-gray-900 dark:text-white">
                Page not found
            </h1>

            <p className="mt-3 max-w-md text-gray-600 dark:text-gray-400">
                Sorry, the page you are looking for does not exist.
                Check the URL or return to the home page.
            </p>

            <Link
                to="/"
                className="mt-7 rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700"
            >
                Return home
            </Link>
        </section>
    )
}
