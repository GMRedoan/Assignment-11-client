import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthContex";

const UserDonationRequests = () => {
  const { userInfo } = use(AuthContext);

  const [requests, setRequests] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5 

  useEffect(() => {
    fetch(`http://localhost:3000/donationReq/${userInfo.email}`)
      .then(res => res.json())
      .then(data => setRequests(data));
  }, [userInfo.email]);

   const filteredRequests =
    filterStatus === "all"
      ? requests
      : requests.filter(r => r.status === filterStatus)

   const indexOfLast = currentPage * itemsPerPage
  const indexOfFirst = indexOfLast - itemsPerPage
  const currentItems = filteredRequests.slice(indexOfFirst, indexOfLast)

  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

  return (
    <div className="p-6 pt-10">
      <h2 className="text-3xl font-bold mb-4 text-center">
        My <span className="text-primary">Donation</span> Requests
      </h2>

      <div className="flex justify-end mb-3">
        <select
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setCurrentPage(1);
          }}
          className="select select-bordered w-40"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-primary text-white">
            <tr>
              <th>#</th>
              <th>Recipient Name</th>
              <th>Blood Group</th>
              <th>Hospital</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No donation requests found.
                </td>
              </tr>
            ) : (
              currentItems.map((req, index) => (
                <tr key={req._id}>
                  <td>{indexOfFirst + index + 1}</td>
                  <td>{req.recipientName}</td>
                  <td>{req.bloodGroup}</td>
                  <td>{req.hospitalName}</td>
                  <td>{req.donationDate}</td>
                  <td>{req.donationTime}</td>
                  <td className="font-semibold capitalize">{req.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          <button
            className="btn btn-sm"
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`btn btn-sm ${
                currentPage === i + 1 ? "btn-primary text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn btn-sm"
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDonationRequests;
