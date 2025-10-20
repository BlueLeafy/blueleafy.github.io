// actions/authActions.js
import customFetch from "../apis/customFetch";

// Login
export async function loginAciton({ request }) {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    try {
        const response = await customFetch.post("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const error = await response.json();
            return { error: error.message };
        }

        const { user, token } = await response.json();
        return { user, token, success: true };
    } catch (error) {
        return { error: `Login failed ${error}` };
    }
}

// register action
export async function registerAction({ request }) {
    const formData = await request.formData();
    const userData = Object.fromEntries(formData);

    try {
        const response = await customFetch.post("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const error = await response.json();
            return { error: error.message };
        }

        const { user, token } = await response.json();
        return { user, token, success: true };
    } catch (error) {
        return { error: `Registration failed: ${error}` }
    }
}

// Logout
export async function logoutAction() {
    try {
        await customFetch("logout", { method: "POST" });
        return { success: true };
    } catch (error) {
        return { error: `Logout failed: ${error}` };
    }
}