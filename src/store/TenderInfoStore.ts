import TenderM from "../Models/TenderModel";
import { action, makeAutoObservable, observable } from "mobx";

class TenderInfoStore {
  tender: TenderM = {
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

  constructor() {
    makeAutoObservable(this, {
      tender: observable,
      setTender: action,
      resetToInit: action
    });
  }
  setTender(tender: TenderM) {
    this.tender = tender;
  }

  get getTender() {
    return this.tender;
  }

  resetToInit() {
    this.tender.id = 0;
    this.tender.mdpId = "";
    this.tender.title = "";
    this.tender.publicationDate = new Date();
    this.tender.bidDate = new Date();
    this.tender.link = "";
    this.tender.bidNumber = "";
    this.tender.status = "";
    this.tender.budget = "";
    this.tender.comments = "";
  }
}

const tenderInfoStore = new TenderInfoStore();

export default tenderInfoStore;
