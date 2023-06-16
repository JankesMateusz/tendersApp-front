import React, { useState } from "react";
import purchaserInfoStore from "../store/PurchaserInfoStore";
import classes from "../style/PurchaserForm.module.css";
import { Add } from "@material-ui/icons";
import axios from "axios";
import PurchaserM from "../Models/PurchaserModel";
import { observer } from "mobx-react";

interface FormProps {
  url: string;
}

const PurchaserForm: React.FC<FormProps> = ({ url }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [typeOfAccount, setTypeOfAccount] = useState("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  const handlePost = async () => {
    let toAssign: PurchaserM = {
      id: 0,
      officialName: "",
      address: "",
      city: "",
      province: "",
      zipCode: "",
      typeOfAccount: ""
    };
    try {
      const response = await axios.post(url, {
        officialName: name,
        city: city,
        province: province,
        address: address,
        zipCode: zipCode,
        typeOfAccount: typeOfAccount,
      });
      setData(response.data);
      toAssign = response.data;
    } catch (error) {
      setError(true);
    }
    purchaserInfoStore.setPurchaserAssign(toAssign);
    
    resetValues();
  };

  const resetValues = () =>{
    setName("");
    setCity("");
    setAddress("");
    setProvince("");
    setZipCode("");
    setTypeOfAccount("");
  }

  return (
    <div className={classes.purchaser}>
      <div className={classes.form}>
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
      </div>
      <button onClick={handlePost}>
        <Add /> Add New
      </button>
    </div>
  );
};
export default observer(PurchaserForm);
