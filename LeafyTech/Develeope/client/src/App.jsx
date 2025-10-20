// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PublicLayout, HomePage, LoginPage, LogoutPage } from "./pages/Public";
import { AuthLayout, Dashboard } from "./pages/Auth";
import { loginAciton, logoutAction } from "./actions/authActions";
import { authLoader } from "./loaders/authLoaders";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />, // public routes
        children: [
            {
                index: true,
                element: <HomePage />
            },
            // {
            //     path: "register", // is there a way to send to admin role an email to confirm access to new registered user (the new user wont' be able to access the deeper routes up to the confirmation of admin)
            //     element: <Register />,
            //     action: registerAction
            // },
            {
                path: "login",
                element: <LoginPage />,
                action: loginAciton
            },
            {
                // Exit admin session
                path: "logout",
                element: <LogoutPage />,
                action: logoutAction
            },
        ]
    },
    // Here all auth routes
    {
        path: "/auth",
        element: <AuthLayout />,
        loader: authLoader,
        children: [
            {
                index: true,
                element: <Dashboard />,
                handle: {title: "Dashboard"}
            }
        ]
    }
]); // <- This closes the createBrowserRouter array

function App() {
    return (
        <div className="my-root">
            <AuthProvider>
                <ProductProvider>
                    <RouterProvider router={router} />
                    <ToastContainer />
                </ProductProvider>
            </AuthProvider>
        </div>
    )
};

export default App;