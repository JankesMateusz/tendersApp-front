import React from "react";
import TenderM from "../Models/TenderModel";

const Tender: React.FC<{ tender: TenderM }> = (props) => {
  return (
    <div>
      <h3>{props.tender.title}</h3>
      <h3>{props.tender.publicationDate.toLocaleDateString()}</h3>
      <h3>{props.tender.bidDate.toLocaleDateString()}</h3>
      <h3>{props.tender.bidNumber}</h3>
      <h3>{props.tender.link}</h3>
      <h3>{props.tender.status}</h3>
      <h3>{props.tender.budget}</h3>
      <h3>{props.tender.comments}</h3>
    </div>
  );
};

export default Tender;
