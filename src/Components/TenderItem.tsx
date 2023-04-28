import React from "react";
import TenderItemM from "../Models/TenderItemModel";
import classes from "./TenderItems.module.css"

const TenderItem: React.FC<{ item: TenderItemM }> = (props) => {
  return (
    <li>
      <div className={classes.tenderItem}>
        <p>{props.item.category}</p>
        <p>{props.item.quantity}</p>
        <p>{props.item.cpuQuantity}</p>
        <p>{props.item.architecture}</p>
        <p>{props.item.os}</p>
        <p>{props.item.office}</p>
        <p>{props.item.remarks}</p>
        <p>{props.item.taskNumber}</p>
        <p>{props.item.purchaseForm}</p>
      </div>
    </li>
  );
};

export default TenderItem;
