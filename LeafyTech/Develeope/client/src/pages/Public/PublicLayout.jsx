// pages/Public/PublicLayout.jsx - what outer users see
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import PublicNav from "../../components/Nav/PublicNav/PublicNav";

function PublicLayout() {
    return (
        <div>
            <PublicNav />
            <main className="min-h-screen grid grid-cols-1 bg-[#e8e8e8]">
                <Outlet />
            </main>
            <Footer />
        </div >
    );
};

export default PublicLayout;