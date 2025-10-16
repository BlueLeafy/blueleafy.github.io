import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Breadcrumbs from "../components/Utils/Breadcrumbs";
import Footer from "../components/Footer/Footer";

function HomeLayout() {
    return (
        <div>
            <Nav />
            <Breadcrumbs />
            <main className="min-h-screen grid grid-cols-1 bg-[#e8e8e8]">
                <Outlet />
            </main>
            <Footer />
        </div >
    );
};

export default HomeLayout;