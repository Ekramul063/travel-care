import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomePageServiesCard from './HomePageServiesCard';

const HomePageServies = () => {
    const [services,setServices]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/home/services')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div className='pt-10 pb-16 px-7 mx-auto'>
            <h1 className='text-center font-bold text-3xl pb-7 text-green-700'>Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                services?.map(service => <HomePageServiesCard key={service._id} service={service}></HomePageServiesCard> )
            }
           
        </div>
        <Link to={'/services'}><button className='btn btn-primary block mx-auto my-7'>See All Services</button></Link>
            
        </div>
    );
};

export default HomePageServies;