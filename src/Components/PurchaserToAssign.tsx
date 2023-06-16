import { observer } from "mobx-react";
import purchaserInfoStore from "../store/PurchaserInfoStore";
import classes from "../style/PurchaserToAssign.module.css";

const PurchaserToAssign: React.FC = () => {

  const handleAssign = () => {
    purchaserInfoStore.setPurchaser(purchaserInfoStore.purchaserAssign);
  }

  return (
    <div className={classes.container}>
      <h5>Currently Assigned:</h5>
      <div className={classes.purchaserInfo}>
        <div className={classes.labelWrapper}>
          <label>Official Name:</label>
          <span>{purchaserInfoStore.purchaserAssign.officialName}</span>
        </div>
        <div className={classes.labelWrapper}>
          <label>City:</label>
          <span>{purchaserInfoStore.purchaserAssign.city}</span>
        </div>
        <div className={classes.labelWrapper}>
          <label>Address:</label>
          <span>{purchaserInfoStore.purchaserAssign.address}</span>
        </div>
        <div className={classes.labelWrapper}>
          <label>Province:</label>
          <span>{purchaserInfoStore.purchaserAssign.province}</span>
        </div>
        <div className={classes.labelWrapper}>
          <label>Zip Code:</label>
          <span>{purchaserInfoStore.purchaserAssign.zipCode}</span>
        </div>
        <div className={classes.labelWrapper}>
          <label>Type Of Account:</label>
          <span>{purchaserInfoStore.purchaserAssign.typeOfAccount}</span>
        </div>
      </div>
      <button onClick={handleAssign}>Assign</button>
    </div>
  );
};

export default observer(PurchaserToAssign);
