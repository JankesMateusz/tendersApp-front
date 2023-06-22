import React from "react";
import classes from "../style/Menu.module.css";
import { ArrowBack, ArrowForward, SaveOutlined } from "@material-ui/icons";
import tenderInfoStore from "../store/TenderInfoStore";
import { observer } from "mobx-react";

interface MenuProps {
  handleClickLeft: () => void;
  handleClickRight: () => void;
  handleNewTender: () => void;
  handleSaveTender: () => void;
}

const Menu: React.FC<MenuProps> = ({handleClickLeft, handleClickRight, handleNewTender, handleSaveTender}) => {

  return (
    <div className={classes.menu}>
      <div className={classes.arrowArea} onClick={handleClickLeft}>
        <ArrowBack className={classes.arrow} />
      </div>
      <button onClick={handleSaveTender}><SaveOutlined/> Save</button>
      <label className={classes.mdpIdLabel}>{tenderInfoStore.getTender.mdpId? tenderInfoStore.getTender.mdpId : "New Tender"}</label>
      <button onClick={handleNewTender}>New Tender</button>
      <div className={classes.arrowArea} onClick={handleClickRight}>
        <ArrowForward className={classes.arrow} />
      </div>
    </div>
  );
};

export default observer(Menu);