import "./App.css";
import Layout from "./Layout/Layout";
//import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import TenderEditor from "./Pages/TenderEditor";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/tenders" element={<TenderEditor />}/>
      </Routes>
    </Layout>
  );
}

export default App;
