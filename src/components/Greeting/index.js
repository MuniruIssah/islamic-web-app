import React from "react";
import "./styles.scss";
import { RiUser4Fill } from "react-icons/ri";
const Greeting = ({ name, image }) => {
  return (
    <div className="greeting">
      <div className="greetingName">
        <span>Salaam,</span>
        <span>{name}</span>
      </div>
      <div className="avatar" style={{ backgroundImage: `url(${image})` }}>
        {image ? null : <RiUser4Fill style={{fontSize:40,color:'grey'}} />}
      </div>
    </div>
  );
};

export default Greeting;
