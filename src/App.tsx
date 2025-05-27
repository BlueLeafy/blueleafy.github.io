// Router for naviagiton
import { createBrowserRouter, RouterProvider } from "react-router";
import { SidebarProvider } from "./context/SidebarContext";
import Root from "./pages/Root";
// Theme toggler
import { ThemeProvider } from "./context/ThemeContext";
// Import pages
import HomePage from "./pages/HomePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "projects/:id", // Dynamic parameter
                element: <ProjectDetailsPage />
            },
            {
                path: "projects",
                element: <HomePage />
            }
        ]
    }
]);

function App() {
    return (
        <ThemeProvider>
            <SidebarProvider>
                <RouterProvider router={router} />
            </SidebarProvider>
        </ThemeProvider>
    );
};

export default App;