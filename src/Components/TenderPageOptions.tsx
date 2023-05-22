import React from "react";
import classes from "./TenderPageOptions.module.css";

const TenderPageOptions = () => {
  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <select>
          <option>Title</option>
          <option>Purchaser</option>
          <option>Tender ID</option>
        </select>
        <input placeholder="search..." />
      </div>
      <div className={classes.datePicker}>
        <input type="date" />
        <input type="date" />
      </div>
      <select>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>
    </div>
  );
};

export default TenderPageOptions;
