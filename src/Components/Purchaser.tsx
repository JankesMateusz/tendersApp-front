import React from "react";
import PurchaserM from "../Models/PurchaserModel";
import classes from "../style/Purchaser.module.css";

const Purchaser: React.FC<{ purchaser: PurchaserM }> = (props) => {
  return (
    <div className={classes.container}>
      <label>{props.purchaser.officialName}</label>
      <label>{props.purchaser.city}</label>
      <label>{props.purchaser.address}</label>
      <label>{props.purchaser.province}</label>
      <label>{props.purchaser.zipCode}</label>
    </div>
  );
};

export default Purchaser;
