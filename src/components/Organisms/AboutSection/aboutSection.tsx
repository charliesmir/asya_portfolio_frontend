import { Button, ButtonProps } from "@/components/Atoms/Button/button";
import "./aboutSection.css";
import {
  AboutEducation,
  AboutEducationProps,
} from "@/components/Molecules/AboutEducation/aboutEducation";
import {
  AboutExhibitions,
  AboutExhibitionsProps,
} from "@/components/Molecules/AboutExhibitions/aboutExhibitions";
import {
  AboutText,
  AboutTextProps,
} from "@/components/Molecules/AboutText/aboutText";

export interface AboutSectionProps {
  buttons: ButtonProps[];
  contentType: "statement" | "exhibitions" | "education";
  statement: AboutTextProps;
  exhibitions: AboutExhibitionsProps;
  education: AboutEducationProps;
}

export const AboutSection = ({
  buttons,
  contentType,
  statement,
  exhibitions,
  education,
}: AboutSectionProps) => {
  return (
    <div className="AboutSection">
      <div className="AboutSectionButtons">
        {buttons.map((button, index) => (
          <Button key={index} {...button} />
        ))}
      </div>
      <div className="AboutSectionContent">
        {contentType === "statement" && <AboutText {...statement} />}
        {contentType === "exhibitions" && <AboutExhibitions {...exhibitions} />}
        {contentType === "education" && <AboutEducation {...education} />}
      </div>
    </div>
  );
};
