// AdminSideNav.jsx
import SideNav from "./SideNav";
import { FaHome, FaUserPlus, FaPlus, FaChartBar } from 'react-icons/fa';
import { MdLogout } from "react-icons/md";

function AdminSideNav() {
    // side nav
    const links = [
        { label: "Prodotti", path: "/admin/dashboard", icon: FaHome },
        { label: "Crea user", path: "/admin/dashboard", icon: FaUserPlus },
        { label: "Crea prodotto", path: "/admin/dashboard/crea-prodotto", icon: FaPlus },
        { label: "Stats", path: "/admin/dashboard", icon: FaChartBar },
        {
            label: "Logout",
            path: "/admin/logout",
            icon: MdLogout,
            isForm: true //  this is a form submission
        }
    ];

    return (
        <SideNav links={links} />
    )
};

export default AdminSideNav;