import TenderItemM from "../Models/TenderItemModel";
import TenderItems from "../Components/TenderItems";
import TenderM from "../Models/TenderModel";
import Tender from "../Components/Tender";
import PurchaserM from "../Models/PurchaserModel";
import Purchaser from "../Components/Purchaser";
import PersonOfContactM from "../Models/PersonOfContactModel";
import PersonOfContact from "../Components/PersonOfContact";

const TenderEditor = () => {
  let poc: PersonOfContactM = {
    id: 1,
    firstName: "Zenon",
    lastName: "Martyniuk",
    email: "zenon@martyniuk.pl",
    email2: null,
    phoneNumber: "123-123-123",
    fax: null
  }

  let purchaser: PurchaserM = {
    id: 1,
    officialName: "Główny Inspektorat Jakości Handlowej Artykułów Rolno-Spożywczych",
    city: "Warszawa",
    address: "Jakaś ulica 1",
    province: "mazowieckie",
    zipCode: "01-100"
  }

  let tender: TenderM = {
    id: 1,
    title:
      "Dostawa sprzętu teleinformatycznego do Głównego Inspektoratu Jakości Handlowej Artykułów Rolno-Spożywczych",
    publicationDate: new Date(2023, 1, 10),
    bidDate: new Date(2023, 1, 28),
    link: "https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/08db45b2-aba3-f40c-1610-8b0011950a48",
    bidNumber: "2023/BZP 00192198/01",
    status: "pending",
    budget: "powyżej 623504 PLN",
    comments: null,
  };

  let items: TenderItemM[] = [
    {
      id: 1,
      category: "PC",
      quantity: 10,
      cpuQuantity: 10,
      architecture: "Intel Core i5",
      os: "Windows 10",
      office: "Office 2021",
      remarks: "dupa",
      taskNumber: 1,
      purchaseForm: "",
    },
    {
      id: 2,
      category: "NTB",
      quantity: 100,
      cpuQuantity: 100,
      architecture: "Intel Core i7",
      os: "Windows 11",
      office: "Office 2021",
      remarks: "dupa2",
      taskNumber: 2,
      purchaseForm: "",
    },
  ];

  return (
    <div>
      <span>
        <Purchaser purchaser={purchaser}/>
      </span>
      <span>
        <PersonOfContact contact={poc}/>
      </span>
      <span>
        <Tender tender={tender} />
      </span>
      <span>
        <TenderItems items={items} />
      </span>
    </div>
  )
}

export default TenderEditor;