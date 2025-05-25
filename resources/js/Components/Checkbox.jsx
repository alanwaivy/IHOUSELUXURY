export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-700 bg-black text-orange-500 shadow-sm focus:ring-orange-500 focus:ring-offset-0 ' +
                className
            }
        />
    );
}
