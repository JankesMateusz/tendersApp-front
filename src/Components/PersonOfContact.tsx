import React from "react";
import PersonOfContactM from "../Models/PersonOfContactModel";

const PersonOfContact: React.FC<{contact: PersonOfContactM}> = (props) => {
    return (
        <div>
            <p>{props.contact.firstName}</p>
            <p>{props.contact.lastName}</p>
            <p>{props.contact.email}</p>
            <p>{props.contact.email2}</p>
            <p>{props.contact.phoneNumber}</p>
            <p>{props.contact.fax}</p>
        </div>
    )
}

export default PersonOfContact;