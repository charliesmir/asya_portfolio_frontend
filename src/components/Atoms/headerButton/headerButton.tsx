import "./headerButton.css";

export interface HeaderButtonProps {
  title: string;
  onClick: () => void;
}

export const HeaderButton = ({ title, onClick }: HeaderButtonProps) => {
  return (
    <button className="HeaderButton" onClick={onClick}>
      {title}
    </button>
  );
};
