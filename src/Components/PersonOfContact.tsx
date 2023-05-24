import React from "react";
import PersonOfContactM from "../Models/PersonOfContactModel";
import classes from "../style/PersonOfContact.module.css";

const PersonOfContact: React.FC<{ contact: PersonOfContactM }> = (props) => {
  return (
    <div className={classes.container}>
      <label>{props.contact.firstName}</label>
      <label>{props.contact.lastName}</label>
      <label>{props.contact.email}</label>
      <label>{props.contact.email2}</label>
      <label>{props.contact.phoneNumber}</label>
      <label>{props.contact.fax}</label>
    </div>
  );
};

export default PersonOfContact;
