
class TenderItemRequest {
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
    this.category = category;
    this.quantity = quantity;
    this.cpuQuantity = cpuQuantity;
    this.architecture = architecture;
    this.os = os;
    this.office = office;
    this.remarks = remarks;
    this.taskNumber = taskNumber;
    this.purchaseForm = purchaseForm;
  }
}

export default TenderItemRequest;
