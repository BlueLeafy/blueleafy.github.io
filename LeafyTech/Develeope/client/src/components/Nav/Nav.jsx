// Nav.jsx
import GlobalSearch from "./GlobalSearch";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Nav() {
    const navLinks = [
        { label: "home", path: "/" },
        { label: "prodotti", path: "/prodotti" },
        { label: "parametri", path: "/parametri" },
        { label: "applicazioni", path: "/applicazioni" },
        { label: "bibliotecnica", path: "/bibliotecnica" },
        { label: "azienda", path: "/azienda" },
        { label: "contatti", path: "/contatti" },
    ];

    return (
        <div className="sticky top-0 z-50 h-[60px] w-full bg-white">
            <nav className="w-full h-[60px] flex flex-wrap lg:flex-nowrap justify-between items-center px-2.5">
                <div className="w-1/2 lg:w-1/3 flex justify-start">
                    {/* Logo image */}
                    <h1><a href="/">LeafyTech</a></h1>
                </div>
                <div className="block lg:hidden w-1/2">
                    <MobileNav navLinks={navLinks} />
                </div>
                <div className="w-full lg:w-auto justify-center">
                    <GlobalSearch />
                </div>
                <div className="hidden lg:flex w-1/3 justify-end">
                    <DesktopNav navLinks={navLinks} />
                </div>
            </nav>
        </div>
    )
};

export default Nav;