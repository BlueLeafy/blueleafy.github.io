import { useSidebar } from "../../context/SidebarContext";
import { useTheme } from "../../context/ThemeContext";
import { CgProfile } from "react-icons/cg";
import SideContacts from "./SideContacts";

function SideBar() {
    const { toggleSidebar, isOpen } = useSidebar();
    const { isDark } = useTheme();

    return (
        <aside
            onClick={toggleSidebar}
            className="px-5 flex flex-col h-full py-8"
        >
            {/* Top Section - Will expand vertically */}
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? "mb-8" : "mb-4"
                }`}>
                <div className={`w-full ${isOpen ? "h-[200px]" : "h-[50px]"} transition-all duration-300 hidden`}>
                    <div className={`bg-amber-200 w-full h-full ${isOpen ? "rounded-none" : "rounded-full"
                        } flex items-center justify-center transition-all duration-50`}>
                        <CgProfile className="text-8xl" />
                    </div>
                </div>

                <div className={`space-y-2 w-full mt-4 
                    ${isDark ? "text-white" : "text-black"}`}>
                    <h1 className="font-semibold">Erika Memo</h1>
                    <p className="text-sm">Front-end developer</p>

                    <p className={`${isOpen ? "max-h-[200px] opacity-100 mt-4" : "max-h-0 opacity-0"
                        } overflow-hidden transition-all duration-500 ease-in-out`}>
                        A front-end developer who builds and optimizes the user interface of websites and apps.
                    </p>
                </div>
            </div>

            {/* Contacts Section - Will be pushed down */}
            <div className={`mt-auto transition-all duration-50 ${isOpen ? "pt-8" : "pt-4"
                }`}>
                <SideContacts />
            </div>
        </aside>
    );
}
export default SideBar;