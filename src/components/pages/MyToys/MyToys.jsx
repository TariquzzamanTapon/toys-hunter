import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { AiFillDelete, AiFillEdit, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

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
                                            <AiFillEdit className='h-6 w-6 hover:text-warning mx-1'></AiFillEdit>
                                            <AiFillDelete className='h-6 w-6 hover:text-warning mx-1'></AiFillDelete>
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