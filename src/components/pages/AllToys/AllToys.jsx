import React, { useEffect, useState } from 'react';
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