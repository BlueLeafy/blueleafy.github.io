// Button.jsx
import classNames from "classnames";

function Button({ children, className = '', primary, secondary, danger, warning,outlined, text, ...rest }) {
    const btnClasses = classNames(
        "btn",
        {
            "btn-primary": primary, // Action (submit)
            "btn-secondary": secondary, // Aciton (cancel)
            "btn-danger": danger,
            "btn-warning": warning,
            "outlined": outlined, // Action (edit with icon)
            "text": text, // Links
            // danger, warning
        })

    return (
        <button
            className={`${btnClasses} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;