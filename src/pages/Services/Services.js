import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className="px-7 mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 pb-24'>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard> )
            }
        </div>
        </div>
    );
};

export default Services;