import React from 'react';
import { FaRegShareSquare, FaThumbsUp } from 'react-icons/fa';

const Gallery = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
                <div className=" relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-photo/robot-with-pliers_1048-4573.jpg?w=740&t=st=1685940669~exp=1685941269~hmac=e9d7241af48b79e0419bace21b278d18ddeda745fe5f937226db3adfb48a5b8c" alt="Image 1" />

                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-photo/robot-holding-key_1048-3578.jpg?w=740&t=st=1685940619~exp=1685941219~hmac=82d94c7347c977db35c305906f4523275c7c1366abcffc8f2553661427188a62" alt="Image 2" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-photo/robot-with-pliers_1048-4573.jpg?w=740&t=st=1685940669~exp=1685941269~hmac=e9d7241af48b79e0419bace21b278d18ddeda745fe5f937226db3adfb48a5b8c" alt="Image 3" />

                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-photo/3d-lawyer_1048-5017.jpg?w=740&t=st=1685940804~exp=1685941404~hmac=21862954280ec827fff3a97c5b2effea65b02105337314dd6ca16d194c1530ae" alt="Image 3" />

                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-photo/robot-with-pliers_1048-4573.jpg?w=740&t=st=1685940669~exp=1685941269~hmac=e9d7241af48b79e0419bace21b278d18ddeda745fe5f937226db3adfb48a5b8c" alt="Image 3" />

                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-photo/robot-balancing-tight-rope-with-euro-symbol_1048-3594.jpg?w=740&t=st=1685941747~exp=1685942347~hmac=526a2e36c6164dcd73009bc6ed77fc419e54171b688f6ac9a40b73d9c53da52c" alt="Image 3" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Gallery;


