// SideNavs/SideNavDropdownItem.jsx
import { NavLink } from "react-router-dom";


function SideNavDropdownItem({ item, isOpen }) {
    if (!isOpen) return null;

    return (
        <ul className="mt-1 space-y-0.5 border-l-2 border-gray-200 ms-15">
            {item.items.map((dropdownItem, dropdownIndex) => {
                const DropdownIconComponent = dropdownItem.icon; // Individual icon for each item
                return (
                    <li key={dropdownIndex}>
                        <NavLink
                            to={dropdownItem.path}
                            className={({ isActive }) =>
                                `sidenav-dropdown-item ${isActive
                                    ? "text-blue-600 font-medium bg-blue-50 border-l-2 border-blue-600"
                                    : "text-gray-700"
                                }`
                            }
                            end={true}
                        >
                            <div className="flex flex-row items-center gap-x-2.5">
                                <div className={DropdownIconComponent ? "flex" : "hidden"}>
                                    {DropdownIconComponent && <DropdownIconComponent />}
                                </div>
                                {dropdownItem.label}
                            </div>
                        </NavLink>
                    </li>

                )
            })}
        </ul>
    );
}

export default SideNavDropdownItem;