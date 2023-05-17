import { makeObservable, observable } from "mobx";
import {v4} from "uuid";

class TenderItemM {
  id: string;
  category: string;
  quantity: number;
  cpuQuantity: number;
  architecture: string;
  os: string;
  office: string;
  remarks: string;
  taskNumber: number;
  purchaseForm: string;
  constructor(
    category: string,
    quantity: number,
    cpuQuantity: number,
    architecture: string,
    os: string,
    office: string,
    remarks: string,
    taskNumber: number,
    purchaseForm: string,
  ) {
    this.id = v4();
    this.category = category;
    this.quantity = quantity;
    this.cpuQuantity = cpuQuantity;
    this.architecture = architecture;
    this.os = os;
    this.office = office;
    this.remarks = remarks;
    this.taskNumber = taskNumber;
    this.purchaseForm = purchaseForm;

    makeObservable(this,
      {
        category: observable,
        quantity: observable,
        cpuQuantity: observable,
        architecture: observable,
        os: observable,
        office: observable,
        remarks: observable,
        taskNumber: observable,
        purchaseForm: observable
      })
  }
}

export default TenderItemM;
