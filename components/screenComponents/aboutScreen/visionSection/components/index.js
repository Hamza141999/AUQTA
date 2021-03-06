import React from "react";
import classes from "./visionSectionCard.module.css";
import Image from "next/image";

function visionSectionCard({ lower, icon, title, description, btn }) {

  return (
    <div className={classes.card_bg}>
 <div
      // style={{ marginTop: lower ? "120px" : "0px" }}
      className={classes.card_body}
    >
      <div className={classes.icon_container}>
        <Image src={icon} layout="fill" className={classes.icon} alt="icon" />
      </div>
      <h1>{title}</h1>
      <p className={classes.description}>{description}</p>

    </div>
    </div>
   
  );
}

export default visionSectionCard;
