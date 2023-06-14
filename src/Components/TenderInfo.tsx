import React from "react";
import tenderInfoStore from "../store/TenderInfoStore";
import classes from "../style/TenderInfo.module.css";

const TenderInfo: React.FC = () => {

  return (
    <div className={classes.container}>
      <textarea placeholder="Title..." value={tenderInfoStore.tender.title}  className={classes.title}/>
      <label>Publication Date</label>
      <div className={classes.datePicker}>
        <label>{tenderInfoStore.tender.publicationDate.toLocaleString()}</label>
        <input type="date" />
      </div>
      <label>Bid Date</label>
      <div className={classes.datePicker}>
        <label>{tenderInfoStore.tender.bidDate.toLocaleString()}</label>
        <input type="date" />
      </div>
      <input type="text" value={tenderInfoStore.tender.bidNumber} className={classes.input}/>
      <input type="text" value={tenderInfoStore.tender.link} className={classes.input}/>
      <input type="text" value={tenderInfoStore.tender.status} className={classes.input}/>
      <select value={tenderInfoStore.tender.budget} className={classes.budget}>
        <option>LESS_THAN_130000_PLN</option>
        <option>LESS_THAN_623504_PLN</option>
        <option>MORE_THAN_623504_PLN</option>
        <option>LESS_THAN_957524_PLN</option>
        <option>MORE_THAN_957524_PLN</option>
        <option>NO_DATA</option>
      </select>
      <input type="text" value={tenderInfoStore.tender.comments} className={classes.input}/>
    </div>
  );
};

export default TenderInfo;
