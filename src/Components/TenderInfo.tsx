import React, { useState } from "react";
import TenderM from "../Models/TenderModel";
import classes from "../style/TenderInfo.module.css";

const TenderInfo: React.FC<{ tender: TenderM }> = (props) => {

  return (
    <div className={classes.container}>
      <label className={classes.label}>MDP ID: {props.tender.mdpId}</label>
      <textarea placeholder="Title..." value={props.tender.title}  className={classes.title}/>
      <label>Publication Date</label>
      <div className={classes.datePicker}>
        <label>{props.tender.publicationDate.toLocaleString()}</label>
        <input type="date" />
      </div>
      <label>Bid Date</label>
      <div className={classes.datePicker}>
        <label>{props.tender.bidDate.toLocaleString()}</label>
        <input type="date" />
      </div>
      <input type="text" value={props.tender.bidNumber} className={classes.input}/>
      <input type="text" value={props.tender.link} className={classes.input}/>
      <input type="text" value={props.tender.status} className={classes.input}/>
      <select value={props.tender.budget} className={classes.budget}>
        <option>LESS_THAN_130000_PLN</option>
        <option>LESS_THAN_623504_PLN</option>
        <option>MORE_THAN_623504_PLN</option>
        <option>LESS_THAN_957524_PLN</option>
        <option>MORE_THAN_957524_PLN</option>
        <option>NO_DATA</option>
      </select>
      <input type="text" value={props.tender.comments} className={classes.input}/>
    </div>
  );
};

export default TenderInfo;
