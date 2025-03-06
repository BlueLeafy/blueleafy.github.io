import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className("px-3 py-1.5 border font-medium cursor-pointer", {
        "border-blue-500 bg-blue-500 text-white": primary,
        "border-gray-100 bg-gray-100 text-black": secondary,
        "border-green-500 bg-green-500 text-black": success,
        "border-yellow-400 bg-yellow-400 text-black": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "rounded-md": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-400": outline && warning,
        "text-red-500": outline && danger,
    });

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
};

// Use TypeScripts for props validations

export default Button;