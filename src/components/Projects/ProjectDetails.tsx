import Card from "../Utils/Card";
import { Project } from "../../data/ProjectsData";
import { useTheme } from "../../context/ThemeContext";

interface ProjectDetailsProps {
    project: Project;
}

function ProjectDetails({ project }: ProjectDetailsProps) {
    const { isDark } = useTheme();

    const videoMedia = project.media[0].video;

    const posterMedia = project.media[0].image;

    return (
        <div className="px-22 pt-22">

            <div className="flex flex-col items-center mb-20 gap-y-8">
                <h1 className={`text-5xl font-montserrat font-bold tracking-wider
                    ${isDark ? "text-[var(--blueleafy-sand)]" : "text-[var(--blueleafy-teal)]"}`}>{project.title}</h1>
                <p className={`font-roboto text-xl
                    ${isDark ? "text-[var(--txt-high)]" : ""}`}>{project.description}</p>
            </div>

            <Card primary rounded
                className="p-5 rounded-b-none shadow-[-4px_9px_25px_-6px_rgba(0,0,0,0.1)]"
            >
                <div className="grid grid-cols-2 gap-5">

                    {videoMedia && (
                        <>
                            <video className="w-full cursor-pointer col-span-full order-1" poster={videoMedia.src} autoPlay muted loop>
                                <source src={videoMedia.src} type="video/webm" />
                            </video>
                        </>

                    )}

                    {posterMedia.tablet && (
                        <>
                            <picture className="h-[720px] order-2">
                                <img src={posterMedia.tablet} alt={posterMedia.altText || ''} className="h-[720px]" />

                            </picture>
                        </>
                    )}

                    {posterMedia.mobile && (
                        <>
                            <picture className="h-[720px] order-3">
                                <img src={posterMedia.mobile} alt={posterMedia.altText || ''} className="h-[720px]" />

                            </picture>
                        </>
                    )}

                </div>

            </Card>
        </div>
    );
};

export default ProjectDetails;