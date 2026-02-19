import "./label.css";

export interface LabelProps {
  title: string;
  onClick?: () => void;
}

export const Label = ({ title }: LabelProps) => {
  return <button className="Label">{title}</button>;
};
