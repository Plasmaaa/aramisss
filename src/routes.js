
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./layouts/Layout";
import Parking from "./components/Stock/Stock"


export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "Stocks", element: <Parking /> },
    
    ],
  },
];
