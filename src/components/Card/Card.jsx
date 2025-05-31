import React from "react";
import "./Card.css";

const Card = ({heading, detail,service, emoji}) => {
  return (
    <div className="card"> 
     {service && <img src={emoji} alt="" />}
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
