import TenderM from "../Models/TenderModel";
import PurchaserModalTender from "./PurchaserModalTender";
import classes from "../style/PurchaserModalTenders.module.css"

const PurchaserModalTenders: React.FC<{tenderList: TenderM[]}> = (props) =>{
    return (
        <div className={classes.tableWrapper}>
            <h5>Tenders for Purchaser:</h5>
            <table className={classes.tab}>
                <thead>
                    <tr>
                        <th>MDP ID</th>
                        <th>Title</th>
                        <th>Bid Number</th>
                        <th>Status</th>
                        <th>Publication Date</th>
                        <th>Bid Date</th>
                        <th>Budget</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tenderList.map(tender => {
                        return <PurchaserModalTender key={tender.id} tender={tender}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PurchaserModalTenders;