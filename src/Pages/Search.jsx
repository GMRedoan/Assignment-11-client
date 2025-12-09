import React from 'react';

const Search = () => {
    return (
        <section className="bg-base-200 py-10 px-6 md:px-16">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Search for <span className='text-primary'>Blood</span> Donors
                </h2>

                <form
                    className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Blood Group</span>
                        </label>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>
                    </div>

                    {/* DISTRICT */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">District</span>
                        </label>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select District</option>
                            <option>Dhaka</option>
                        </select>
                    </div>

                    {/* UPAZILA */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Upazila</span>
                        </label>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select Upazila</option>
                            <option>Sadar</option>
                        </select>
                    </div>

                    <div className="md:col-span-3 flex justify-center mt-4">
                        <button className="btn btn-primary w-full md:w-auto px-10 text-white font-semibold">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Search;