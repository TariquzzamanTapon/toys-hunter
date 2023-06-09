import React, { useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="md:flex items-center md:my-10 mb-6">
                <div data-aos="zoom-in-right" className=" md:w-1/2">
                    <img src="https://img.freepik.com/free-vector/different-kind-toys_1308-74241.jpg?w=740&t=st=1685944903~exp=1685945503~hmac=49cc613843f710bce9e2f437efef66855783c75a02464abe76d8de81d8b52d19" alt="" />
                </div>
                <div data-aos="fade-left" className=" md:w-1/2 text-center md:text-right">
                    <div className=''>
                        <div>
                            <h1 className="text-2xl md:text-5xl font-bold text-[#EE1B52]">END OF SESSION SALE.</h1>

                            <p className="mt-3 md:text-xl">Reprehenderit minus, similique quaerat dolore atque eaque nisi voluptas iure voluptatibus, nihil in cupiditate tempore placeat, harum assumenda. Quos beatae corporis officia?</p>

                            <button className='btn btn-warning mt-6'>READ MORE</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Banner;