import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectDetails from "../components/Projects/ProjectDetails";
import { ProjectsData, Project } from "../data/ProjectsData";

function ProjectDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>('');



    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true);
                const foundProject = ProjectsData.find(p => p.id === id);

                const timer = setTimeout(() => {
                    if (foundProject) {
                        setProject(foundProject);
                    } else {
                        setError("Project not found.");
                    }
                    setLoading(false);
                }, 500); // Simulate network delay

                return () => clearTimeout(timer);
            } catch (err) {
                setError("Failed to load project");
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>
    if (!project) return <div>Project not found</div>

    return (
        <ProjectDetails project={project} />
    );
};

export default ProjectDetailsPage;