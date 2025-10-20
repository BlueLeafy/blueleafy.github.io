// actions/customActions.js
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../apis/customFetch";

// ADMIN
// create
export const registerAdminAction = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        await customFetch.post("/admin/register", data);
        toast.success("Registration successfull!");
        return redirect("/admin/login");
    } catch (error) {
        error.mgs = error.response?.data?.msg;
    }
};

// login
export const loginAction = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log("Login action: ", data);

    try {
        await customFetch.post("/admin/login", data);
        toast.success("Login successfull");
        return redirect("/admin/dashboard");
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    }
}

// logout
export const logoutAction = async () => {
    try {
        await customFetch.post("/admin/logout");
        return redirect("/admin")
    } catch (error) {
        console.error(error);
    }
}