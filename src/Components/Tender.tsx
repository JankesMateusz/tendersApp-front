import React from "react";
import TenderM from "../Models/TenderModel";

const Tender: React.FC<{ tender: TenderM }> = (props) => {
  return (
    <div>
      <p>{props.tender.title}</p>
      <p>{props.tender.publicationDate.toLocaleDateString()}</p>
      <p>{props.tender.bidDate.toLocaleDateString()}</p>
      <p>{props.tender.bidNumber}</p>
      <p>{props.tender.link}</p>
      <p>{props.tender.status}</p>
      <p>{props.tender.budget}</p>
      <p>{props.tender.comments}</p>
    </div>
  );
};

export default Tender;
