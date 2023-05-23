import React from 'react';
import TenderM from '../Models/TenderModel';

const TenderInfo: React.FC<{ tender: TenderM }> = (props) => {

    return (
        <div>
            <p>{props.tender.title}</p>
        </div>
    )
}

export default TenderInfo;