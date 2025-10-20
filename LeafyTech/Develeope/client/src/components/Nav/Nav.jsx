// Nav.jsx
import GlobalSearch from "./GlobalSearch";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Nav({
    navLinks = [],
    showSearch = true,
    showLogo = true,
    logo = null,
    className = '',
    children
}) {
    // h-[60px] in public
    return (
        <div className={`sticky top-0 z-50 w-full bg-white shadow-md ${className}`}>
            <nav className="w-full h-full flex flex-wrap lg:flex-nowrap justify-between items-center px-2.5">
                {/* Logo section */}
                {showLogo && (
                    <div className="pe-10 flex justify-start">
                        {/* Logo image */}
                        {logo || <h1><a href="/">LeafyTech</a></h1>}
                    </div>
                )}

                {/* Mobile Navigation */}
                {navLinks.length > 0 && (
                    <div className="block lg:hidden w-1/2">
                        <MobileNav navLinks={navLinks} />
                    </div>
                )}

                {/* Global Search */}
                {showSearch && (
                    <div className="w-full lg:w-auto justify-center">
                        <GlobalSearch />
                    </div>
                )}

                {/* Desktop Navigation */}
                {navLinks.length > 0 && (
                    <div className="hidden lg:flex w-1/3 justify-end">
                        <DesktopNav navLinks={navLinks} />
                    </div>
                )}

                {/* Custom children content */}
                {children}
            </nav>
        </div>
    )
};

export default Nav;