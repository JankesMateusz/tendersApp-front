import React, {useContext} from "react";
import TenderItemM from "../Models/TenderItemModel";
import TenderItem from "./TenderItem";
import classes from "./TenderItems.module.css";
import { TenderItemsContext } from "../store/TenderItemsContext";

const TenderItems: React.FC = () => {

  const itemsContext = useContext(TenderItemsContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Lp</th>
          <th>Category</th>
          <th>Qty</th>
          <th>Cpu qty</th>
          <th>Architecture</th>
          <th>OS</th>
          <th>Office</th>
          <th>Remarks</th>
          <th>Task Nr</th>
          <th>Purchase Form</th>
        </tr>
      </thead>
      <tbody>
        {itemsContext.items.map((item) => {
          let lp = itemsContext.items.lastIndexOf(item) + 1;
          return (
            <tr key={item.id}>
              <td>{lp}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>{item.cpuQuantity}</td>
              <td>{item.architecture}</td>
              <td>{item.os}</td>
              <td>{item.office}</td>
              <td>{item.remarks}</td>
              <td>{item.taskNumber}</td>
              <td>{item.purchaseForm}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TenderItems;

// <ul className={classes.tenderItems}>{props.items.map((item) => (
// <TenderItem key={item.id} item={item}/>
// ))}</ul>
