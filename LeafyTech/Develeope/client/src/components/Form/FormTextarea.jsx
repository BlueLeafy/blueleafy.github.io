// FormTextarea.jsx
function FormTextarea({ name, labelText, defaultValue, type, required = false, rows = 5, cols = 33, placeholder = "" }) {
    return (
        <div className="flex flex-col gap-y-0.5 form-row">
            <label htmlFor={name}>
                {labelText}
            </label>
            <textarea
                type={type}
                name={name}
                id={name}
                defaultValue={defaultValue}
                required={required}
                rows={rows}
                cols={cols}
                placeholder={placeholder}
            >
            </textarea>
        </div>
    );
};

export default FormTextarea;