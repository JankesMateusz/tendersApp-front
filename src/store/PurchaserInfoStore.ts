import { action, makeAutoObservable, observable } from "mobx";
import PurchaserM from "../Models/PurchaserModel";

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

  modalToggled: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      purchaser: observable,
      modalToggled: observable,
      modalToggle: action,
      resetToInit: action,
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
  }

  get getPurchaser(){
    return this.purchaser;
  }
}

const purchaserInfoStore = new PurchaserInfoStore();

export default purchaserInfoStore;
