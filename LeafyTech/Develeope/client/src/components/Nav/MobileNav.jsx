import { useState } from "react";

function MobileNav({ navLinks }) {
    const [isOpen, setIsOpen] = useState(false);

    const renderedNavLinks = navLinks.map((item, i) => {
        return (
            <li key={i}>
                <a href={item.path}
                    className="mobile-menu-link">
                    {item.label}
                </a>
            </li>
        )
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div>
            {/* burger button */}
            <button
                className="burger-nav-toggle ms-auto"
                onClick={toggleMenu}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>

            {/* menu that will open */}
            <div className={`${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"} transition-all duration-150 ease-in-out overflow-y-hidden mobile-menu`}>
                <ul>
                    {renderedNavLinks}
                </ul>
            </div>
        </div>

    );

};

export default MobileNav;