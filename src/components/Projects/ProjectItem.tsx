import { useState } from "react";
import Card from "../Utils/Card";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

interface ProjectItemProps {
    project: {
        id: string;
        title: string;
        description?: string;
        imageUrl?: string | '';
    };
}

function ProjectItem({ project }: ProjectItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card className="col-span-1 min-h-[250px] flex flex-col" primary>
            <Link
                to={`/projects/${project.id}`}
                className="flex flex-col h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image container with fixed height */}
                <div className="relative h-[200px] flex-shrink-0">
                    {project.imageUrl && (
                        <div className="absolute h-full w-full overflow-hidden">
                            <img className="w-full h-full object-top object-cover" src={project.imageUrl} alt={project.title} />
                        </div>
                    )}
                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-[rgba(17,17,17,0.4)] flex items-end justify-start p-2.5 transition-opacity duration-100 ${isHovered ? "opacity-100" : "opacity-0"
                        }`}>
                        <button className="bg-white hover:bg-neutral-200 transition duration-100 ease px-3.5 py-2 rounded-lg flex flex-row items-center gap-x-1.5 cursor-pointer">
                            <GoArrowUpRight className="translate-y-0.5 text-neutral-900" />
                            <span className="capitalize text-neutral-900 text-md font-light">See more</span>
                        </button>
                    </div>
                </div>

                {/* Title section - now properly constrained */}
                <div className="p-2.5 flex-grow flex flex-col justify-between">
                    <h3 className="font-semibold font-monsterrat tracking-wide">{project.title}</h3>
                </div>
            </Link>
        </Card>)
};

export default ProjectItem;