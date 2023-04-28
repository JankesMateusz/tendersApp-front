import React from "react";
import TenderItemM from "../Models/TenderItemModel";
import TenderItem from "./TenderItem";
import classes from "./TenderItems.module.css"

const TenderItems: React.FC<{ items: TenderItemM[] }> = (props) => {
  return (
    <ul className={classes.tenderItems}>{props.items.map((item) => (
        <TenderItem key={item.id} item={item}/>
    ))}</ul>
  );
};

export default TenderItems;
