import classes from "./NewTenderItem.module.css"

const NewTenderItem = () => {
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

  return (
    <form className={classes.itemForm}>
      <label>Category</label>
      <select name="category">
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
      <input type="number" />
      <label>CPU Qty</label>
      <input type="number" />
      <label>Architecture</label>
      <input type="text" />
      <label>OS</label>
      <input type="text" />
      <label>Office</label>
      <input type="text" />
      <label>Remarks</label>
      <input type="text" />
      <label>Task Nr</label>
      <input type="number" />
      <label>Purchase Form</label>
      <input type="text" />
    </form>
  );
};

export default NewTenderItem;
