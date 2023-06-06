import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])
    return (
        <>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:my-10 my-4'>
                {
                    toys.map(toy => <>
                        <div className="card w-96 glass">
                            <figure><img className='md:h-20 w-full' src={toy?.picture_url} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{toy?.toy_name}</h2>
                                <p>{toy?.sub_category}</p>
                                <p> <strong>Price :</strong> {toy?.price}$</p>
                                <p> <strong>Available Quantity : </strong> {toy?.available_quantity}</p>
                                <div className="card-actions justify-end">
                                   <Link to={`/toys/${toy?._id}`}></Link>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </>
    );
};

export default AllToys;