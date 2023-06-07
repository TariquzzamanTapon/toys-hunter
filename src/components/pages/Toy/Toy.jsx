import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Toy = () => {
    const toy = useLoaderData();
    const { picture_url, toy_name, seller_name, seller_email, price, rating, available_quantity, detail_description } = toy;
    console.log(toy);
    return (
        <div>
            {/* picture, toy name, seller name, seller email, price, rating, available quantity, and detail description */}

            <div className="card w-96 glass mx-auto md:my-10 my-4 ">
                <figure><img className='' src={picture_url} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <h2 className="card-title">Seller Name :  {seller_name}</h2>
                    <p><strong>Seller Email :</strong> {seller_email}</p>
                    <p> <strong>Price :</strong> {price} $</p>
                    <p> <strong>Ratting :</strong> {rating} </p>
                    <p> <strong>Available Quantity : </strong> {available_quantity}</p>
                    <p>{detail_description}</p>
                </div>
            </div>

            
        </div>
    );
};

export default Toy;