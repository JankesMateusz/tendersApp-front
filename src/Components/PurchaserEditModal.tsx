import { CloseOutlined } from "@material-ui/icons";
import classes from "../style/PurchaserEditModal.module.css";
import { observer } from "mobx-react";
import purchaserInfoStore from "../store/PurchaserInfoStore";
import LiveSearch from "./LiveSearch";
import PurchaserForm from "./PurchaserForm";
import PurchaserModalTenders from "./PurchaserModalTenders";
import PurchaserInfo from "./PurchaserInfo";
import PurchaserToAssign from "./PurchaserToAssign";

const PurchaserEditModal: React.FC = () => {
  const url = "http://localhost:8080/purchasers";
  const searchName = "/searchName?name=";
  const searchCity = "/searchCity?city="

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
          <LiveSearch url={url + searchName} searchBy="name" />
          <LiveSearch url={url + searchCity} searchBy="city" />
        </div>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <PurchaserForm url={url} />
            <PurchaserToAssign/>
          </div>
          {purchaserInfoStore.getPurchaser.id !== 0 && purchaserInfoStore.tenders.length !== 0 && (
            <PurchaserModalTenders tenderList={purchaserInfoStore.tenders} />
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(PurchaserEditModal);
