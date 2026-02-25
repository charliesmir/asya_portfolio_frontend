import "./contactSection.css";

export interface ContactSectionProps {
  title: string;
  email: string;
  emailLink: string;
  instagram: string;
  instagramLink: string;
  telegram: string;
  telegramLink: string;
  image: string;
}

export const ContactSection = ({
  title,
  email,
  emailLink,
  instagram,
  instagramLink,
  telegram,
  telegramLink,
  image,
}: ContactSectionProps) => {
  return (
    <div className="ContactSection">
      <div className="ContactSectionTitle">{title}</div>
      <div className="ContactSectionInfo">
        <div className="ContactSectionLeft">
          <a href={emailLink} className="ContactSectionLink">
            {email}
          </a>
        </div>
        <img src={image} className="ContactSectionImage" />
        <div className="ContactSectionRight">
          <a href={instagramLink} className="ContactSectionLink">
            {instagram}
          </a>
          <a href={telegramLink} className="ContactSectionLink">
            {telegram}
          </a>
        </div>
      </div>
    </div>
  );
};
