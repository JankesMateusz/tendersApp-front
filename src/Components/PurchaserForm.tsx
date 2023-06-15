import React, { useState } from "react";
import purchaserInfoStore from "../store/PurchaserInfoStore";
import classes from "../style/PurchaserForm.module.css";
import { Add } from "@material-ui/icons";
import axios from "axios";

interface FormProps {
    url: string
}

const PurchaserForm: React.FC<FormProps> = ({url}) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [typeOfAccount, setTypeOfAccount] = useState("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  const handlePost = async () => {
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
      console.log(response);
    } catch (error) {
      setError(true);
    }

    // purchaserInfoStore.purchaser.officialName = name;
    // purchaserInfoStore.purchaser.city = city;
    // purchaserInfoStore.purchaser.address = address;
    // purchaserInfoStore.purchaser.province = province;
    // purchaserInfoStore.purchaser.zipCode = zipCode;
    // purchaserInfoStore.purchaser.typeOfAccount = typeOfAccount;
  };

  return (
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
      <button onClick={handlePost}>
        <Add /> Add New
      </button>
    </div>
  );
};
export default PurchaserForm;
