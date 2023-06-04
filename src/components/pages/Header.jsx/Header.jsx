import React from 'react';
import img from '../../../assets/logo.png'
import {Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>All Toys</Link></li>
                            {/* {
                                user ? <>
                                    <li><Link>Add A Toys</Link></li>
                                    <li><Link>My Toys</Link></li>
                                </> : ""
                            } */}
                            <li><Link>Blogs</Link></li>


                        </ul>
                    </div>
                    <p className='text-2xl flex items-center'> <img className='w-10' src={img} alt="" srcset="" /> <span className='bg-yellow-400 font-bold '>Toys</span>Hunter</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link>All Toys</Link></li>
                        {/* {
                            user ? <>
                                <li><Link>Add A Toys</Link></li>
                                <li><Link>My Toys</Link></li>
                            </> : ""
                        } */}
                        <li><Link>Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end ">

                    <Link to='/login' className="btn bg-yellow-400 font-bold">Sign up</Link>
                </div>
            </div>
        </>
    );
};

export default Header;