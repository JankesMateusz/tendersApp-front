import React, { useEffect } from "react";
import classes from "../style/PurchaserInfo.module.css";
import PurchaserEditModal from "./PurchaserEditModal";
import { CreateOutlined } from "@material-ui/icons";
import { observer } from "mobx-react";
import purchaserInfoStore from "../store/PurchaserInfoStore";

const PurchaserInfo: React.FC = () => {

  const fromStore = purchaserInfoStore.purchaser;

  const handleClicked = () => {
    purchaserInfoStore.modalToggle(true);
  };

  return (
    <div className={classes.container}>
      <section className={classes.infoSection}>
        <p>{fromStore.officialName}</p>
        <p>{fromStore.city}</p>
        <p>{fromStore.address}</p>
        <p>{fromStore.province}</p>
        <p>{fromStore.zipCode}</p>
        <p>{fromStore.typeOfAccount}</p>
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
