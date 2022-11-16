import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ServiceDetails = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user);

    const MySwal = withReactContent(Swal);

    const handleAddReview = event =>{
        event.preventDefault();
        if(!user?.uid){
            return  MySwal.fire({
                title: <strong>Please SignIn!</strong>,
                icon: 'warning'
              })
        }
        const form = event.target;
        const email =user?.email;
        const img = user?.photoURL;
        const serviceId = service._id;
        const serviceTitle = form.title.value;
        const description = form.description.value;
        const review ={
            serviceId,serviceTitle,description,email,img

        }

        fetch('http://localhost:5000/reviews',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
           if(data.acknowledged){
            MySwal.fire({
                title: <strong>Review Added Successfully!</strong>,
                icon: 'success'
              })
            form.reset()
           }
        })
    }
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-7 pt-10 pb-24">
                <div>
                    <div className="card card-compact w-fll bg-base-100 shadow-xl">
                        <figure><img src={service?.img} alt="img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service?.title}</h2>
                            <div className='flex justify-between'>
                                <p>{service?.price}$</p>
                                <p>{service?.duration} days/night</p>
                            </div>
                            <p>{service?.description}</p>
                            <div className="card-actions justify-end">
                                <Link><button className="btn btn-primary">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                <div className="hero min-h-screen bg-base-200">
                <div className=" w-full px-10 mx-auto flex-col my-16">

                    <form onSubmit={handleAddReview} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Title</span>
                                </label>
                                <input name='title' value={service?.title} type="text" placeholder="Service Title" className="input input-bordered" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Write review</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered" placeholder="Service Description"></textarea>

                            </div>



                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add Review</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                    

                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;