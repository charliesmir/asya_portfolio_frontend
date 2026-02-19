import "./listItemThree.css";

export interface ListItemThreeProps {
  date: string;
  description: string;
  location: string;
}

export const ListItemThree = ({
  date,
  description,
  location,
}: ListItemThreeProps) => {
  return (
    <div className="ListItemThree">
      <div className="ListItemThreeDate">{date}</div>
      <div className="ListItemThreeDescription">{description}</div>
      <div className="ListItemThreeLocation">{location}</div>
    </div>
  );
};
