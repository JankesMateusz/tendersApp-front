import React from "react";
import Item from "../Models/TenderItem";

const TenderItem: React.FC<{ item: Item }> = (props) => {
  return (
    <li>
      <div>
        <h3>{props.item.category}</h3>
        <h3>{props.item.quantity}</h3>
        <h3>{props.item.cpuQuantity}</h3>
        <h3>{props.item.architecture}</h3>
        <h3>{props.item.os}</h3>
        <h3>{props.item.office}</h3>
        <h3>{props.item.remarks}</h3>
        <h3>{props.item.taskNumber}</h3>
        <h3>{props.item.purchaseForm}</h3>
      </div>
    </li>
  );
};

export default TenderItem;
