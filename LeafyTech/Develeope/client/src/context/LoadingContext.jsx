// context/LoadingContext.jsx - Global loading states
import { createContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [loadingStates, setLoadingStates] = useState({});

    const startLoading = (key) => {
        setLoadingStates(prev => ({ ...prev, [key]: true }));
    };

    const stopLoading = (key) => {
        setLoadingStates(prev => ({ ...prev, [key]: false }));
    };

    const isLoading = (key = "global") => loadingStates[key] || false;

    const value = {
        startLoading,
        stopLoading,
        isLoading
    };

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingContext;