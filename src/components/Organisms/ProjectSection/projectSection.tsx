import { NavCard, NavCardProps } from "@/components/Atoms/NavCard/navCard";
import "./projectSection.css"

export interface ProjectSectionProps {
    title: string;
    projects: NavCardProps[];
}

export const ProjectSection = ({ title, projects }: ProjectSectionProps) => {
    return (
        <div className="ProjectSection"> 
            <div className="ProjectSectionTitle">{title}</div>
            <div className="ProjectSectionCards">
                {projects.map((project, index) => (
                    <NavCard key={index} {...project}/>
                ))}
            </div>
        </div>
    );
}