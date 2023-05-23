import React, { useState } from "react";
import classes from "../style/TenderItems.module.css";
import { observer } from "mobx-react";
import itemStore from "../store/TenderItemStore";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const TenderItems: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <ScrollArea.Root className={classes.tableContainer}>
      <ScrollArea.Viewport className={classes.ScrollAreaViewport}>
          {itemStore.items.length !== 0 ? (
            <table className={classes.tab}>
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
                {itemStore.items.map((item) => {
                  let lp = itemStore.items.lastIndexOf(item) + 1;
                  return (
                    <ContextMenu.Root key={item.id}>
                      <ContextMenu.Trigger asChild>
                        <tr //TODO: move tr to separate component, TenderItem <--------
                          className={
                            clicked ? classes.hihlightedRow : classes.row
                          } //????
                          onContextMenu={() => console.log("dupa")}
                          onClick={() => {
                            handleClicked();
                            itemStore.setItemToEdit(item);
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
                        {!itemStore.getEditMode && (
                          <ContextMenu.Content
                            className={classes.ContextMenuContent}
                          >
                            <ContextMenu.Label
                              className={classes.ContextMenuLabel}
                            >
                              Options:
                            </ContextMenu.Label>
                            <ContextMenu.Item
                              className={classes.ContextMenuItem}
                              onSelect={() => {
                                itemStore.deleteTenderItem(item.id);
                              }}
                            >
                              Delete
                            </ContextMenu.Item>
                            <ContextMenu.Item
                              className={classes.ContextMenuItem}
                              onSelect={() => {
                                itemStore.duplicateTenderItem(item);
                              }}
                            >
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
          ) : (
            <h1>(Placeholder) Add items!</h1>
          )}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
};

export default observer(TenderItems);
