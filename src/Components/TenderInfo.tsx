import React from "react";
import tenderInfoStore from "../store/TenderInfoStore";
import classes from "../style/TenderInfo.module.css";
import { observer } from "mobx-react";
import moment from "moment";

const TenderInfo: React.FC = () => {
  type Dictionary<T> = {
    [key: string]: T;
  };

  const budgets: Dictionary<string> = {
    key1: "LESS_THAN_130000_PLN",
    key2: "LESS_THAN_623504_PLN",
    key3: "MORE_THAN_623504_PLN",
    key4: "LESS_THAN_957524_PLN",
    key5: "MORE_THAN_957524_PLN",
    key6: "NO_DATA",
  };
 
  const handleBudgetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    tenderInfoStore.tender.budget = event.target.value;
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Bid Number..."
        value={tenderInfoStore.getTender.bidNumber}
        className={classes.input}
        onChange={(e) => (tenderInfoStore.tender.bidNumber = e.target.value)}
      />
      <textarea
        placeholder="Title..."
        value={tenderInfoStore.getTender.title}
        className={classes.title}
        onChange={(e) => (tenderInfoStore.tender.title = e.target.value)}
      />
      <div className={classes.datePicker}>
        <p>Publication Date: </p>
        <span>
          {tenderInfoStore.getTender.publicationDate.toLocaleString()}
        </span>
        <input
          type="date"
          onChange={(e) => {
            tenderInfoStore.tender.publicationDate = e.target.value;
          }}
        />
      </div>
      <div className={classes.datePicker}>
        <p>Bid Date: </p>
        <span>{tenderInfoStore.tender.bidDate.toLocaleString()}</span>
        <input
          type="date"
          defaultValue={moment(
            tenderInfoStore.getTender.publicationDate
          ).format("YYYY-MM-DD")}
          onChange={(e) => (tenderInfoStore.tender.bidDate = e.target.value)}
        />
      </div>
      <div className={classes.datePicker}>
        <p>Report Date: </p>
        <span>{tenderInfoStore.tender.bidDate.toLocaleString()}</span>
        <input
          type="date"
          defaultValue={moment(
            tenderInfoStore.getTender.publicationDate
          ).format("YYYY-MM-DD")}
          onChange={(e) => (tenderInfoStore.tender.bidDate = e.target.value)}
        />
      </div>
      <select>
        <option>yes</option>
        <option>no</option>
      </select>
      <input
        type="text"
        placeholder=""
        value={tenderInfoStore.tender.siwzLink}
        className={classes.input}
        onChange={(e) => (tenderInfoStore.tender.siwzLink = e.target.value)}
      />
      <input
        type="text"
        value={tenderInfoStore.tender.status}
        className={classes.input}
        onChange={(e) => (tenderInfoStore.tender.status = e.target.value)}
      />
      <select
        value={tenderInfoStore.tender.budget}
        className={classes.budget}
        onChange={handleBudgetChange}
      >
        <option></option>
        <option value={budgets.key1}>poniżej 130000 pln</option>
        <option value={budgets.key2}>poniżej 623505 pln</option>
        <option value={budgets.key3}>powyżej 623505 pln</option>
        <option value={budgets.key4}>poniżej 957524 pln</option>
        <option value={budgets.key5}>powyżej 957524 pln</option>
        <option value={budgets.key6}>brak danych</option>
      </select>
      <input type="text" placeholder="Link 1..." />
      <input type="text" placeholder="Link 2..." />
      <input type="text" placeholder="Link 3..." />
      <input
        type="text"
        value={tenderInfoStore.tender.comments}
        className={classes.input}
        onChange={(e) => (tenderInfoStore.tender.comments = e.target.value)}
      />
      <select>
        <option>eduk12</option>
        <option>higher education</option>
        <option>defence</option>
        <option>local govt</option>
      </select>
    </div>
  );
};

export default observer(TenderInfo);
