import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { AiFillDelete, AiFillEdit, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from 'sweetalert2';

const MyToys = () => {
    const [datas, setDatas] = useState([]);
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {

        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                const findingData = data.filter(d => d.email == user?.email);
                setDatas(findingData);
            });
    }, []);


    // DELETE
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {


                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (data.deletedCount > 0) {
                            const remaining = datas.filter(d => d._id !== id);
                            setDatas(remaining);
                        }
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })

            })
    }

    // EDIT
    const handleEdit = (id) => {

    }



    return (
        <div>

            <div className="overflow-x-auto md:my-10 my-5">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr >
                            <th></th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Change Action</th>
                        </tr>
                    </thead>
                    {
                        datas.map(toy => <>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    {
                                        toy?.picture_url && <td><img className='w-10' src={toy?.picture_url} alt="picture!" /></td>
                                    }
                                    <th>{toy?.toy_name}</th>
                                    <td>{toy?.sub_category}</td>
                                    <td>{toy?.price} $</td>
                                    <td>{toy?.available_quantity}</td>
                                    <td>
                                        <div className='flex'>
                                            <AiFillEdit onClick={() => handleEdit(toy?._id)} className='h-6 w-6 hover:text-warning mx-1'></AiFillEdit>

                                            <AiFillDelete onClick={() => handleDelete(toy?._id)} className='h-6 w-6 hover:text-warning mx-1'></AiFillDelete>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default MyToys;