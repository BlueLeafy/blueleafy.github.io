// hooks/useLoading.jsx - LoadingContext
import { useContext } from "react";
import LoadingContext from "../context/LoadingContext";

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) throw new Error("useLoading must be used within LoadingContext");
    return context;
};