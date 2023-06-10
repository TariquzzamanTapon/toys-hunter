import React from 'react';

const UpcomeingProducct = () => {
    return (
        <div className="md:my-10 my-4">
            <h1 className='text-xl md:text-4xl text-center font-bold mb-2'>Latest <span className='bg-yellow-400'>Products</span></h1>

            <div className='grid grid-cols-1 md:grid-cols-3'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/colorful-toy-constructions-designed-shaped-light-desk-toy-plastic-construction-rubics-cube_140725-32000.jpg?w=740&t=st=1686374640~exp=1686375240~hmac=ea98edbfcfdd742e887d29cc1e845e8ed73a590f0d973a10bbc5ba6e02bcdf40" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Rubik cube
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>On of the best educational product for child and adult !</p>
                        <p>Price : 30 $</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Education</div>
                            <div className="badge badge-outline">Impact</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148494234.jpg?w=740&t=st=1686375350~exp=1686375950~hmac=f59285dcc7b1b024e3cffa77c6facb52eb853361d31f0327b8343032c139feec" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Science Kit
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Science toy kit for science experiments</p>
                        <p>Price : 100$</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Educational</div>
                            <div className="badge badge-outline">Science</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/boy-playing-with-abacus_1308-26117.jpg?w=826&t=st=1686375116~exp=1686375716~hmac=e7032d823ec86dbc0e617a110d61727b71ea568a182d3bb80b9eb34a3ecd8936" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Math Toy
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Math toy for everyone</p>
                        <p>Price : 100$</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Math</div>
                            <div className="badge badge-outline">Learn</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpcomeingProducct;