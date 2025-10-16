// FormSelectRow.jsx
function FormSelectRow({
    options = [],
    labelText,
    name,
    placeholder,
    defaultValue = '',
    className,
    ...props
}) {
    return (
        <div className="bg-white ps-2.5 py-1.5 pe-3">
            {labelText && (
                <label htmlFor={name}>
                    {labelText}
                </label>
            )}
            <select
                name={name}
                id={name}
                className={`${className} min-w-[200px] w-full`}
                defaultValue={defaultValue}
                {...props}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.length > 0 && (
                    options.map((option, i) => (
                        <option key={i} value={option.value}>
                            {option.label || option.value}
                        </option>
                    ))
                )}
            </select>
        </div>
    );
};

export default FormSelectRow;