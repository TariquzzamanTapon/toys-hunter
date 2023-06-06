import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ShopByCategory = () => {
    return (
        <div className='md:my-10 '>
            <h1 className='text-xl md:text-4xl text-center font-bold'>Shop By <span className='bg-yellow-400'>Category</span></h1>
            <p className='text-center mb-8 md:text-xl '>LAsperiores rerum, voluptate deleniti totam sapiente ratione <br /> blanditiis dignissimos velit magnam libero ea ipsum voluptates a cum non eius vitae porro quia.</p>

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;