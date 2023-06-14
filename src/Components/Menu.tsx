import React from "react";
import classes from "../style/Menu.module.css";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import tenderInfoStore from "../store/TenderInfoStore";

interface MenuProps {
  handleClickLeft: () => void;
  handleClickRight: () => void;
  handleNewTender: () => void;
}

const Menu: React.FC<MenuProps> = ({handleClickLeft, handleClickRight, handleNewTender}) => {
  return (
    <div className={classes.menu}>
      <div className={classes.arrowArea} onClick={handleClickLeft}>
        <ArrowBack className={classes.arrow} />
      </div>
      <button>Save</button>
      <label className={classes.mdpIdLabel}>{tenderInfoStore.getTender.mdpId}</label>
      <button onClick={handleNewTender}>New Tender</button>
      <div className={classes.arrowArea} onClick={handleClickRight}>
        <ArrowForward className={classes.arrow} />
      </div>
    </div>
  );
};

export default Menu;