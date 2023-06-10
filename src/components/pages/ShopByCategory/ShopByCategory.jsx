import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                const findingData = data.filter(d => d.sub_category == 'Educational Toys');
                console.log(findingData);
                setDatas(findingData);
            });
    }, []);

    const handleMaths = () => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                const findingData = data.filter(d => d.sub_category == 'Math Toys');
                setDatas(findingData);
            })
    }

    const handleScience = () => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                const findingData = data.filter(d => d.sub_category == 'Science Toys');
                setDatas(findingData);
            })
    }


    return (
        <div className='md:my-10 '>
            <h1 className='text-xl md:text-4xl text-center font-bold'>Shop By <span className='bg-yellow-400'>Category</span></h1>
            <p className='text-center mb-8 md:text-xl '>LAsperiores rerum, voluptate deleniti totam sapiente ratione <br /> blanditiis dignissimos velit magnam libero ea ipsum voluptates a cum non eius vitae porro quia.</p>

            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Soft Skill</Tab>
                        <Tab onClick={handleMaths}>Math Toys</Tab>
                        <Tab onClick={handleScience}>Science Toys</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid md:grid-cols-2'>

                            {
                                datas.map(data => <>
                                    <div className="card w-96 glass mx-auto md:my-10 my-4 ">
                                        <figure><img className='' src={data?.picture_url} alt="car!" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{data?.toy_name}</h2>
                                            <p> <strong>Price :</strong> {data?.price} $</p>
                                            <p> <strong>Ratting :</strong> {data?.rating}</p>
                                            <Link to={`/toy/${data?._id}`}><button className="btn btn-primary">View Details</button></Link>

                                        </div>
                                    </div>
                                </>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div>
                            <div className='grid md:grid-cols-2'>
                                {
                                    datas.map(data => <>
                                        <div className="card w-96 glass mx-auto md:my-10 my-4 ">
                                            <figure><img className='' src={data?.picture_url} alt="car!" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{data?.toy_name}</h2>
                                                <p> <strong>Price :</strong> {data?.price} $</p>
                                                <p> <strong>Ratting :</strong> {data?.rating}</p>
                                                <Link to={`/toy/${data?._id}`}><button className="btn btn-primary">View Details</button></Link>

                                            </div>
                                        </div>
                                    </>)
                                }
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid md:grid-cols-2">
                            {
                                datas.map(data => <>
                                    <div className="card w-96 glass mx-auto md:my-10 my-4 ">
                                        <figure><img className='' src={data?.picture_url} alt="car!" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{data?.toy_name}</h2>
                                            <p> <strong>Price :</strong> {data?.price} $</p>
                                            <p> <strong>Ratting :</strong> {data?.rating}</p>
                                            <Link to={`/toy/${data?._id}`}><button className="btn btn-primary">View Details</button></Link>

                                        </div>
                                    </div>
                                </>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;