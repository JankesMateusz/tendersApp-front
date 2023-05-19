import React from "react";
import classes from "./TenderItems.module.css";
import { observer } from "mobx-react";
import TenderItemStore from "../store/TenderItemStore";
import * as ContextMenu from "@radix-ui/react-context-menu";

const TenderItems: React.FC<{ store: TenderItemStore }> = (props) => {

  return (
    <div className={classes.tableContainer}>
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
          {props.store.items.map((item) => {
            let lp = props.store.items.lastIndexOf(item) + 1;
            return (
              <ContextMenu.Root key={item.id}>
                <ContextMenu.Trigger asChild>
                  <tr //TODO: move tr to separate component, TenderItem <--------
                    className={props.store.getEditMode? classes.hihlightedRow : classes.row} //????
                    onClick={() => {
                      props.store.setItemToEdit(item);
                    }}
                  >
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
                </ContextMenu.Trigger>
                <ContextMenu.Portal>
                  {!props.store.getEditMode && (
                    <ContextMenu.Content className={classes.ContextMenuContent}>
                      <ContextMenu.Label className={classes.ContextMenuLabel}>
                        Options:
                      </ContextMenu.Label>
                      <ContextMenu.Item
                        className={classes.ContextMenuItem}
                        onSelect={() => {
                          props.store.deleteTenderItem(item.id);
                        }}
                      >
                        Delete
                      </ContextMenu.Item>
                      <ContextMenu.Item className={classes.ContextMenuItem} onSelect={()=>{
                        props.store.duplicateTenderItem(item);
                      }}>
                        Duplicate
                      </ContextMenu.Item>
                    </ContextMenu.Content>
                  )}
                </ContextMenu.Portal>
              </ContextMenu.Root>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default observer(TenderItems);
