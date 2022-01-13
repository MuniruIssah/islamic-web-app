import React from "react";
import "./styles.scss";
const ProfileSubSection = ({ heading, title, description, children }) => {
  return (
    <div className="profileSubSection">
      <div className="pssContentSection">
        <span className="pSubSectionHeading">{heading}</span>
        <span className="pSubSectionTitle">{title}</span>
        <span className="pSubSectionDescription">{description}</span>
      </div>
      <div className="pSubSectionChild">
      {children}
      </div>
    </div>
  );
};

export default ProfileSubSection;
