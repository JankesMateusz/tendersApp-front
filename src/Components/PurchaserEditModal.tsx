import { CloseOutlined } from "@material-ui/icons";
import classes from "../style/PurchaserEditModal.module.css";
import { observer } from "mobx-react";
import purchaserInfoStore from "../store/PurchaserInfoStore";
import { useState } from "react";
import LiveSearch from "./LiveSearch";

const PurchaserEditModal = () => {
  const url = "http://localhost:8080/purchasers";
  const search = "/search?name="
  const fromStore = purchaserInfoStore.purchaser;

  const [name, setName] = useState(fromStore.officialName);
  const [city, setCity] = useState(fromStore.city);
  const [address, setAddress] = useState(fromStore.address);
  const [province, setProvince] = useState(fromStore.province);
  const [zipCode, setZipCode] = useState(fromStore.zipCode);
  const [typeOfAccount, setTypeOfAccount] = useState(fromStore.typeOfAccount);

  const handleExit = () => {
    purchaserInfoStore.modalToggle(false);
  };

  const handleAssign = () => {
    purchaserInfoStore.purchaser.officialName = name;
    purchaserInfoStore.purchaser.city = city;
    purchaserInfoStore.purchaser.address = address;
    purchaserInfoStore.purchaser.province = province;
    purchaserInfoStore.purchaser.zipCode = zipCode;
    purchaserInfoStore.purchaser.typeOfAccount = typeOfAccount;
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
        <LiveSearch url={url+search}/>
        <div className={classes.content}>
          <div className={classes.purchaser}>
            <input
              type="text"
              value={name}
              placeholder="official name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={city}
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              value={address}
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <select onChange={(e) => setProvince(e.target.value)}>
              <option disabled selected>
                province
              </option>
              <option>dolnośląskie</option>
              <option>kujawsko-pomorskie</option>
              <option>lubelskie</option>
              <option>lubuskie</option>
              <option>łódzkie</option>
              <option>małopolskie</option>
              <option>mazowieckie</option>
              <option>opolskie</option>
              <option>podkarpackie</option>
              <option>podlaskie</option>
              <option>pomorskie</option>
              <option>śląskie</option>
              <option>świętokrzyskie</option>
              <option>warmińsko-mazurskie</option>
              <option>wielkopolskie</option>
              <option>zachodniopomorskie</option>
            </select>
            <input
              type="text"
              value={zipCode}
              placeholder="zip code"
              onChange={(e) => setZipCode(e.target.value)}
            />
            <input
              type="text"
              value={typeOfAccount}
              placeholder="Type Of Account"
              onChange={(e) => setTypeOfAccount(e.target.value)}
            />
            <button onClick={handleAssign}>A</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(PurchaserEditModal);
