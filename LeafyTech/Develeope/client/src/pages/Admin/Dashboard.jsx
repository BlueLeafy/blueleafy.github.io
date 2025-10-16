// Admin/Dashboard.jsx
import { Outlet } from "react-router-dom";
import AdminSideNav from "../../components/SideNavs/AdminSideNav";

function Dashboard() {

    return (
        <div className="grid grid-cols-12 min-h-screen">
            <aside
                className="col-span-2 bg-[#f1f1f1]"
            >
                <AdminSideNav />
            </aside>
            <main className="w-full col-span-10 flex-1 bg-[#e8e8e8]">
                    <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;