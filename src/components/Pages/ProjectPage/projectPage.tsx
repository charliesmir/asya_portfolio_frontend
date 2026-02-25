import {
  ProjectCardCarousel,
  ProjectCardCarouselProps,
} from "@/components/Molecules/ProjectCardCarousel/projectCardCarousel";
import "./projectPage.css";

export interface ProjectPageProps {
  title: string;
  description: string;
  gallery: ProjectCardCarouselProps;
}

export const ProjectPage = ({
  title,
  description,
  gallery,
}: ProjectPageProps) => {
  return (
    <div className="ProjectPage">
      <div className="ProjectPageTitle">{title}</div>
      <div className="ProjectPageDescription">{description}</div>
      <ProjectCardCarousel {...gallery} />
    </div>
  );
};
