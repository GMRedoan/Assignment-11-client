import React, { use } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Authentication/AuthContex";
import useAxios from "../../../Hooks/UseAxios";
import { BsFillSendPlusFill } from "react-icons/bs";

const CreateDonationReq = () => {
    const { userInfo } = use(AuthContext)
    const { districts, upazilas } = useLoaderData();
    const axiosInstance = useAxios()

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = async (data) => {
        data.status = "pending"
        const res = await axiosInstance.post('/donationReq', data)
        if (res.data) {
            Swal.fire({
                title: "Donation Request Successful!",
                icon: "success",
                confirmButtonColor: "#F91617",
            });
            reset();
        }
    };

    return (
        <div className="my-10 max-w-4xl mx-auto bg-base-200 p-8 rounded-xl shadow-lg">
            <title>Create Donation Requests</title>
            <h2 className="text-3xl font-bold mb-8 text-center">
                Create a <span className="text-primary">Donation</span> Request
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                    <label className="font-semibold mb-1 block">Requester Name</label>
                    <input
                        type="text"
                        readOnly
                        defaultValue={userInfo.name}
                        {...register("requesterName")}
                        className="input input-bordered w-full bg-base-100"
                    />
                </div>

                <div>
                    <label className="font-semibold mb-1 block">Requester Email</label>
                    <input
                        type="email"
                        readOnly
                        defaultValue={userInfo.email}
                        {...register("requesterEmail")}
                        className="input input-bordered w-full bg-base-100"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="font-semibold mb-1 block">Recipient Name</label>
                    <input
                        type="text"
                        placeholder="Enter recipient name"
                        {...register("recipientName", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="font-semibold mb-1 block">Recipient District</label>
                    <select
                        defaultValue=""
                        {...register("recipientDistrict", { required: true })}
                        className="select select-bordered w-full"
                    >
                        <option value="" disabled>Select District</option>
                        {districts.map((d) => (
                            <option key={d.id} value={d.name}>
                                {d.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="font-semibold mb-1 block">Recipient Upazila</label>
                    <select
                        defaultValue=""
                        {...register("recipientUpazila", { required: true })}
                        className="select select-bordered w-full"
                    >
                        <option value="" disabled>Select Upazila</option>
                        {upazilas.map((u) => (
                            <option key={u.id} value={u.name}>
                                {u.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label className="font-semibold mb-1 block">Hospital Name</label>
                    <input
                        type="text"
                        placeholder="The name of hospital that needs blood"
                        {...register("hospitalName", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="font-semibold mb-1 block">Full Address</label>
                    <input
                        type="text"
                        placeholder="Type exact location"
                        {...register("addressLine", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="font-semibold mb-1 block">Blood Group</label>
                    <select
                        defaultValue=""
                        {...register("bloodGroup", { required: true })}
                        className="select select-bordered w-full"
                    >
                        <option value="" disabled>Select blood group</option>
                        <option>A+</option><option>A-</option>
                        <option>B+</option><option>B-</option>
                        <option>AB+</option><option>AB-</option>
                        <option>O+</option><option>O-</option>
                    </select>
                </div>

                <div>
                    <label className="font-semibold mb-1 block">Donation Date</label>
                    <input
                        type="date"
                        {...register("donationDate", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="font-semibold mb-1 block">Donation Time</label>
                    <input
                        type="time"
                        {...register("donationTime", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="font-semibold mb-1 block">Request Message</label>
                    <textarea
                        rows="4"
                        placeholder="Explain why you need blood in detail"
                        {...register("requestMessage", { required: true })}
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                <div className="md:col-span-2 flex justify-center">
                    <button
                        type="submit"
                        disabled={userInfo.status === "blocked"}
                        className={`btn w-60 text-white ${userInfo.status === "blocked" ? "bg-gray-600 border-gray-600" : "btn-primary"
                            }`}
                    >
                        {userInfo.status === "blocked" ? "Currently you are Blocked" : <span className="flex items-center justify-center gap-2">
                            Send Donation Request
                            <BsFillSendPlusFill className="text-md" />
                        </span>}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateDonationReq;
