class TenderItemM {
  id: number;
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
    id: number,
    category: string,
    quantity: number,
    cpuQuantity: number,
    architecture: string,
    os: string,
    office: string,
    remarks: string,
    taskNumber: number,
    purchaseForm: string
  ) {
    this.id = id;
    this.category = category;
    (this.quantity = quantity),
      (this.cpuQuantity = cpuQuantity),
      (this.architecture = architecture),
      (this.os = os),
      (this.office = office),
      (this.remarks = remarks),
      (this.taskNumber = taskNumber),
      (this.purchaseForm = purchaseForm);
  }
}

export default TenderItemM;
