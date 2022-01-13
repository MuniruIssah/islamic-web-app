import React from "react";
import "./styles.scss";
const AyahOfTheDay = ({
  ayah = `It is Allah who erected 
  the heavens without
   pillars that you [can] see, 
   then He established Himself above the Throne..`,
}) => {
  return (
    <div className="ayahOfTheDay">
      <span>AYAH OF THE DAY</span>
      <p>{ayah}</p>
      <span>Read Now</span>
    </div>
  );
};

export default AyahOfTheDay;
