import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";


interface NavLinkProps {
    link: {
        id: string;
        label: string;
        path: string;
    };
    onProfileClick?: () => void;
    onProjectClick?: (isOpen: boolean) => void;
    isOpen?: boolean;
}

function NavLink({ link, onProfileClick, onProjectClick, isOpen }: NavLinkProps) {
    const { isDark } = useTheme();

    const handleClick = (e: React.MouseEvent) => {
        if (link.label === "profile" || link.label === "contacts") {
            e.preventDefault();
            onProfileClick?.();
        }
        // Other links will navigate normally
        if (link.label === "projects" && isOpen) {
            onProjectClick?.(isOpen);
        }
    };

    return (
        <Link
            to={link.path}
            onClick={handleClick}
            className={`px-5 py-2.5 capitalize tracking-wide block cursor-pointer font-montserrat font-medium hover:text-amber-200 transition-colors duration-100 ease
                ${isDark ? "text-neutral-50" : "text-zinc-800"}`}
        >
            {link.label}
        </Link>
    );
};

export default NavLink;