import { CloseOutlined } from "@material-ui/icons";
import classes from "../style/PurchaserEditModal.module.css";
import { observer } from "mobx-react";
import purchaserInfoStore from "../store/PurchaserInfoStore";
import LiveSearch from "./LiveSearch";
import PurchaserForm from "./PurchaserForm";
import PurchaserModalTenders from "./PurchaserModalTenders";

const PurchaserEditModal = () => {
  const url = "http://localhost:8080/purchasers";
  const search = "/search?name=";

  const handleExit = () => {
    purchaserInfoStore.modalToggle(false);
  };

  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <div className={classes.header}>
          <h5>Purchaser Details</h5>
          <div className={classes.crossIconArea} onClick={handleExit}>
            <CloseOutlined className={classes.crossIcon} />
          </div>
        </div>
        <div className={classes.searchArea}>
          <LiveSearch url={url + search} searchBy="name" />
          <LiveSearch url={url + search} searchBy="city" />
        </div>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <PurchaserForm url={url} />
          </div>
          {purchaserInfoStore.getPurchaser.id !== 0 && (
            <PurchaserModalTenders tenderList={purchaserInfoStore.tenders} />
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(PurchaserEditModal);
