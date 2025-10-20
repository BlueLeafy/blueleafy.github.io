// SideNav.jsx
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SideNavLink from "./SideNavLink";
import SideNavDropdown from "./SideNavDropdown";

function SideNav({ children, links }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();

    // Auto-open dropdown if current path matches any dropdown item
    useEffect(() => {
        links.forEach((item, index) => {
            if (item.dropdown && item.items) {
                const isActiveDropdown = item.items.some(dropdownItem =>
                    location.pathname.startsWith(dropdownItem.path)
                );
                if (isActiveDropdown) {
                    setOpenDropdown(index);
                }
            }
        });
    }, [location.pathname, links]);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const renderedLinks = links.map((item, i) => {
        const isDropdownOpen = openDropdown === i;
        const hasActiveChild = item.dropdown && item.items?.some(dropdownItem => 
            location.pathname.startsWith(dropdownItem.path)
        );

        if (item.dropdown) {
            return (
                <SideNavDropdown
                    key={i}
                    item={item}
                    index={i}
                    isOpen={isDropdownOpen}
                    hasActiveChild={hasActiveChild}
                    onToggle={() => toggleDropdown(i)}
                />
            );
        }

        return (
            <SideNavLink
                key={i}
                item={item}
            />
        );
    });

    return (
        <nav className="ps-2">
            <div className="w-[250px]">
                <ul className="flex flex-col justify-center gap-y-0.5 mt-5">
                    {renderedLinks}
                </ul>
                {children}
            </div>
        </nav>
    );
}

export default SideNav;