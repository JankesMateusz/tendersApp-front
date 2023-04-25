import React from "react";
import Item from "../Models/TenderItem";
import TenderItem from "./TenderItem";

const TenderItems: React.FC<{ items: Item[] }> = (props) => {
  return (
    <ul>{props.items.map((item) => (
        <TenderItem key={item.id} item={item}/>
    ))}</ul>
  );
};

export default TenderItems;
