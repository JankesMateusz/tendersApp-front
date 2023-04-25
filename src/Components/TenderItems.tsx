import React from "react";
import TenderItemM from "../Models/TenderItemModel";
import TenderItem from "./TenderItem";

const TenderItems: React.FC<{ items: TenderItemM[] }> = (props) => {
  return (
    <ul>{props.items.map((item) => (
        <TenderItem key={item.id} item={item}/>
    ))}</ul>
  );
};

export default TenderItems;
