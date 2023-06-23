import { NavLink } from "react-router-dom";
import TenderPageOptions from "../Components/TenderPageOptions";
import Tenders from "../Components/Tenders";
import TenderM from "../Models/TenderModel";
import classes from "../style/TendersPage.module.css";
import useFetch from "../util/useFetch";

const TendersPage = () => {
  const url = "http://localhost:8080/tenders/all";
  const { data, loading, error } = useFetch(url);

  let tenders: TenderM[] = [];

  if (data) {
    tenders = data;
  }

  return (
    <div className={classes.container}>
      <section className={classes.header}>
        <section className={classes.options}>
          <TenderPageOptions />
        </section>
      </section>
      {loading ? "loading..." : <Tenders tenderList={tenders} />}
    </div>
  );
};

export default TendersPage;
