import "./projectCard.css";
import Image from "next/image";

export interface ProjectCardProps {
  image: string;
  description: string;
}

export const ProjectCard = ({ image, description }: ProjectCardProps) => {
  return (
    <div className="ProjectCard">
      <Image
        className="ProjectCardImage"
        src={image}
        alt={description}
        width={540}
        height={500}
      />
      <div className="ProjectCardDescription">{description}</div>
    </div>
  );
};
