import Layout from "./Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TenderEditor from "./Pages/TenderEditor";
import TendersPage from "./Pages/TendersPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/tenders", element: <TendersPage /> },
        {
          path: "/tenders/:mdpId",
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
