//hooks/usePreferences.js - PreferencesContext
import { useContext } from "react";
import PreferencesContext from "../context/PreferencesContext";

export const usePreferences = () => {
    const context = useContext(PreferencesContext);
    if (!context) throw new Error("usePreferences must be  used within PreferencesProvider");
    return context;
}