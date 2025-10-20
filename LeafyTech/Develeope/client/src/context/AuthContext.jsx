// context/AuthContext.js
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // CHeck for existing auth token on mount
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const userData = localStorage.getItem("userData");

        if (token && userData) {
            try {
                setUser(JSON.parse(userData));
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Failed to parse user data", error);
                clearAuth();
            }
        }
        setLoading(false);
    }, []);

    const clearAuth = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        setUser(null);
        setIsAuthenticated(false);
    };

    // These function just update the state - the actual API calls happen in router actions
    const loginSuccess = (userData, token) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("userData", JSON.stringify(userData));
        // use toaster
        setUser(userData);
        setIsAuthenticated(true);
    };

    const registerSuccess = (userData, token) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("userData", JSON.stringify(userData));
        // use toaster
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        clearAuth();
    };

    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
    };

    const value = {
        user,
        loading,
        isAuthenticated,
        loginSuccess,
        registerSuccess,
        logout,
        updateUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;