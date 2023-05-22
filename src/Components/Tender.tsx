import React from "react";
import TenderM from "../Models/TenderModel";
import classes from "./Tender.module.css";

const Tender: React.FC<{ tender: TenderM }> = (props) => {
  return (
    <tr>
      <td>{props.tender.title}</td>
      <td>{props.tender.publicationDate.toLocaleDateString()}</td>
      <td>{props.tender.bidDate.toLocaleDateString()}</td>
      <td>{props.tender.bidNumber}</td>
      <td>
        <a href={props.tender.link} target="_blank" rel="noopener noreferrer">{props.tender.link}</a>
      </td>
      <td>{props.tender.status}</td>
      <td>{props.tender.budget}</td>
      <td>{props.tender.comments}</td>
    </tr>
  );
};

export default Tender;
