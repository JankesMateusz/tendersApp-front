import React from "react";
import PersonOfContactM from "../Models/PersonOfContactModel";

const PersonOfContact: React.FC<{contact: PersonOfContactM}> = (props) => {
    return (
        <div>
            <h4>{props.contact.firstName}</h4>
            <h4>{props.contact.lastName}</h4>
            <h4>{props.contact.email}</h4>
            <h4>{props.contact.email2}</h4>
            <h4>{props.contact.phoneNumber}</h4>
            <h4>{props.contact.fax}</h4>
        </div>
    )
}

export default PersonOfContact;