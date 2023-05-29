import React from "react";
import TenderM from "../Models/TenderModel";
import { useNavigate } from "react-router-dom";

const Tender: React.FC<{ tender: TenderM }> = (props) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/tender/${props.tender.mdpId}`)
  }

  return (
      <tr onClick={handleNavigate}>
        <td>{props.tender.mdpId}</td>
        <td>{props.tender.title}</td>
        <td>{props.tender.publicationDate.toLocaleString()}</td>
        <td>{props.tender.bidDate.toLocaleString()}</td>
        <td>{props.tender.bidNumber}</td>
        <td>
          <a href={props.tender.link} target="_blank" rel="noopener noreferrer">
            {props.tender.link}
          </a>
        </td>
        <td>{props.tender.status}</td>
        <td>{props.tender.budget}</td>
        <td>{props.tender.comments}</td>
      </tr>
  );
};

export default Tender;
