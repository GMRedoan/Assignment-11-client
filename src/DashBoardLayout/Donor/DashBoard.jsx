import React, { use } from "react";
import { AuthContext } from "../../Authentication/AuthContex";
import DonorDashBoard from "../DashBoard/DonorDashBoard";
import AdminDashBoard from "../DashBoard/AdminDashBoard";
import { useLoaderData } from "react-router";

const allReqPromise = fetch('http://localhost:3000/donationReq')
.then(res => res.json())
const DashBoard = () => {
    const { userInfo } = use(AuthContext);
    const users = useLoaderData()
    const allReq = use(allReqPromise)
     

    return (
        <div className="p-4 pt-14 min-h-screen">
{
    userInfo?.role == 'donor' && <DonorDashBoard></DonorDashBoard>
}
{
    userInfo?.role == 'admin' && <AdminDashBoard users={users} allReq={allReq}></AdminDashBoard>
}
        </div>
    );
};

export default DashBoard;
