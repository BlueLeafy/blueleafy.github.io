// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Landing } from "./pages";
import { Login, Logout, Register, Dashboard, AllProducts, AddProduct, ProductDetails } from "./pages/Admin"
import { registerAdminAction, loginAction, logoutAction } from "./actions/customActions";
import { ToastContainer } from "react-toastify";
import { getAllProducts, getSingleProduct } from "./loaders/customLoaders";
import { ProductBasicInfo, ProductMediaList, ProductDocuments } from "./components/Products/Admin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: "register",
                element: <Register />,
                action: registerAdminAction
            },
            {
                path: "admin",
                element: <Login />,
                action: loginAction
            },
            {
                path: "admin/dashboard",
                element: <Dashboard />,
                // laoder here for context
                children: [
                    // here all the admin reserved pages will appear
                    {
                        // List of all products data
                        index: true,
                        element: <AllProducts />,
                        loader: getAllProducts, // filter products here
                    },
                    {
                        // Add new product
                        path: "crea-prodotto",
                        element: <AddProduct />
                    },
                    {
                        // :id product detail with possibility to edit data
                        path: ":id",
                        element: <ProductDetails />,
                        loader: getSingleProduct,
                        children: [
                            {
                                index: true,
                                element: <ProductBasicInfo />
                            },
                            {
                                path: "media",
                                element: <ProductMediaList />
                            },
                            {
                                path: "documenti",
                                element: <ProductDocuments />
                            }
                        ]
                    },



                ]
            },
            {
                // Exit admin session
                path: "admin/logout",
                element: <Logout />,
                action: logoutAction,
            },
        ]
    },
])

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer />
        </>
    )
};

export default App;