import React from "react";
import classes from "../style/TenderItemsPlaceholder.module.css";
import { Archive } from "@material-ui/icons";

const TenderItemsPlaceholder = () => {
  return (
    <div className={classes.container}>
      <div className={classes.message}>
        <Archive className={classes.icon} />
        <h1>Add Tender Items</h1>
      </div>
    </div>
  );
};

export default TenderItemsPlaceholder;
