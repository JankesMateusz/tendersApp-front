import TenderM from "../Models/TenderModel";
import { action, makeAutoObservable, observable } from "mobx";
import moment from "moment";

class TenderInfoStore {
  tender: TenderM = {
    id: 0,
    mdpId: "",
    title: "",
    publicationDate: moment(new Date()).format("YYYY-MM-DD"),
    bidDate: moment(new Date()).format("YYYY-MM-DD"),
    siwzLink: "",
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
    this.tender.publicationDate = moment(new Date()).format("YYYY-MM-DD");
    this.tender.bidDate = moment(new Date()).format("YYYY-MM-DD");
    this.tender.siwzLink = "";
    this.tender.bidNumber = "";
    this.tender.status = "";
    this.tender.budget = "";
    this.tender.comments = "";
  }
}

const tenderInfoStore = new TenderInfoStore();

export default tenderInfoStore;
