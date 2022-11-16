import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const ServiceDetails = () => {
    const service = useLoaderData();
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
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eius?</h1>

                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;