import { log } from "console";
import classes from "./NewTenderItem.module.css";
import React, { useContext, useState } from "react";
import TenderItemM from "../Models/TenderItemModel";
import { TenderItemsContext } from "../store/TenderItemsContext";

const NewTenderItem: React.FC = () => {
  const itemsContext = useContext(TenderItemsContext);

  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [cpuQuantity, setCpuQuantity] = useState(0);
  const [architecture, setArchitecture] = useState("");
  const [os, setOs] = useState("");
  const [office, setOffice] = useState("");
  const [remarks, setRemarks] = useState("");
  const [taskNumber, setTaskNumber] = useState(0);
  const [purchaseForm, setPurchaseForm] = useState("");

  type Dictionary<T> = {
    [key: string]: T;
  };

  const categories: Dictionary<string> = {
    key1: "NOTEBOOK",
    key2: "PC",
    key3: "SERVER",
    key4: "STORAGE",
    key5: "MONITOR",
    key6: "TABLET",
    key7: "AIO",
    key8: "PRINTERS",
    key9: "MFP",
    key10: "MS_OFFICE",
    key11: "COPIERS",
    key12: "SCANNER",
    key13: "PLOTTER",
    key14: "PES",
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  
    setCategory(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    itemsContext.addItem(
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
  };

  return (
    <form className={classes.itemForm} onSubmit={handleSubmit}>
      <label>Category</label>
      <select name="category" value={category} onChange={handleCategoryChange}>
        <option></option>
        <option value={categories.key1}>Notebook</option>
        <option value={categories.key2}>PC</option>
        <option value={categories.key3}>Server</option>
        <option value={categories.key4}>Storage</option>
        <option value={categories.key5}>Monitor</option>
        <option value={categories.key6}>Tablet</option>
        <option value={categories.key7}>AiO</option>
        <option value={categories.key8}>Printers</option>
        <option value={categories.key9}>MFP</option>
        <option value={categories.key10}>MS Office</option>
        <option value={categories.key11}>Copiers</option>
        <option value={categories.key12}>Scanner</option>
        <option value={categories.key13}>Plotter</option>
        <option value={categories.key14}>PES</option>
      </select>
      <label>Quantity</label>
      <input
        type="number"
        onChange={(event) => setQuantity(event.target.valueAsNumber)}
      />
      <label>CPU Qty</label>
      <input
        type="number"
        onChange={(event) => setCpuQuantity(event.target.valueAsNumber)}
      />
      <label>Architecture</label>
      <input
        type="text"
        onChange={(event) => setArchitecture(event.target.value)}
      />
      <label>OS</label>
      <input type="text" onChange={(event) => setOs(event.target.value)} />
      <label>Office</label>
      <input type="text" onChange={(event) => setOffice(event.target.value)} />
      <label>Remarks</label>
      <input type="text" onChange={(event) => setRemarks(event.target.value)} />
      <label>Task Nr</label>
      <input
        type="number"
        onChange={(event) => setTaskNumber(event.target.valueAsNumber)}
      />
      <label>Purchase Form</label>
      <input
        type="text"
        onChange={(event) => setPurchaseForm(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default NewTenderItem;
