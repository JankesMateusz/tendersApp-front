import TenderPageOptions from "../Components/TenderPageOptions";
import Tenders from "../Components/Tenders";
import TenderM from "../Models/TenderModel";
import classes from "../style/TendersPage.module.css";

const TendersPage = () => {
  let tenders: TenderM[] = [
    {
      id: 1,
      mdpId: "2023001",
      title:
        "Dostawa sprzętu teleinformatycznego do Głównego Inspektoratu Jakości Handlowej Artykułów Rolno-Spożywczych",
      publicationDate: new Date(2023, 1, 10),
      bidDate: new Date(2023, 1, 28),
      link: "https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/08db45b2-aba3-f40c-1610-8b0011950a48",
      bidNumber: "2023/BZP 00192198/01",
      status: "pending",
      budget: "powyżej 623504 PLN",
      comments: "",
    },
    {
      id: 2,
      mdpId: "2023002",
      title:
        "Dostawa sprzętu teleinformatycznego do Głównego Inspektoratu Jakości Handlowej Artykułów Rolno-Spożywczych",
      publicationDate: new Date(2023, 1, 10),
      bidDate: new Date(2023, 1, 28),
      link: "https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/08db45b2-aba3-f40c-1610-8b0011950a48",
      bidNumber: "2023/BZP 00192198/01",
      status: "pending",
      budget: "powyżej 623504 PLN",
      comments: "dupa",
    },
    {
      id: 3,
      mdpId: "2023003",
      title:
        "Dostawa sprzętu teleinformatycznego do Głównego Inspektoratu Jakości Handlowej Artykułów Rolno-Spożywczych Dostawa sprzętu teleinformatycznego do Głównego Inspektoratu Jakości Handlowej Artykułów Rolno-SpożywczychDostawa sprzętu teleinformatycznego do Głównego Inspektoratu Jakości Handlowej Artykułów Rolno-Spożywczych",
      publicationDate: new Date(2023, 1, 10),
      bidDate: new Date(2023, 1, 28),
      link: "https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/08db45b2-aba3-f40c-1610-8b0011950a48",
      bidNumber: "2023/BZP 00192198/01",
      status: "pending",
      budget: "powyżej 623504 PLN",
      comments: "dupa2",
    },
  ];
  return (
    <div className={classes.container}>
      <section className={classes.options}>
        <TenderPageOptions />
      </section>
        <Tenders tenderList={tenders} />
    </div>
  );
};

export default TendersPage;
