// Card.jsx
import classNames from "classnames";

function Card({
    children, 
    className = '',
    elevated,
    outlined,
    filled,
    nogap,
    small,
    medium,
    large,
    interactive,
    disabled,
    ...rest
}) {
    const cardClasses = classNames(
        "rounded-sm flex flex-col ",
        {
            "bg-white shadow h-auto [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] [box-shadow:var(--shadow)] rounded-2xl border-white": elevated,
            "bg-white border border-gray-200": outlined,
            "bg-gray-50 border border-gray-100": filled,
            // size
            "p-0": nogap,
            "p-3 gap-2": small,
            "p-6 gap-4": medium,
            "p-8 gap-6": large,
            "p-4 gap-3": !small && !medium && !large && !nogap,

            // hover
            "hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5": interactive,
            "opacity-50 pointer-events-none": disabled,
        }
    );

    return (
        <div className={`${cardClasses} ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
};

// Sub-components
// Card.Header
Card.Header = function CardHeader({ children, className = '' }) {
    return (
        <div className={classNames("border-b border-gray-100 pb-2", className)}>
            {children}
        </div>
    );
};

// Card.Body
Card.Body = function CardBody({ children, className = '' }) {
    return (
        <div className={classNames("flex-1", className)}>
            {children}
        </div>
    );
};

// Card.Footer
Card.Footer = function CardFooter({ children, className = '' }) {
    return (
        <div className={classNames("pt-2 border-t border-gray-100", className)}>
            {children}
        </div>
    );
};


export default Card;