import { makeObservable, observable, action } from "mobx";
import TenderItemM from "../Models/TenderItemModel";

class TenderItemStore {
  //handles adding new item form and items list

  items: TenderItemM[] = [
    {
      id: "asd123",
      category: "PC",
      quantity: 10,
      cpuQuantity: 10,
      architecture: "Intel Core i5",
      os: "Windows 10",
      office: "Office 2021",
      remarks: "dupa",
      taskNumber: 1,
      purchaseForm: "",
    },
    {
      id: "cxz123",
      category: "NTB",
      quantity: 100,
      cpuQuantity: 100,
      architecture: "Intel Core i7",
      os: "Windows 11",
      office: "Office 2021",
      remarks: "dupa2",
      taskNumber: 2,
      purchaseForm: "",
    },
  ];
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
  editMode: boolean = false;

  constructor() {
    makeObservable(this, {
      items: observable,
      toEdit: observable,
      editMode: observable,
      addTenderItem: action,
      setItemToEdit: action,
      deleteTenderItem: action,
      toggleEditMode: action,
      overwriteItem: action,
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

  get getItemToEdit() {
    return this.toEdit;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  get getEditMode() {
    return this.editMode;
  }
}

const itemStore = new TenderItemStore();

export default itemStore;
