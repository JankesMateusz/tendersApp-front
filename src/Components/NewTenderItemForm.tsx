import classes from "./NewTenderItem.module.css";
import React, { useEffect, useState } from "react";
import TenderItemM from "../Models/TenderItemModel";
import TenderItemStore from "../store/TenderItemStore";
import { observer } from "mobx-react";

const NewTenderItemForm: React.FC<{ store: TenderItemStore }> = (props) => {
  const INITIAL_VALUES: TenderItemM = {
    id: "",
    category: "",
    quantity: 0,
    cpuQuantity: 0,
    architecture: "",
    os: "",
    office: "",
    remarks: "",
    taskNumber: 0,
    purchaseForm: "",
  };

  const [category, setCategory] = useState(INITIAL_VALUES.category);
  const [quantity, setQuantity] = useState(INITIAL_VALUES.quantity);
  const [cpuQuantity, setCpuQuantity] = useState(INITIAL_VALUES.cpuQuantity);
  const [architecture, setArchitecture] = useState(INITIAL_VALUES.architecture);
  const [os, setOs] = useState(INITIAL_VALUES.os);
  const [office, setOffice] = useState(INITIAL_VALUES.office);
  const [remarks, setRemarks] = useState(INITIAL_VALUES.remarks);
  const [taskNumber, setTaskNumber] = useState(INITIAL_VALUES.taskNumber);
  const [purchaseForm, setPurchaseForm] = useState(INITIAL_VALUES.purchaseForm);

  type Dictionary<T> = {
    [key: string]: T;
  };

  useEffect(() => {
    console.log(props.store.editMode);
    if (props.store.editMode) {
      setCategory(props.store.toEdit.category);
      setQuantity(props.store.toEdit.quantity);
      setCpuQuantity(props.store.toEdit.cpuQuantity);
      setArchitecture(props.store.toEdit.architecture);
      setOs(props.store.toEdit.os);
      setOffice(props.store.toEdit.office);
      setRemarks(props.store.toEdit.remarks);
      setTaskNumber(props.store.toEdit.taskNumber);
      setPurchaseForm(props.store.toEdit.purchaseForm);
    }
  }, [props.store.editMode, props.store.toEdit]);

  const categories: Dictionary<string> = {
    key1: "NTB",
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

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let newItem = new TenderItemM(
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
    props.store.addTenderItem(newItem);

    resetToInitValues();
  };

  const handleCancel = () => {
    props.store.toggleEditMode();
    resetToInitValues();
  };

  const resetToInitValues = () => {
    setCategory(INITIAL_VALUES.category);
    setQuantity(INITIAL_VALUES.quantity);
    setCpuQuantity(INITIAL_VALUES.cpuQuantity);
    setArchitecture(INITIAL_VALUES.architecture);
    setOs(INITIAL_VALUES.os);
    setOffice(INITIAL_VALUES.office);
    setRemarks(INITIAL_VALUES.remarks);
    setTaskNumber(INITIAL_VALUES.taskNumber);
    setPurchaseForm(INITIAL_VALUES.purchaseForm);
  };

  const handleItemOverwrite = () => {
    let newItem = new TenderItemM(
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

    props.store.overwriteItem(props.store.toEdit, newItem);
    handleCancel();
  };

  return (
    <div>
      <form className={classes.itemForm} onSubmit={handleSubmit}>
        <label>Category</label>
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
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
          value={quantity}
          type="number"
          onChange={(event) => setQuantity(event.target.valueAsNumber)}
        />
        <label>CPU Qty</label>
        <input
          id="cpuNumber"
          value={cpuQuantity !== 0 ? cpuQuantity : ""}
          type="number"
          onChange={(event) => setCpuQuantity(event.target.valueAsNumber)}
        />
        <label>Architecture</label>
        <input
          name="architecture"
          value={architecture}
          type="text"
          onChange={(event) => setArchitecture(event.target.value)}
        />
        <label>OS</label>
        <input
          name="os"
          value={os}
          type="text"
          onChange={(event) => setOs(event.target.value)}
        />
        <label>Office</label>
        <input
          name="office"
          value={office}
          type="text"
          onChange={(event) => setOffice(event.target.value)}
        />
        <label>Remarks</label>
        <input
          name="remarks"
          value={remarks}
          type="text"
          onChange={(event) => setRemarks(event.target.value)}
        />
        <label>Task Nr</label>
        <input
          name="taskNr"
          value={taskNumber !== 0 ? taskNumber : ""}
          type="number"
          onChange={(event) => setTaskNumber(event.target.valueAsNumber)}
        />
        <label>Purchase Form</label>
        <input
          name="purchaseForm"
          value={purchaseForm}
          type="text"
          onChange={(event) => setPurchaseForm(event.target.value)}
        />
      </form>
      {props.store.editMode ? (
        <div>
          <button onClick={handleItemOverwrite}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleSubmit}>Add</button>
      )}
    </div>
  );
};

export default observer(NewTenderItemForm);
