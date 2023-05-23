import React from "react";
import TenderM from "../Models/TenderModel";
import Tender from "./Tender";
import classes from "../style/Tenders.module.css";

const Tenders: React.FC<{ tenderList: TenderM[] }> = (props) => {
  return (
    <div>
      <table className={classes.tab}>
        <thead>
          <tr>
            <th>MDP ID</th>
            <th>Title</th>
            <th>Publication Date</th>
            <th>Bid Name</th>
            <th>Bid Number</th>
            <th>Link</th>
            <th>Status</th>
            <th>Budget</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {props.tenderList.map((item) => {
            return <Tender tender={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tenders;
