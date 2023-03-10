import React from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../Navbar/Navbar';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const SignIn = () => {
    const [error,setError] = useState('');
    const provider =new GoogleAuthProvider();
    const { logIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleGoogleSignIn = event => {
        googleSignIn(provider)
        .then(result =>{
            navigate(from,{replace:true});
        })
        .catch(err=>console.error(err))

    }

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message))

    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
                <div className=" w-full lg:w-1/2 flex-col my-16">

                    <form onSubmit={handleSignIn} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <p className='font-bold text-red-800'>{error}</p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign In</button>
                            </div>
                            <p className='text-center text-primary mt-3'>or signin with</p><hr></hr>
                            <div className="flex justify-center gap-3 items-center mt-2">
                                <FaGoogle onClick={handleGoogleSignIn} className='text-5xl  cursor-pointer text-purple'></FaGoogle>
                            </div>
                            <hr></hr>

                            <p className='text-center mt-5'>Don't have an account <Link to={'/signup'} className='ml-2 underline text-primary font-bold'>Please SignUp</Link></p>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignIn;