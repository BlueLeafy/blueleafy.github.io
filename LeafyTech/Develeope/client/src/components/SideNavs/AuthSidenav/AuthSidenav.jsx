// SideNav/AuthSidenav/AuthSidenav.jsx - 
import SideNav from "../SideNav";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaUsersLine, FaGears, FaPlus, FaList, FaUserLock } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { SiOpenmediavault } from "react-icons/si";

function AuthSidenav() {
    const links = [
        { label: "Dashboard", path: "/dashboard", icon: FaHome },
        {
            label: "Products", icon: AiFillProduct,
            dropdown: true,
            items: [
                { label: "All Products", path: "/prodotti", icon: FaList },
                { label: "Add product", path: "/crea-prodotto", icon: FaPlus },
            ]
        },
        {
            label: "Users", icon: FaUsersLine,
            dropdown: true,
            items: [
                { label: "All users", path: "/users" },
                { label: "Add user", path: "/crea-user", icon: FaUserPlus },
                { label: "Role and permissions", path: "/role-and-permissions", icon: FaUserLock }
            ]
        },
        { label: "Media library", path: "/media-library", icon: SiOpenmediavault },
        { label: "Settings", path: "/settings", icon: FaGears } // what setting???
    ]

    return (
        <SideNav links={links} />
    );
};

export default AuthSidenav;