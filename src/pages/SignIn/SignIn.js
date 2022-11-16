import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../Navbar/Navbar';

const SignIn = () => {
    const {logIn} = useContext(AuthContext);
    const navigate= useNavigate();

    const handleSignIn = event =>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        logIn(email,password)
        .then(result=>{
            const user = result.user;
            from.reset();
            navigate('/');
        })
        .catch(err=>console.error(err))
        
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
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignIn;