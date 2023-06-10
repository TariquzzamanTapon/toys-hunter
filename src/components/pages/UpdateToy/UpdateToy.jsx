import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const toy = useLoaderData();
    const { _id, price, available_quantity, detail_description } = toy;


    const handleUpdate = (e) => {
        e.preventDefault();
        const price = e.target.price.value;
        const available_quantity = e.target.quantity.value;
        const detail_description = e.target.textarea.value;
        const updateUser = { price, available_quantity, detail_description };


        fetch(`http://localhost:5000/toys/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Data update successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <form className='md:my-10 my-5 ' onSubmit={handleUpdate}>
                <div className="flex py-2">
                    <div className="form-control w-full mx-2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Enter price" className="input input-bordered w-full" name='price' defaultValue={price} required />
                    </div>

                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" placeholder="Available quantity" className="input input-bordered w-full" name='quantity' defaultValue={available_quantity} required />
                    </div>
                </div>

                <div className="form-control w-full mx-2 ">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Detail description" defaultValue={detail_description} name='textarea' required></textarea>
                </div>

                <div className='text-center my-3 md:my-5'>
                    <button className="btn btn-warning">Update Toy</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;