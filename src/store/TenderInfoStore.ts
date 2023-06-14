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
      setToInit: action
    });
  }
  setTender(tender: TenderM) {
    this.tender = tender;
  }

  get getTender() {
    return this.tender;
  }

  setToInit() {
    this.tender = {
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
  }
}

const tenderInfoStore = new TenderInfoStore();

export default tenderInfoStore;
