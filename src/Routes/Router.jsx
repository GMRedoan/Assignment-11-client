import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import Error from "../Shared/Error";
import Search from "../Pages/Search";
import DonationReq from "../Pages/DonationReq";
import Loading from "../Shared/Loading";
import DashBoard from "../DashBoardLayout/DashBoard";
import Profile from "../Pages/Dashboard/DonorDashBoard/Profile";

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
        element: <DonationReq></DonationReq>
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
    path:'/dashboard',
    element: <DashBoard></DashBoard>,
    children:[
      {
        path:'profile',
        element: <Profile></Profile>
      }
    ]
  },
  {
    path: '/*',
    element: <Error></Error>
  }
]);
