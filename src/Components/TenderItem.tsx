import React from "react";
import TenderItemM from "../Models/TenderItemModel";
import classes from "./TenderItems.module.css"

interface TenderItemProps {
  item: TenderItemM,
  lp: number,
  onDelete: (id: string) => void,
  onEdit: (item: TenderItemM) => void,
  isHovered: boolean
}

const TenderItem: React.FC<TenderItemProps> = ({
  item,
  lp,
  onDelete,
  onEdit,
  isHovered
}) => {
  return (
    <tr>
      <td>{lp}</td>
      <td>{item.category}</td>
      <td>{item.quantity}</td>
      <td>{item.cpuQuantity}</td>
      <td>{item.architecture}</td>
      <td>{item.os}</td>
      <td>{item.office}</td>
      <td>{item.remarks}</td>
      <td>{item.taskNumber}</td>
      <td>{item.purchaseForm}</td>
    </tr>
  );
};

export default TenderItem;
