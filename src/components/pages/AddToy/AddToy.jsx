import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const AddToy = () => {
    const { user } = useContext(AuthContext);
    const handleAddToy = (e) => {
        e.preventDefault();
        const picture_url = e.target.picture.value;
        const toy_name = e.target.toyname.value;
        const name = e.target.name.value || user?.displayName;
        const seller_name = e.target.sellername.value || user?.email;
        const seller_email = e.target.selleremail.value || user?.email;
        const sub_category = e.target.subcategories.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const available_quantity = e.target.quantity.value;
        const detail_description = e.target.textarea.value;

        const newToys = { picture_url, toy_name, name, seller_name, seller_email, sub_category, price, rating, available_quantity, detail_description };

        // console.log(newToys);


        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToys)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



    }
    return (
        <div className='my-4 md:my-10'>

            <form onSubmit={handleAddToy}>
                <div className="flex py-2">
                    <div className="form-control w-full mx-2">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" name='picture' placeholder="Picture URL of the toy" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toyname' placeholder="Toy name" className="input input-bordered w-full" required />
                    </div>
                </div>

                <div className="flex py-2">
                    <div className="form-control w-full mx-2">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <input type="text" placeholder="Seller Name" className="input input-bordered w-full" name='sellername' defaultValue={user?.displayName} />
                    </div>
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className="label-text">Seller Email</span>

                        </label>
                        <input type="text" placeholder="Seller Email" className="input input-bordered w-full" name='selleremail' defaultValue={user?.email} />
                    </div>
                </div>

                <div className="flex py-2">
                    <div className="form-control w-full mx-2">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name='subcategories' placeholder="he sub-categories can be Math Toys, Language Toys, and Science Toys." className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control w-full mx-2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Price" className="input input-bordered w-full" name='price' required />
                    </div>

                </div>

                <div className="flex py-2">
                    <div className="form-control w-full mx-2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" placeholder="example : 5, 4 " className="input input-bordered w-full" name='rating' required />
                    </div>

                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" placeholder="Available quantity" className="input input-bordered w-full" name='quantity' required />
                    </div>
                </div>

                <div className="form-control w-full mx-2 ">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Detail description" name='textarea' required></textarea>
                </div>

                <div className='text-center my-3 md:my-5'>
                    <button className="btn btn-warning">Add A Toy</button>
                </div>
            </form >

        </div >
    );
};

export default AddToy;