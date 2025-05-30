export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-gray-300 mb-2 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
