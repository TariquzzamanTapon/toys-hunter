import React from 'react';
import { FaRegShareSquare, FaThumbsUp } from 'react-icons/fa';

const Gallery = () => {
    return (
        <div>

            <h1 className='text-xl md:text-4xl text-center font-bold'>Our <span className='bg-yellow-400'>Gallery</span></h1>
            <p className='text-center mb-8 md:text-xl '>LAsperiores rerum, voluptate deleniti totam sapiente ratione <br /> blanditiis dignissimos velit magnam libero ea ipsum voluptates a cum non eius vitae porro quia.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
                <div className=" relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-vector/diy-creative-workshop-with-sewing-tools_23-2148530144.jpg?w=740&t=st=1686024021~exp=1686024621~hmac=c75b25b871e24d904349a834d1b22599b359971618172406f87b5d8d6c47a286" alt="Image 1" />

                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2 hover:text-primary'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9  hover:text-primary'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-photo/front-view-table-with-solutions-microscope_140725-83496.jpg?w=740&t=st=1686023809~exp=1686024409~hmac=01ebc12df2e4e88db16563507205cb84c0b4723c26a8a3537b6f39ce92d14621" alt="Image 2" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2  hover:text-primary'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9  hover:text-primary'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-vector/toy-constructor-isometric-blocks_1284-26315.jpg?w=740&t=st=1686024105~exp=1686024705~hmac=30e7423f8947c8263368dec2156d6e270ebdfa00c5d76114bee2f9e324479337" alt="Image 3" />

                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2  hover:text-primary'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9  hover:text-primary'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-vector/set-science-equipments_1308-36788.jpg?w=826&t=st=1686409666~exp=1686410266~hmac=30a7ff64e423db994fcedb63da14f19435bed1c6c101fa1ce03658e34debf7a8" alt="Image 3" />

                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2  hover:text-primary'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9  hover:text-primary'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-vector/set-geometry-shapes-other-school-items_1308-40947.jpg?w=740&t=st=1686409519~exp=1686410119~hmac=ed235d8b5341a4fd64727d8855b21da9dc62a29b5994b241aa759417f03740c3" alt="Image 3" />

                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2 hover:text-primary'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9 hover:text-primary'></FaRegShareSquare>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer">
                    <img className="transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-hopscotch-game_23-2149294741.jpg?w=740&t=st=1686409422~exp=1686410022~hmac=f8c5ab45d6bf47fc24e7731c29cc6c7742610b70356d35d253f45fa9b6befbb5" alt="Image 3" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400 bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className='flex'>
                            <FaThumbsUp className='w-9 h-9 mr-2 hover:text-primary'></FaThumbsUp>
                            <FaRegShareSquare className='w-9 h-9  hover:text-primary'></FaRegShareSquare>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;


