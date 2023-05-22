import Layout from "./Layout/Layout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import TenderEditor from "./Pages/TenderEditor";
import TendersPage from "./Pages/TendersPage";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/tenders" element={<TendersPage/>}/>
        <Route path="/tender" element={<TenderEditor />}/>
      </Routes>
    </Layout>
  );
}

export default App;
