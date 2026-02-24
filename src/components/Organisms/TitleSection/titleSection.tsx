import "./titleSection.css";

export interface TitleSectionProps {
  image: string;
  name: string;
  description: string;
}

export const TitleSection = ({
  image,
  name,
  description,
}: TitleSectionProps) => {
  return (
    <div className="TitleSection">
      <img className="TitleSectionImage" src={image} />
      <div className="TitleSectionInfo">
        <div className="TitleSectionName">{name}</div>
        <div className="TitleSectionDescription">{description}</div>
      </div>
    </div>
  );
};
