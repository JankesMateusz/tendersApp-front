import React from "react";
import PurchaserM from "../Models/PurchaserModel";

const Purchaser: React.FC<{purchaser: PurchaserM}> = (props) => {
    return (
        <div>
            <h4>{props.purchaser.officialName}</h4>
            <h4>{props.purchaser.city}</h4>
            <h4>{props.purchaser.address}</h4>
            <h4>{props.purchaser.province}</h4>
            <h4>{props.purchaser.zipCode}</h4>
        </div>
    )
}

export default Purchaser;