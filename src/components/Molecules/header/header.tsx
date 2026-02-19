import "./header.css";
import {
  HeaderButton,
  HeaderButtonProps,
} from "../../Atoms/headerButton/headerButton";

export interface HeaderProps {
  button: HeaderButtonProps[];
  title: string;
}

export const Header = ({ title, button }: HeaderProps) => {
  return (
    <div className="Header">
      <HeaderButton title={button[0].title} onClick={button[0].onClick} />
      <div className="HeaderTitle">{title}</div>
      <HeaderButton title={button[1].title} onClick={button[1].onClick} />
      <HeaderButton title={button[2].title} onClick={button[2].onClick} />
    </div>
  );
};
