import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const AllToys = () => {
    const [limit, setLimit] = useState(20);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toys?limit=${limit}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])
    return (
        <>


            <div className="overflow-x-auto md:my-10 my-5">
                <div className=' m-2'>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered " />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr >
                            <th></th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>See Details</th>
                        </tr>
                    </thead>
                    {
                        toys.map(toy => <>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td><img className='w-10' src={toy?.picture_url} alt="car!" /></td>
                                    <th>{toy?.toy_name}</th>
                                    <td>{toy?.sub_category}</td>
                                    <td>{toy?.price} $</td>
                                    <td>{toy?.available_quantity}</td>
                                    <td>
                                        <Link to={`/toy/${toy._id}`}><button className="btn btn-primary">View Details</button></Link>
                                    </td>
                                </tr>

                            </tbody>
                        </>
                        )
                    }
                </table>
            </div>

        </>
    );
};

export default AllToys;