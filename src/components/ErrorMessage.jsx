
export default function ErrorMessage({
    title = 'Something went wrong',
    message = 'Please try again.',
    onRetry,
}) {
    return (
        <div
            className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-950/30"
            role="alert"
        >
            <div className="mb-3 text-3xl" aria-hidden="true">
                ⚠️
            </div>

            <h2 className="text-lg font-bold text-red-800 dark:text-red-300">
                {title}
            </h2>

            <p className="mt-2 text-sm text-red-700 dark:text-red-200">
                {message}
            </p>

            {onRetry && (
                <button
                    onClick={onRetry}
                    className="mt-5 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                >
                    Try again
                </button>
            )}
        </div>
    )
}
