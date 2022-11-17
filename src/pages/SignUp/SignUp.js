import React from 'react';
import { useContext } from 'react';
import { Link,useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Navbar from '../Navbar/Navbar';
import { FaGoogle } from 'react-icons/fa';
import { getAuth, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const auth= getAuth();
const SignIn = () => {
    const provider =new GoogleAuthProvider();
    const { signUp,googleSignIn} = useContext(AuthContext);
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


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const profile = form.image.value;
        const password = form.password.value;

        signUp(email, password)
            .then(result => {
                const user = result.user;
               form.reset();
               updateprofile(name,profile);
               navigate(from, { replace: true });
            })
            .catch(err => console.error(err))
    }
    
    const updateprofile =(name,photo)=>{
        updateProfile(auth.currentUser,
            {displayName:name,
            photoURL:photo,})
            .then(() => {
            })
            .catch(error => console.error(error))
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
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='image' type="text" placeholder="Photo url" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className='text-center text-primary mt-3'>or signin with</p><hr></hr>
                            <div className="flex justify-center gap-3 items-center mt-2">
                                <FaGoogle onClick={handleGoogleSignIn} className='text-5xl  cursor-pointer text-purple'></FaGoogle>
                            </div>
                            <hr></hr>
                            <p className='text-center mt-5'>Already have an account <Link to={'/signin'} className='ml-2 underline text-primary font-bold'>Please Log In</Link></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignIn;