import "./listItemTwo.css";

export interface ListItemTwoProps {
  date: string;
  description: string;
}

export const ListItemTwo = ({ date, description }: ListItemTwoProps) => {
  return (
    <div className="ListItemTwo">
      <div className="ListItemTwoDate">{date}</div>
      <div className="ListItemTwoDescription">{description}</div>
    </div>
  );
};
