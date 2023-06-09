import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { AiFillDelete, AiFillEdit, } from "react-icons/ai";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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

    // HANDLE_ASCENDING
    const handleass = () => {
        fetch('http://localhost:5000/asstoys')
            .then(res => res.json())
            .then(data => {
                const findingData = data.filter(d => d.email == user?.email);
                setDatas(findingData);
            });
    }
    // HANDLE_DESCENDING
    const handledes = () => {
        fetch('http://localhost:5000/destoys')
            .then(res => res.json())
            .then(data => {
                const findingData = data.filter(d => d.email == user?.email);
                setDatas(findingData);
            });
    }


    return (
        <div>

            <div className='text-right'>
                <div className="dropdown dropdown-left py-1">
                    <label tabIndex={0} className="btn m-1">Filter by price</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={handleass}>Ascending</button></li>
                        <li><button onClick={handledes}>Descending</button></li>
                    </ul>
                </div>
            </div>
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

                                    <td><img className='w-10' src={toy?.picture_url} alt="picture!" /></td>
                                    <th>{toy?.toy_name}</th>
                                    <td>{toy?.sub_category}</td>
                                    <td>{toy?.price} $</td>
                                    <td>{toy?.available_quantity}</td>
                                    <td>
                                        <div className='flex'>

                                            <Link to={`/updatetoy/${toy?._id}`}>
                                                <AiFillEdit className='h-6 w-6 hover:text-warning mx-1'></AiFillEdit>
                                            </Link>

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