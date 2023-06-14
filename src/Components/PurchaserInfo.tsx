import React from "react";
import classes from "../style/PurchaserInfo.module.css";
import PurchaserEditModal from "./PurchaserEditModal";
import { CreateOutlined } from "@material-ui/icons";
import { observer } from "mobx-react";
import purchaserInfoStore from "../store/PurchaserInfoStore";

const PurchaserInfo: React.FC = () => {

  const handleClicked = () => {
    purchaserInfoStore.modalToggle(true);
  };

  return (
    <div className={classes.container}>
      <section className={classes.infoSection}>
        <label>{purchaserInfoStore.purchaser.officialName}</label>
        <label>{purchaserInfoStore.purchaser.city}</label>
        <label>{purchaserInfoStore.purchaser.address}</label>
        <label>{purchaserInfoStore.purchaser.province}</label>
        <label>{purchaserInfoStore.purchaser.zipCode}</label>
        <label>{purchaserInfoStore.purchaser.typeOfAccount}</label>
      </section>
      <section className={classes.edit}>
        <div onClick={handleClicked} className={classes.editButton}>
          <CreateOutlined />
        </div>
        {purchaserInfoStore.getModalToggled && <PurchaserEditModal />}
      </section>
    </div>
  );
};

export default observer(PurchaserInfo);
