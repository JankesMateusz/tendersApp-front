import { makeObservable, observable, action } from "mobx";
import TenderItemM from "../Models/TenderItemModel";

class TenderItemStore {
  //handles adding new item form and items list

  items: TenderItemM[];
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

  constructor(initItems: TenderItemM[]) {
    this.items = initItems;
    makeObservable(this, {
      items: observable,
      toEdit: observable,
      editMode: observable,
      addTenderItem: action,
      setItemToEdit: action,
      deleteTenderItem: action,
      toggleEditMode: action,
      overwriteItem: action
    });
  }

  addTenderItem(item: TenderItemM) {
    this.items.push(item);
  }

  overwriteItem(item: TenderItemM, newItem: TenderItemM){
    const index = this.items.indexOf(item);
    if(index !== -1){
      this.items[index] = newItem;
    }
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
    return
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

export default TenderItemStore;
