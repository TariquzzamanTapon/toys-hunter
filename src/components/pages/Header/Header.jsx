import React from 'react';
import img from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { HiLogout } from 'react-icons/hi';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => {

            })
    }
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
                            <li><Link to='/alltoys'>All Toys</Link></li>
                            {
                                user ? <>
                                    <li><Link to='/addtoy'>Add A Toys</Link></li>
                                    <li><Link to ='/mytoys'>My Toys</Link></li>
                                </> : ""
                            }
                            <li><Link to = "/blog">Blogs</Link></li>


                        </ul>
                    </div>
                    <p className='text-2xl flex items-center'> <img className='w-10' src={img} alt="" srcset="" /> <span className='bg-yellow-400 font-bold '>Toys</span>Hunter</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        {
                            user ? <>
                                <li><Link to='/addtoy'>Add A Toys</Link></li>
                                <li><Link to = '/mytoys'>My Toys</Link></li>
                            </> : ""
                        }
                        <li><Link to='/blog'>Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user ? <>
                            <div className='flex items-center'>
                                <img className='w-8 mx-2 rounded-full' src={user?.photoURL} title={user.displayName} alt="" />
                                <Link onClick={handleLogOut}><HiLogout className='h-8 w-8' title='Sign Out'></HiLogout></Link>
                            </div>

                        </> :
                            <Link to='/login' className="btn bg-yellow-400 font-bold">Sign up</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Header;