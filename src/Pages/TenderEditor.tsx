import React from "react";

import TenderItems from "../Components/TenderItems";
import TenderM from "../Models/TenderModel";
import PurchaserInfo from "../Components/PurchaserInfo";
import PersonOfContact from "../Components/PersonOfContact";
import NewTenderItemForm from "../Components/NewTenderItemForm";
import classes from "../style/TenderEditor.module.css";
import TenderInfo from "../Components/TenderInfo";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../util/useFetch";
import itemStore from "../store/TenderItemStore";
import TenderItemM from "../Models/TenderItemModel";
import { observer } from "mobx-react";
import purchaserInfoStore from "../store/PurchaserInfoStore";
import tenderInfoStore from "../store/TenderInfoStore";
import PurchaserM from "../Models/PurchaserModel";
import Menu from "../Components/Menu";

const TenderEditor: React.FC = () => {
  const url = "http://localhost:8080/tenders/";
  const mdpId = useParams().mdpId;
  const { data } = useFetch(`${url}${mdpId}`);
  const navigate = useNavigate();

  let initialTender: TenderM = {
    id: 0,
    mdpId: "",
    title: "",
    publicationDate: new Date(),
    bidDate: new Date(),
    link: "",
    bidNumber: "",
    status: "",
    budget: "",
    comments: "",
  };

  let initialItems: TenderItemM[] = [];

  let initialPurchaser: PurchaserM = {
    id: 0,
    officialName: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    typeOfAccount: "",
  };

  if (data && mdpId !== 'newTender') {
    initialTender = data.tenderDto;
    initialPurchaser = data.purchaserDto;
    initialItems = data.tenderItemsDto;
  }
  tenderInfoStore.setTender(initialTender);
  itemStore.setItems(initialItems);
  purchaserInfoStore.setPurchaser(initialPurchaser);

  const handleClickLeft = () => {
    const result = (parseInt(mdpId ? mdpId : "", 10) - 1).toString();
    navigate(`/tender/${result}`);
  };

  const handleClickRight = () => {
    const result = (parseInt(mdpId ? mdpId : "", 10) + 1).toString();
    navigate(`/tender/${result}`);
  };

  const handleNewTender = () => {
    navigate(`/tender/newTender`);
    initialItems = initialItems.splice(0);
    tenderInfoStore.resetToInit();
    purchaserInfoStore.resetToInit();
  };

  return (
    <div className={classes.container}>
      <section className={classes.leftSection}>
        <h5 className={classes.sectionName}>Tender Information</h5>
        <Menu
          handleClickLeft={handleClickLeft}
          handleClickRight={handleClickRight}
          handleNewTender={handleNewTender}
        />
        <div className={classes.tenderInfo}>
          <TenderInfo />
        </div>
        <h5 className={classes.sectionName}>Purchaser Information</h5>
        <div className={classes.purchaserInfo}>
          <div className={classes.purchaser}>
            <PurchaserInfo />
          </div>
          <h5 className={classes.sectionName}>Person In Contact Information</h5>
          <div className={classes.person}>
            <PersonOfContact />
          </div>
        </div>
      </section>
      <section className={classes.rightSection}>
        <h5 className={classes.sectionName}>Tender Items</h5>
        <NewTenderItemForm />
        <TenderItems />
      </section>
    </div>
  );
};

export default observer(TenderEditor);
