import { Label, LabelProps } from "@/components/Atoms/label/label";
import "./navSection.css";

export interface NavSectionProps {
  labels: LabelProps[];
}

export const NavSection = ({ labels }: NavSectionProps) => {
  return (
    <div className="NavSection">
      <Label title={labels[0].title} onClick={labels[0].onClick} />
      <div className="NavSectionRight">
      <Label title={labels[1].title} onClick={labels[1].onClick} />
      <Label title={labels[2].title} onClick={labels[2].onClick} />
      </div>
    </div>
  );
};
