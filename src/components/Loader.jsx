
export default function Loader({ message = 'Loading team members...' }) {
    return (
        <div
            className="flex min-h-56 flex-col items-center justify-center gap-4 text-gray-600 dark:text-gray-300"
            role="status"
            aria-live="polite"
        >
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
            <p className="text-sm font-medium">{message}</p>
        </div>
    )
}
