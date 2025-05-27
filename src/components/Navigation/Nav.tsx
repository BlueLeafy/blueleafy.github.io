import { Link } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import NavLink from "./NavLink";
import ThemeToggler from "./ThemeToggler";
import { linksData } from "../../data/LinksData";
import lightLogo from "/assets/lightLogo.png";
import darkLogo from "/assets/darkLogo.png";
import { useTheme } from "../../context/ThemeContext";

function Nav() {
    const { isOpen, toggleSidebar, closeSidebar } = useSidebar();
    const { isDark } = useTheme();

    const handleProjectClick = (shouldClose: boolean) => {
        if (shouldClose) closeSidebar();
    }

    const links = linksData;


    return (
        <nav className="px-5">
            <div className={`flex flex-row items-center justify-between`}>
                <div>
                    <Link to="/" className="font-montserrat">
                        <img className="h-[25px]" src={
                            isDark ? darkLogo : lightLogo
                        } />
                    </Link>
                </div>
                <div className="flex flex-row ms-5">
                    {links.map((link) => (
                        <NavLink
                            key={link.id}
                            link={link}
                            onProfileClick={toggleSidebar}
                            onProjectClick={handleProjectClick}
                            isOpen={isOpen}
                        />
                    ))}
                </div>
                {/*  Theme toggler */}
                <div className="ms-auto">
                    <ThemeToggler />
                </div>
            </div>
        </nav>
    );
};

export default Nav;