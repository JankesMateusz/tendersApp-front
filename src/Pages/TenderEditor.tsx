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
import { observer } from "mobx-react";
import purchaserInfoStore from "../store/PurchaserInfoStore";
import tenderInfoStore from "../store/TenderInfoStore";
import Menu from "../Components/Menu";
import axios from "axios";

const TenderEditor: React.FC = () => {
  const url = "http://localhost:8080/tenders";
  const mdpId = useParams().mdpId;
  const { data } = useFetch(`${url}/${mdpId}`);
  const navigate = useNavigate();

  if (data && mdpId !== "newTender") {
    tenderInfoStore.setTender(data.tenderDto);
    itemStore.setItems(data.tenderItemsDto);
    purchaserInfoStore.setPurchaser(data.purchaserDto);
  }

  const handleClickLeft = () => {
    const result = (parseInt(mdpId ? mdpId : "", 10) - 1).toString();
    navigate(`/tenders/${result}`);
  };

  const handleClickRight = () => {
    const result = (parseInt(mdpId ? mdpId : "", 10) + 1).toString();
    navigate(`/tenders/${result}`);
  };

  const handleNewTender = () => {
    navigate(`/tenders/newTender`);
    itemStore.items.splice(0);
    tenderInfoStore.resetToInit();
    purchaserInfoStore.resetToInit();
  };

  const handleSaveTender = async () => {
    let responseData: TenderM = {
      id: 0,
      mdpId: "",
      title: "",
      publicationDate: "",
      bidDate: "",
      siwzLink: "",
      bidNumber: "",
      status: "",
      budget: "",
      comments: "",
    };

    try {
      itemStore.setToSend();
      const response = await axios.post(url, {
        tenderDto: {
          title: tenderInfoStore.getTender.title,
          mdpId: tenderInfoStore.getTender.mdpId,
          publicationDate: tenderInfoStore.getTender.publicationDate,
          bidDate: tenderInfoStore.getTender.bidDate,
          siwzLink: tenderInfoStore.getTender.siwzLink,
          bidNumber: tenderInfoStore.getTender.bidNumber,
          status: tenderInfoStore.getTender.status,
          reportDate: tenderInfoStore.getTender.publicationDate,
          budget: tenderInfoStore.getTender.budget,
          comments: tenderInfoStore.getTender.comments,
        },
        tenderItems: itemStore.toSend,
        purchaserId: purchaserInfoStore.getPurchaser.id,
      });
      responseData = response.data;
    } catch (error) {
      console.log(error);
    }
    itemStore.items.splice(0);
    itemStore.toSend.splice(0);
    tenderInfoStore.resetToInit();
    purchaserInfoStore.resetToInit();
    
    navigate(`/tenders/${responseData.mdpId}`);
  };

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
