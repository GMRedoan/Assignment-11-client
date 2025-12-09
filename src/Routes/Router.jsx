import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import Error from "../Shared/Error";
import Search from "../Pages/Search";
import PrivateRoutes from "./PrivateRoutes";
import DonationReq from "../Pages/DonationReq";

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
        element: <Registration></Registration>
      },
      {
        path: '/donation',
        element: <PrivateRoutes>
          <DonationReq></DonationReq>
        </PrivateRoutes>
      },
      {
        path: '/search',
        element: <Search></Search>
      }
    ]
  },
  {
    path: '/*',
    element: <Error></Error>
  }
]);
