import React from "react";
import classes from "../style/TenderPageOptions.module.css";
import { Search } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const TenderPageOptions = () => {
  
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <button onClick={()=>navigate("/tenders/newTender")}>New Tender</button>
      <div className={classes.searchSection}>
        <select>
          <option>Title</option>
          <option>Purchaser</option>
          <option>Tender ID</option>
        </select>
        <div className={classes.searchBar}>
          <input placeholder="search..." />
          <Search style={{backgroundColor: "white", color: "grey", fontSize: "16px"}}/>
        </div>
      </div>
      <div className={classes.dates}>
        <input type="date" />
        <input type="date" />
      </div>
      <select>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>
    </div>
  );
};

export default TenderPageOptions;
