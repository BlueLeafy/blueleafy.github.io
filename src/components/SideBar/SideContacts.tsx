import Card from "../Utils/Card";
import { Link } from "react-router-dom";
import { ContactsData } from "../../data/ContactsData";
import { useSidebar } from "../../context/SidebarContext";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Icon from "../Utils/Icon";

function SideContacts() {
    const { isOpen } = useSidebar();
    const { isDark } = useTheme();
    const [isHovered, setIsHovered] = useState<string | null>(null);

    const contacts = ContactsData;

    return (
        <>
            {contacts.map((item) => (
                <Card key={item.id} secondary rounded
                    className={`
                        w-full mb-3 transition duration-100 ease 
                        ${item.id === "1" ? item.backG : ''}
                        ${item.id === "1" && isHovered === item.id ? "bg-red-950" : ""}
                        ${item.id !== "1" && isHovered === item.id ? "bg-amber-50" : ''}
                        ${item.id !== "1" && isHovered === item.id && isDark ? "bg-neutral-600" : ""}
                        `}
                    onMouseEnter={() => setIsHovered(item.id)}
                    onMouseLeave={() => setIsHovered(null)}
                >
                    <Link to={item.path}
                        className="px-5 py-5 block"

                    >
                        <div className={`flex flex-row items-center gap-x-3.5 ${isOpen ? "justify-start" : "justify-center"}`}>
                            <div className={`${isOpen ? "text-5xl" : "text-3xl"} ${item.color} `}>
                                <item.icon />
                            </div>
                            <div className={isOpen ? "block" : "hidden"}>
                                <p className={`font-semibold ${item.color}`}>{item.label}</p>
                                <p className={`${item.id === "1"
                                    ? "text-white" // Always white for Email (item.id === "1")
                                    : isHovered === item.id
                                        ? "text-neutral-400 dark:text-neutral-300" // Hover state
                                        : "text-neutral-600 dark:text-neutral-400" // Default state
                                    }
                                    `}>{item.title}</p>
                            </div>
                        </div>
                    </Link>
                </Card>
            ))}
        </>
    );
};

export default SideContacts;