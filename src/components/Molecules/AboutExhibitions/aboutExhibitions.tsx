import {
  ListItemThree,
  ListItemThreeProps,
} from "@/components/Atoms/listItemThree/listItemThree";
import "./aboutExhibitions.css";

export interface AboutExhibitionsProps {
  exhibitions: ListItemThreeProps[];
}

export const AboutExhibitions = ({ exhibitions }: AboutExhibitionsProps) => {
  return (
    <div className="AboutExhibitions">
      {exhibitions.map((exhibition, index) => (
        <ListItemThree key={index} {...exhibition} />
      ))}
    </div>
  );
};
