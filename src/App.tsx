import './App.css';

import Item from './Models/TenderItem';
import TenderItems from './Components/TenderItems';

function App() {

let items: Item[] = [
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
      purchaseForm: ""
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
      purchaseForm: ""
    }
  ] 

  return (
    <div>
      <TenderItems items={items}/>
    </div>
  );
}

export default App;
