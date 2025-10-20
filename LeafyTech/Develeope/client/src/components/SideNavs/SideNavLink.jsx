// SideNavs/SideNavLink.jsx
import { NavLink } from "react-router-dom";

function SideNavLink({ item }) {
    const IconComponent = item.icon;

    return (
        <li>
            <NavLink
                to={item.path}
                className={({ isActive }) =>
                    `sidenav-item ${isActive ? "active" : ""}`
                }
                end={true}
            >
                <div className="flex flex-row items-center gap-x-2.5">
                    <div className={IconComponent ? "flex" : "hidden"}>
                        {IconComponent && <IconComponent />}
                    </div>
                    <div>
                        <p>{item.label}</p>
                    </div>
                </div>
            </NavLink>
        </li>
    );
}

export default SideNavLink;