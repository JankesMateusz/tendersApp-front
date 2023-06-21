import { observable, action, makeAutoObservable } from "mobx";
import TenderItemM from "../Models/TenderItemModel";
import TenderItemRequest from "../Models/TenderItemRequest";

class TenderItemStore {
  //handles adding new item form and items list

  items: TenderItemM[] = [];

  toEdit: TenderItemM = {
    id: "",
    category: "",
    quantity: 0,
    cpuQuantity: 0,
    architecture: "",
    os: "",
    office: "",
    remarks: "",
    taskNumber: 0,
    purchaseForm: "",
  };

  toSend: TenderItemRequest[] = [];

  editMode: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      items: observable,
      toEdit: observable,
      editMode: observable,
      toSend: observable,
      addTenderItem: action,
      setItemToEdit: action,
      deleteTenderItem: action,
      toggleEditMode: action,
      overwriteItem: action,
      setToSend: action,
    });
  }

  addTenderItem(item: TenderItemM) {
    this.items.push(item);
  }

  overwriteItem(item: TenderItemM, newItem: TenderItemM) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items[index] = newItem;
    }
  }

  duplicateTenderItem(item: TenderItemM) {
    let newItem = new TenderItemM(
      item.category,
      item.quantity,
      item.cpuQuantity,
      item.architecture,
      item.os,
      item.office,
      item.remarks,
      item.taskNumber,
      item.purchaseForm
    );
    this.addTenderItem(newItem);
  }

  deleteTenderItem(id: string) {
    const updatedItems = this.items.filter((item) => item.id !== id);
    this.items = updatedItems;
  }

  setItemToEdit(item: TenderItemM) {
    if (!this.getEditMode) {
      this.toggleEditMode();
      this.toEdit = item;
    }
    return;
  }

  setToSend() {
    this.items.map((item) => {
      this.toSend.push(
        new TenderItemRequest(
          item.category,
          item.quantity,
          item.cpuQuantity,
          item.architecture,
          item.os,
          item.office,
          item.remarks,
          item.taskNumber,
          item.purchaseForm
        )
      );
    });
  }

  get getItemToEdit() {
    return this.toEdit;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  get getEditMode() {
    return this.editMode;
  }

  setItems(items: TenderItemM[]) {
    this.items = items;
    console.log(items);
  }
}

const itemStore = new TenderItemStore();

export default itemStore;
