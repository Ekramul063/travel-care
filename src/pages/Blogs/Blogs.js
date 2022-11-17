import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10'>

            <div className="blog_item px-10 mx-auto mb-5">
                <h1 className='text-2xl text-red-800 mb-3'>Difference between SQL and NoSQL?</h1>
                <p className='text-green-700'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className="blog_item px-10 mx-auto mb-5">
                <h1 className='text-2xl text-red-800 mb-3'>What is JWT, and how does it work?</h1>
                <p className='text-green-700'>User sign-in using username and password or google/facebook.
                    Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                    User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                    Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            </div>
            <div className="blog_item px-10 mx-auto mb-5">
                <h1 className='text-2xl text-red-800 mb-3'>What is the difference between javascript and NodeJS?</h1>
                <p className='text-green-700'>1. NodeJS :
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.<br></br>
                        2.It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. <br></br><br></br>

                    1. JavaScript :
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.<br></br>
                    2.Nodejs is written in C, C++ and Javascript.
                </p>
            </div>


            <div className="blog_item px-10 mx-auto mb-5">
                <h1 className='text-2xl text-red-800 mb-3'>How does NodeJS handle multiple requests at the same time?</h1>
                <p className='text-green-700'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>

        </div>
    );
};

export default Blogs;