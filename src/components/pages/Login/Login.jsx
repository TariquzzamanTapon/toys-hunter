import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineLockClosed, HiOutlineLogin, HiOutlineLogout, HiOutlineMail, HiOutlineX } from "react-icons/hi";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { logIn, googleSign } = useContext(AuthContext);

    useTitle('| Login');
    const [success, setSuccess] = useState([]);
    const [error, setError] = useState([]);
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            })
    };
    const handleGoogleSign = () => {
        googleSign()
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            })
    }

    return (
        <>

            <div className="shadow-xl md:flex justify-between rounded p-2 md:p-7 m-3 md:w-2/3 mx-auto">

                <div className='md:h-1/2 md:w-1/2 text-center p-4 mt-10 '>
                    <h1 className='text-2xl font-bold p-2 md:p-3 mb-4'>Sign in</h1>
                    <form onSubmit={handleLogin}>
                        <div className="input-group mb-3">
                            <span>
                                <HiOutlineMail className='h-6 w-6'></HiOutlineMail>
                            </span>
                            <input type="email" name='email' placeholder="Email " className="input input-bordered w-full" required />
                        </div>
                        <div className="input-group mb-3">
                            <span>
                                <HiOutlineLockClosed className='h-6 w-6'></HiOutlineLockClosed>
                            </span>
                            <input type="password" placeholder="Password " name='password' className="input input-bordered w-full" required />
                        </div>

                        <div className='mb-3'>
                            <button className='btn rounded-lg bg-yellow-500'><HiOutlineLogin className='h-6 w-6'></HiOutlineLogin>Sign In</button>
                        </div>

                        <p className='mt-4'>Or Sign in with social platform</p>
                        <div className='my-1'>

                            <button onClick={handleGoogleSign}><FaGoogle className='h-6 w-6 mr-2' title='Sign with Google'></FaGoogle></button>
                        </div>

                        {
                            error && <p className='text-red-600 font-bold flex items-center'>{error}</p>
                        }
                        <p className='text-green-400 font-bold'>{success}</p>
                    </form>

                </div>

                {/* new brand */}
                <div className='md:h-1/2 md:w-1/2 text-center p-4'>
                    <h1 className='text-2xl font-bold p-2 md:p-3'>Are you New ?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ducimus minus sequi assumenda ?</p>
                    <div className='mt-2'>
                        <Link to='/register' className='btn rounded-lg'><HiOutlineLogout className='h-6 w-6'></HiOutlineLogout>Sign up</Link>
                    </div>
                    <img src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1684730187~exp=1684730787~hmac=353b04c5a88ab2bf4066d93bc4f21fb163c1c80c5a4a2f59784470f532b87c41" alt="" />

                </div>

            </div></>
    );
};

export default Login;