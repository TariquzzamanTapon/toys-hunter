import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from "react-icons/hi";

const Error = () => {
    return (
        <div>
            <img className='h-3/5 mx-auto' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1685933704~exp=1685934304~hmac=c370c2f8ad4dca6eaffa4e1a7aafb1bff451b95c858d2e81c1b643f61f85315b" alt="" />
            <div className='text-center'>
                <Link to="/" className='btn bg-yellow-400'><HiArrowNarrowLeft className='w-6 h-6'></HiArrowNarrowLeft> Back To Home</Link>
            </div>
        </div>
    );
};

export default Error;