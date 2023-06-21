import { action, makeAutoObservable, observable } from "mobx";
import PurchaserM from "../Models/PurchaserModel";
import axios from "axios";
import TenderM from "../Models/TenderModel";

class PurchaserInfoStore {
  purchaser: PurchaserM = {
    id: 0,
    officialName: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    typeOfAccount: ""
  };

  purchaserAssign: PurchaserM = {
    id: 0,
    officialName: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    typeOfAccount: ""
  }

  modalToggled: boolean = false;
  tenders: TenderM[] = [];

  constructor() {
    makeAutoObservable(this, {
      purchaser: observable,
      purchaserAssign: observable,
      modalToggled: observable,
      modalToggle: action,
      resetToInit: action,
      fetchTenders: action
    });
  }

  modalToggle(value: boolean) {
    this.modalToggled = value;
  }

  get getModalToggled() {
    return this.modalToggled;
  }

  resetToInit(){
    this.purchaser.id = 0;
    this.purchaser.officialName = "";
    this.purchaser.city = "";
    this.purchaser.address = "";
    this.purchaser.province = "";
    this.purchaser.zipCode = "";
    this.purchaser.typeOfAccount = "";
  }

  setPurchaser(purchaser: PurchaserM){
    this.purchaser = purchaser;
    this.purchaserAssign = purchaser;
  }

  setPurchaserAssign(purchaser: PurchaserM){
    this.purchaserAssign = purchaser;
  }

  get getPurchaser(){
    return this.purchaser;
  }

  fetchTenders(){
    axios.get(`http://localhost:8080/tenders/forPurchaser/${this.purchaserAssign.id}`).then(response =>{
      this.tenders = response.data;
    }).catch(error => console.log(error));
  }
}

const purchaserInfoStore = new PurchaserInfoStore();

export default purchaserInfoStore;
