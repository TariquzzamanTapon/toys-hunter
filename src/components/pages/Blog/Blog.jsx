import React from 'react';

const Blog = () => {
    return (
        <>
            <div className='my-4 md:my-8'>
                <h1 className='text-xl md:text-4xl text-center font-bold'>Our <span className='bg-yellow-400'>Blogs</span></h1>

                <div className="my-3 md:my-4">
                    <div className='mb-3'>
                        <p className='font-bold underline '> 01.  What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                        <p className=''><strong>Ans : </strong> An access token is a short-lived credential used to access protected resources, while a refresh token is a long-lived credential used to obtain new access tokens. They should be stored securely on the client-side, with the access token typically stored in memory or session storage, and the refresh token stored in an HTTP-only cookie or secure client-side storage.</p>
                    </div>
                    <div className='mb-3'>
                        <p className='font-bold underline '> 02. Compare SQL and NoSQL databases?</p>
                        <p className=''><strong>Ans : </strong> SQL databases are structured, relational databases that use structured query language (SQL) for defining and manipulating data, while NoSQL databases are non-relational databases that provide flexible schemas and scale horizontally, often sacrificing some data consistency for improved scalability and performance.</p>
                    </div>

                    <div className='mb-3'>
                        <p className='font-bold underline '>03. What is express js? What is Nest JS?</p>
                        <p className=''><strong>Ans : </strong> Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and intuitive API for building web applications and APIs, handling HTTP requests and responses, routing, middleware support, and more. <br />

                            Nest.js is a progressive and opinionated Node.js framework for building scalable and efficient server-side applications. It is built on top of Express.js and provides additional features such as dependency injection, modular architecture, TypeScript support, and strong typing, making it suitable for building complex and enterprise-level applications.</p>
                    </div>
                    <div className='mb-3'>
                        <p className='font-bold underline '>04. What is MongoDB aggregate and how does it work</p>
                        <p className=''><strong>Ans : </strong> MongoDB's aggregate is a framework for data processing and analysis. It uses a pipeline of stages and operators to transform and manipulate data in collections, allowing complex operations like filtering, grouping, sorting, and aggregation. The result is derived from the stages' output, providing powerful capabilities for data exploration and analysis within the database.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;