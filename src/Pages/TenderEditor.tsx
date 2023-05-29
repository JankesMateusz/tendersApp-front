import React from "react";

import TenderItems from "../Components/TenderItems";
import TenderM from "../Models/TenderModel";
import PurchaserM from "../Models/PurchaserModel";
import Purchaser from "../Components/Purchaser";
import PersonOfContactM from "../Models/PersonOfContactModel";
import PersonOfContact from "../Components/PersonOfContact";
import NewTenderItemForm from "../Components/NewTenderItemForm";
import classes from "../style/TenderEditor.module.css";
import TenderInfo from "../Components/TenderInfo";
import { useParams } from "react-router-dom";
import useFetch from "../util/useFetch";
import itemStore from "../store/TenderItemStore";

const TenderEditor: React.FC = () => {
  const url = "http://localhost:8080/tenders/";
  const mdpId = useParams().id;

  const {data, loading, error} = useFetch(`${url}${mdpId}`);

  if(data !== null){
    itemStore.setItems(data.tenderItemsDto);
    console.log(data.purchaserDto)
  }

  let poc: PersonOfContactM = {
    id: 1,
    firstName: "Zenon",
    lastName: "Martyniuk",
    email: "zenon@martyniuk.pl",
    email2: null,
    phoneNumber: "123-123-123",
    fax: null,
  };

  let purchaser: PurchaserM = {
    id: 1,
    officialName:
      "Główny Inspektorat Jakości Handlowej Artykułów Rolno-Spożywczych",
    city: "Warszawa",
    address: "Jakaś ulica 1",
    province: "mazowieckie",
    zipCode: "01-100",
  };

  let tender: TenderM = {
    id: 1,
    mdpId: "2023001",
    title:
      "Dostawa sprzętu teleinformatycznego do Głównego Inspektoratu Jakości Handlowej Artykułów Rolno-Spożywczych",
    publicationDate: new Date(2023, 1, 10),
    bidDate: new Date(2023, 1, 28),
    link: "https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/08db45b2-aba3-f40c-1610-8b0011950a48",
    bidNumber: "2023/BZP 00192198/01",
    status: "pending",
    budget: "powyżej 623504 PLN",
    comments: "",
  };

  if(data !== null){
    poc = data.purchaserDto;
  }
  if(data !== null){
    purchaser = data.purchaserDto;
  }
  if(data !== null){
    tender = data.tenderDto;
  }

  return (
    <div className={classes.container}>
      <section className={classes.leftSection}>
        <div className={classes.menu}>
          <button>L</button>
          <button>Save</button>
          <label>MDP ID HERE?</label>
          <button>New Tender</button>
          <button>R</button>
        </div>
        <label className={classes.label}>Tender Information</label>
        <div className={classes.tenderInfo}>
          <TenderInfo tender={tender} />
        </div>
        <label className={classes.label}>Puchaser Information</label>
        <div className={classes.purchaserInfo}>
          <div className={classes.purchaser}>
            <Purchaser purchaser={purchaser} />
          </div>
          <label className={classes.label}>Person In Contact Information</label>
          <div className={classes.person}>
            <PersonOfContact contact={poc} />
          </div>
        </div>
      </section>
      <section className={classes.rightSection}>
        <label>Tender Items</label>
        <NewTenderItemForm />
        <TenderItems />
      </section>
    </div>
  );
};

export default TenderEditor;
