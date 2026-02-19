import "./button.css";

export interface ButtonProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

export const Button = ({ title, isActive, onClick }: ButtonProps) => {
  return (
    <button className={`Button ${isActive}`} onClick={onClick}>
      {title}
    </button>
  );
};
