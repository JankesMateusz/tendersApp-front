import React, { useState } from "react";
import classes from "./TenderItems.module.css";
import { observer } from "mobx-react";
import TenderItemStore from "../store/TenderItemStore";

const TenderItems: React.FC<{ store: TenderItemStore }> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDeleteItem = (id: string) => {
    props.store.deleteTenderItem(id);
  };

  return (
    <div className={classes.tableContainer}>
      <table>
        <thead>
          <tr>
            {!props.store.getEditMode&& isHovered && <th>Delete</th>}
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
          {props.store.items.map((item) => {
            let lp = props.store.items.lastIndexOf(item) + 1;
            return (
              <tr           //TODO: move tr to separate component, TenderItem <--------
                key={item.id}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onClick={() => props.store.setItemToEdit(item)} //
              >
                {!props.store.getEditMode && isHovered && (
                  <td>
                    <button onClick={() => handleDeleteItem(item.id)}>X</button>
                  </td>
                )}
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
    </div>
  );
};

export default observer(TenderItems);
