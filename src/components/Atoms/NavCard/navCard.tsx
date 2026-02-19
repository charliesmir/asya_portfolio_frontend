import "./navCard.css";

export interface NavCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

export const NavCard = ({ title, image, onClick }: NavCardProps) => {
  return (
    <button
      className="NavCard"
      onClick={onClick}
      style={{ backgroundImage: `url(${image})` }}
    >
      {title}
    </button>
  );
};
