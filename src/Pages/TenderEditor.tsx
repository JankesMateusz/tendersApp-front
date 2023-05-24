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

const TenderEditor: React.FC = () => {
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

  return (
    <div className={classes.container}>
      <section className={classes.leftSection}>
        <label>Tender Information</label>
        <div className={classes.tenderInfo}>
          <TenderInfo tender={tender} />
        </div>
        <div className={classes.purchaserInfo}>
          <div className={classes.purchaser}>
            <label>Puchaser Information</label>
            <Purchaser purchaser={purchaser} />
          </div>
          <div className={classes.person}>
            <label>Person In Contact Information</label>
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
