import "./aboutEducation.css";
import {
  ListItemTwo,
  ListItemTwoProps,
} from "@/components/Atoms/listItemTwo/listItemTwo";

export interface AboutEducationProps {
  educations: ListItemTwoProps[];
}

export const AboutEducation = ({ educations }: AboutEducationProps) => {
  return (
    <div className="AboutEducation">
      {educations.map((education, index) => (
        <ListItemTwo key={index} {...education} />
      ))}
    </div>
  );
};
