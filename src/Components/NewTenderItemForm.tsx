import classes from "../style/NewTenderItem.module.css";
import React, { useEffect, useState } from "react";
import TenderItemM from "../Models/TenderItemModel";
import itemStore from "../store/TenderItemStore";
import { observer } from "mobx-react";
import { Add, Clear, Save } from "@material-ui/icons";

const NewTenderItemForm: React.FC = () => {
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
    if (itemStore.editMode) {
      setCategory(itemStore.toEdit.category);
      setQuantity(itemStore.toEdit.quantity);
      setCpuQuantity(itemStore.toEdit.cpuQuantity);
      setArchitecture(itemStore.toEdit.architecture);
      setOs(itemStore.toEdit.os);
      setOffice(itemStore.toEdit.office);
      setRemarks(itemStore.toEdit.remarks);
      setTaskNumber(itemStore.toEdit.taskNumber);
      setPurchaseForm(itemStore.toEdit.purchaseForm);
    }
  }, [itemStore.editMode, itemStore.toEdit]);

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
    itemStore.addTenderItem(newItem);

    resetToInitValues();
  };

  const handleCancel = () => {
    itemStore.toggleEditMode();
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

    itemStore.overwriteItem(itemStore.toEdit, newItem);
    handleCancel();
  };

  return (
    <div className={classes.container}>
      <section className={classes.header}>
        <label>Pre Bid Verification</label>
        <label>Post Bid Verification</label>
      </section>
      <div className={classes.itemForm}>
        <section className={classes.leftSection}>
          <div className={classes.labelInputGroup}>
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
          </div>
          <div className={classes.labelInputGroup}>
            <label>Quantity</label>
            <input
              value={quantity !== 0 ? quantity : ""}
              type="number"
              onChange={(event) => setQuantity(event.target.valueAsNumber)}
              min={0}
            />
          </div>
          <div className={classes.labelInputGroup}>
            <label>CPU Qty</label>
            <input
              id="cpuNumber"
              value={cpuQuantity !== 0 ? cpuQuantity : ""}
              type="number"
              onChange={(event) => setCpuQuantity(event.target.valueAsNumber)}
              min={0}
            />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Initial Benchmark</label>
            <input type="text" />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Architecture</label>
            <input
              name="architecture"
              value={architecture}
              type="text"
              onChange={(event) => setArchitecture(event.target.value)}
            />
          </div>
          <div className={classes.labelInputGroup}>
            <label>OS</label>
            <input
              name="os"
              value={os}
              type="text"
              onChange={(event) => setOs(event.target.value)}
            />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Office</label>
            <input
              name="office"
              value={office}
              type="text"
              onChange={(event) => setOffice(event.target.value)}
            />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Remarks</label>
            <input
              name="remarks"
              value={remarks}
              type="text"
              onChange={(event) => setRemarks(event.target.value)}
            />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Task Nr</label>
            <input
              name="taskNr"
              value={taskNumber !== 0 ? taskNumber : ""}
              type="number"
              onChange={(event) => setTaskNumber(event.target.valueAsNumber)}
              min={0}
            />
          </div>
          <div className={classes.labelInputGroup}>
            <label>ISO 50001</label>
            <select>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <div className={classes.labelInputGroup}>
            <label>TCO</label>
            <select>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <div className={classes.labelInputGroup}>
            <label>Purchase Form</label>
            <input
              name="purchaseForm"
              value={purchaseForm}
              type="text"
              onChange={(event) => setPurchaseForm(event.target.value)}
            />
          </div>
        </section>
        <section className={classes.rightSection}>
          <div className={classes.labelInputGroup}>
            <label>Winner</label>
            <input type="text" />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Vendor</label>
            <input type="text" />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Status</label>
            <select>
              <option>Pending</option>
              <option>placeholder</option>
              <option>placeholder</option>
              <option>placeholder</option>
            </select>
          </div>
          <div className={classes.labelInputGroup}>
            <label>Award Letter Date</label>
            <input type="date" />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Comments Sales Team</label>
            <input type="text" />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Final OS</label>
            <input type="text" />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Final Office</label>
            <input type="text" />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Delivery term</label>
            <input type="text" />
          </div>
          <div className={classes.labelInputGroup}>
            <label>Benchmark Bid</label>
            <input type="text" />
          </div>
        </section>
      </div>
      {itemStore.editMode ? (
        <section className={classes.buttonSection}>
          <button onClick={handleItemOverwrite}><Save/> Save</button>
          <button onClick={handleCancel}><Clear/>Cancel</button>
        </section>
      ) : (
        <section className={classes.buttonSection}>
          <button onClick={handleSubmit}><Add/> Add Item</button>
        </section>
      )}
    </div>
  );
};

export default observer(NewTenderItemForm);
