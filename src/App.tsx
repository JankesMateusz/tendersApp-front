import Layout from "./Layout/Layout";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import TenderEditor from "./Pages/TenderEditor";
import TendersPage from "./Pages/TendersPage";
import path from "path";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/tenders", element: <TendersPage /> },
        {
          path: "/tender/:id",
          element: <TenderEditor />,
        },
        {
          path: "/newTender",
          element: <TenderEditor />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
