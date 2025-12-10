import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';


const Search = () => {
    const { districts, upazilas } = useLoaderData()
    const {register, handleSubmit} =useForm()
    const handleSearch = (data) => {
        console.log(data)
    }
    return (
        <section className="bg-base-200 py-10 px-6 md:px-16">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Search for <span className='text-primary'>Blood</span> Donors
                </h2>

                <form onSubmit={handleSubmit(handleSearch)} className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* BLOOD GROUP */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Blood Group</span>
                        </label>

                        <select {...register('bloodGroup')} className="select select-bordered w-full" defaultValue="">
                            <option value="" disabled>Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>

                    {/* DISTRICT */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">District</span>
                        </label>

                        <select {...register('district')} className="select select-bordered w-full" defaultValue="">
                            <option value="" disabled>Select District</option>
                            {
                                districts.map(district => <option key={district.id}>{district.name}</option>
                                )
                            }
                        </select>
                    </div>

                    {/* UPAZILA */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Upazila</span>
                        </label>

                        <select {...register('upazila')} className="select select-bordered w-full" defaultValue="">
                            <option value="" disabled>Select Upazila</option>
                            {
                                upazilas.map(upazila => <option key={upazila.id}>{upazila.name}</option>
                                )
                            }
                        </select>
                    </div>

                    {/* BUTTON */}
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
