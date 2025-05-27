import { useSidebar } from "../../context/SidebarContext";
import ProjectItem from "./ProjectItem";

interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    videoSrc?: string;
}

function HomeProjects() {
    const { isOpen } = useSidebar()

    const projects: Project[] = [
        { id: "1", title: "Ironok", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ab.", imageUrl: "./assets/images/ironok-shot.png" },
        { id: "2", title: "Metanoia", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ab.", imageUrl: "./assets/images/metanoia-shot.png" },
    ];


    return (
        <div className={`grid gap-0.5 ${isOpen ? "grid-cols-3" : "grid-cols-4"} transition duration-100 ease`}>
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
};

export default HomeProjects;