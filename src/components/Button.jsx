
export default function Button({
    children,
    onClick,
    variant = 'primary',
    type = 'button',
    className = '',
    disabled = false,
}) {
    const styles = {
        primary:
            'bg-indigo-600 text-white hover:bg-indigo-700',
        secondary:
            'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
        outline:
            'border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700',
        danger:
            'bg-red-600 text-white hover:bg-red-700',
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant] || styles.primary} ${className}`}
        >
            {children}
        </button>
    )
}
