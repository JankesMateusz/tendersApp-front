import React from "react";
import PurchaserM from "../Models/PurchaserModel";

const Purchaser: React.FC<{purchaser: PurchaserM}> = (props) => {
    return (
        <div>
            <p>{props.purchaser.officialName}</p>
            <p>{props.purchaser.city}</p>
            <p>{props.purchaser.address}</p>
            <p>{props.purchaser.province}</p>
            <p>{props.purchaser.zipCode}</p>
        </div>
    )
}

export default Purchaser;