// loaders/authLoaders.js
import customFetch from "../apis/customFetch";

// Auth loader to check if user is authenticated
export async function authLoader() {
    const token = localStorage.getItem("authToken");

    if (!token) {
        return { user: null, isAuthenticated: false };
    }

    try {
        const response = await customFetch("auth/me", {
            headers: { "Authorization": `Bearer ${token}` }
        });

        if (response.ok) {
            const user = await response.json();
            return { user, isAuthenticated: true };
        }
    } catch (error) {
        console.error("Auth check failed", error);
    }

    return { user: null, isAuthenticated: false };
}