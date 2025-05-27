import { Outlet } from "react-router-dom";
import Header from "../components/UtilSections/Header";
import SideBar from "../components/SideBar/SideBar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";

function Root() {
    const { isOpen } = useSidebar();
    const { isDark } = useTheme();

    return (
        <div className={`${isDark ? "bg-[var(--dark-bg)]" : "bg-neutral-50"} h-screen flex flex-col font-roboto`}>
            <Header />

            <div className="flex flex-1 overflow-hidden pt-[60px]"> {/* Added padding-top instead of margin-top */}
                {/* Sidebar - scroll container issues in css file - Updated 20 May */}
                <div
                    className={`
                        ${isOpen ? "w-[430px]" : "w-[100px]"} 
                        ${isDark ? "bg-[var(--surface)]" : "bg-transparent"} 
                        border-r border-[#d1d1c7]
                        h-full
                        overflow-y-auto
                        shrink-0
                        transition-all
                        duration-200
                        ease-in-out
                        scrollbar-custom
                    `}
                >
                    <SideBar />
                </div>

                {/* Main Content */}
                <div
                    className={`flex-1 h-full overflow-y-auto transition-all duration-200 ease-in-out
                ${isDark ? "bg-[var(--surface)]" : "bg-transparent"} scrollbar-custom`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Root;