// SideNavs/SideNavDropdown.jsx
import SideNavDropdownItem from "./SideNavDropdownItem";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";

function SideNavDropdown({ item, index, isOpen, hasActiveChild, onToggle }) {
    const IconComponent = item.icon;

    return (
        <li key={index} className="sidenav-dropdown">
            {/* DROPDOWN TRIGGER BUTTON */}
            <button
                onClick={onToggle}
                className={`sidenav-item w-full text-left ${hasActiveChild ? "active" : ""}`}
            >
                <div className="flex flex-row items-center justify-between gap-x-2.5">
                    <div className="flex items-center gap-x-2.5">
                        <div className={IconComponent ? "flex" : "hidden"}>
                            {IconComponent && <IconComponent />}
                        </div>
                        <p>{item.label}</p>
                    </div>
                    {/* Chevron Icon */}
                    {!isOpen ? (
                        <FaChevronRight />
                    ) : (
                        <FaChevronDown />
                    )}
                </div>
            </button>

            {/* DROPDOWN ITEMS */}
            <SideNavDropdownItem
                item={item}
                isOpen={isOpen}
            />
        </li>
    );
}

export default SideNavDropdown;