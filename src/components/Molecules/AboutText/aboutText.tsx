import "./aboutText.css";

export interface AboutTextProps {
  image: string;
  text: string;
}

export const AboutText = ({ image, text }: AboutTextProps) => {
  return (
    <div className="AboutText">
      <img src={image} className="AboutTextImage" />
      <div className="AboutTextContent">{text}</div>
    </div>
  );
};
