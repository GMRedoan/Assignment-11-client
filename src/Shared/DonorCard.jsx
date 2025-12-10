import React from 'react';

const DonorCard = ({ donor }) => {
    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="md:pl-26 py-4 font-semibold">{donor.name}</td>
            <td className="px-4 text-primary">{donor.bloodGroup}</td>
            <td className="px-4">{donor.email}</td>
            <td className="px-4 text-green-500 font-semibold">{donor.status}</td>
         </tr>
    );
};

export default DonorCard;