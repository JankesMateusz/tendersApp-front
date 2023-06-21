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
import axios from "axios";

const TenderEditor: React.FC = () => {
  const url = "http://localhost:8080/tenders";
  const mdpId = useParams().mdpId;
  const { data } = useFetch(`${url}/${mdpId}`);
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

  const refreshPage = () => {
    window.location.reload();
  }

  const handleSaveTender = async () => {
    let responseData: TenderM = {
      id: 0,
      mdpId: "",
      title: "",
      publicationDate: "",
      bidDate: "",
      link: "",
      bidNumber: "",
      status: "",
      budget: "",
      comments: "",
    };

    try{
      itemStore.setToSend();
      const response = await axios.post(url,{
        tenderDto:{
          title: tenderInfoStore.getTender.title,
          mdpId: tenderInfoStore.getTender.mdpId,
          publicationDate: tenderInfoStore.getTender.publicationDate,
          bidDate: tenderInfoStore.getTender.bidDate,
          link: tenderInfoStore.getTender.link,
          bidNumber: tenderInfoStore.getTender.bidNumber,
          status: tenderInfoStore.getTender.status,
          reportDate: "2023-01-01",
          budget: tenderInfoStore.getTender.budget,
          comments: tenderInfoStore.getTender.comments,
        },
        tenderItems:itemStore.toSend,
        purchaserId:purchaserInfoStore.getPurchaser.id
      });
      responseData = response.data;
    }catch(error){
      console.log(error);
    }
    initialItems = initialItems.splice(0);
    tenderInfoStore.resetToInit();
    purchaserInfoStore.resetToInit();

    navigate(`/tender/${responseData.mdpId}`)
    refreshPage();
  }

  return (
    <div className={classes.container}>
      <section className={classes.leftSection}>
        <h5 className={classes.sectionName}>Tender Information</h5>
        <Menu
          handleClickLeft={handleClickLeft}
          handleClickRight={handleClickRight}
          handleNewTender={handleNewTender}
          handleSaveTender={handleSaveTender}
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
