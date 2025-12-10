import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import Error from "../Shared/Error";
import Search from "../Pages/Search";
import PrivateRoutes from "./PrivateRoutes";
import DonationReq from "../Pages/DonationReq";
import Loading from "../Shared/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
        loader: () => fetch('http://localhost:3000/districts_upazilas'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/donation',
        element: <PrivateRoutes>
          <DonationReq></DonationReq>
        </PrivateRoutes>
      },
      {
        path: '/search',
        element: <Search></Search>,
        loader: () => fetch('http://localhost:3000/districts_upazilas'),
        hydrateFallbackElement: <Loading></Loading>
      }
    ]
  },
  {
    path: '/*',
    element: <Error></Error>
  }
]);
