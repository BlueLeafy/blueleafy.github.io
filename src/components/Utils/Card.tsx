import className from "classnames";
import { useTheme } from "../../context/ThemeContext";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
    warning?: boolean;
    rounded?: boolean;
}

function Card({ children, primary, secondary, warning, rounded, className: externalClassName, ...rest }: CardProps) {
    const { isDark } = useTheme();

    const classes = className(
        externalClassName, // Include external classes first
        {
            // Primary
            "bg-[var(--blueleafy-cream)] text-neutral-900 border-2 border-[#f4f4dd]": primary && !isDark,
            "bg-[var(--surface)] text-[var(--txt-high)] border-2 border-[var(--border-dark)]": primary && isDark,
            
            // Secondary
            "bg-[var(--blueleafy-cream)]": secondary && !isDark,
            "bg-[var(--elevated)] text-[var(--txt-high)]": secondary && isDark,

            "bg-red-500": warning,
            "rounded-2xl": rounded,
        }

    );

    // Use same concept of the button boolean expression

    return (
        <div className={`${classes} `} {...rest}>
            {children}
        </div>
    );
};

export default Card;