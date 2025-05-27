import { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // check localStorage first
        const savedTheme = localStorage.getItem("theme");
        const systemDark = window.matchMedia("(prefers-color-scheme: dark").matches;
        setIsDark(savedTheme ? savedTheme === "dark" : systemDark);
    }, []);

    useEffect(() => {
        // Apply changes on user choice
        const html = document.documentElement;
        if (isDark) {
            html.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context
}

export { ThemeProvider, useTheme };