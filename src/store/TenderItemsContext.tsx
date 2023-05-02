import React, { useState } from "react";
import TenderItemM from "../Models/TenderItemModel";
import { log } from "console";

type TenderItemsContextObj = {
  items: TenderItemM[];
  addItem: (
    category: string,
    quantity: number,
    cpuQuantity: number,
    architecture: string,
    os: string,
    office: string,
    remarks: string,
    taskNumber: number,
    purchaseForm: string
  ) => void;
  removeItem: (id: string) => void;
};

export const TenderItemsContext = React.createContext<TenderItemsContextObj>({
  items: [],
  addItem: () => {},
  removeItem: (id: string) => {},
});

const TenderItemsContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [items, setItems] = useState<TenderItemM[]>([]);

  const addItemHandler = (
    category: string,
    quantity: number,
    cpuQuantity: number,
    architecture: string,
    os: string,
    office: string,
    remarks: string,
    taskNumber: number,
    purchaseForm: string
  ) => {
    const newItem = new TenderItemM(
      category,
      quantity,
      cpuQuantity,
      architecture,
      os,
      office,
      remarks,
      taskNumber,
      purchaseForm
    );
        console.log(newItem)
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItemHandler = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const contextValue: TenderItemsContextObj = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <TenderItemsContext.Provider value={contextValue}>
      {props.children}
    </TenderItemsContext.Provider>
  );
};


export default TenderItemsContextProvider;