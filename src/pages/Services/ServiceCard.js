import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, img, price, title, description, duration } = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between'>
                <p>{price}$</p>
                <p>{duration} days/night</p>
                </div>
                <p>{description.slice(0,150)} .....</p>
                <div className="card-actions justify-end">
                <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;