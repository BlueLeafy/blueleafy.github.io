// context/PreferencesContext.jsx - User settings and preferences
// user profile setting
import { createContext, useState, useEffect } from "react";

const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
    const [preferences, setPreferences] = useState({
        // what could they be ???
        // language???
        // notifications ???
        // emailUpdates ?? etc....
        // any other deas ???
    });

    useEffect(() => {
        const saved = localStorage.getItem("preferences");
        if (saved) setPreferences(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("preferences", JSON.stringify(preferences));
    }, [preferences]);

    const updatePreferences = (key, value) => {
        setPreferences(prev => ({ ...prev, [key]: value }));
    };

    const value = {
        preferences,
        updatePreferences
    };

    return (
        <PreferencesContext.Provider value={value}>
            {children}
        </PreferencesContext.Provider>
    );
};

export default PreferencesContext;