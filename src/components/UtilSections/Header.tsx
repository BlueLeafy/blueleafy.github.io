import { useTheme } from "../../context/ThemeContext";
import Nav from "../Navigation/Nav";

function Header() {
    const { isDark } = useTheme();

    return (
        <header
            className={`fixed w-full py-2 top-0 z-50 
                    ${isDark ? "bg-[var(--elevated)]" : "bg-[var(--blueleafy-iceflow)]"}
                    `}
        >
            <Nav />
        </header>
    );
};

export default Header;