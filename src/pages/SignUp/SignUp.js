import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../Navbar/Navbar';

const SignIn = () => {
    const {signUp} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        //console.log(name,email,phone,password)
        signUp(email,password)
        .then(result =>{
            const user = result.user;
                alert('user added successfully');
                console.log(user)
        })
        .catch(err => console.error(err))
        
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
                <div className=" w-full lg:w-1/2 flex-col my-16">
                    
                    <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input name='phone' type="text" placeholder="Phone" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                               
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className='text-center mt-5'>Already have an account <Link to={'/signin'} className='ml-2 underline text-primary font-bold'>Please Log In</Link></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignIn;