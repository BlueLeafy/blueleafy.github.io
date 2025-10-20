// AuthNav/UserMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Utils/Button";
import { FaGear } from "react-icons/fa6";

function UserMenu() {
    const [isOpen, setIsOpen] = useState(null);

    const menuLinks = [
        { label: "Profile", path: "?" },
        { label: "Settings", path: "?" },
        { label: "Logout", path: "/logout" }
    ];

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative ms-auto">
            <button
                className={`hover:bg-blue-100  py-2.5 px-3 cursor-pointer rounded-full ${isOpen ? "bg-blue-100" : "bg-none"}`}
                onClick={handleDropdown}
            >
                <div className="flex flex-row items-center justify-between gap-x-5">
                    <FaGear className="text-black text-2xl" />
                </div>
            </button>
            {isOpen && (
                <div className="absolute z-40 w-48 right-0 min-h-[60px]">
                    <div className="flex flex-col bg-white rounded-md shadow py-2">
                        {menuLinks.map((link, i) => (
                            <div key={i}>
                                <Link to={link.path}
                                    className="px-2.5 py-1 block hover:bg-blue-100 hover:font-semibold">
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;