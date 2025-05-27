import { useTheme } from "../../context/ThemeContext";

function ThemeToggler() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className="relative w-[78px] h-[36px] block">
            <input
                type="checkbox"
                className="checkbox"
                checked={isDark}
                onChange={toggleTheme}
            />
            <div className="knobs" />
            <div className="layer" />
        </div>
    );
};

export default ThemeToggler;