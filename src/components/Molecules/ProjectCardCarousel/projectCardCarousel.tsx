import {
  ProjectCard,
  ProjectCardProps,
} from "@/components/Atoms/ProjectCard/projectCard";
import "./projectCardCarousel.css";

export interface ProjectCardCarouselProps {
  card: ProjectCardProps;
  arrow: string;
  handlePrev: () => void;
  handleNext: () => void;
}

export const ProjectCardCarousel = ({
  card,
  arrow,
  handlePrev,
  handleNext,
}: ProjectCardCarouselProps) => {
  return (
    <div className="ProjectCardsCarousel">
      <img
        className="ProjectCardsCarouselButtonPrev"
        src={arrow}
        onClick={handlePrev}
      />
      <ProjectCard {...card} />
      <img
        className="ProjectCardsCarouselButtonNext"
        src={arrow}
        onClick={handleNext}
      />
    </div>
  );
};
