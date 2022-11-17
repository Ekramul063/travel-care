import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Gallery = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://travel-care-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className='pb-24 px-7 mx-auto'>
            <h1 className='text-center font-bold text-3xl pb-7 text-green-700'>Gallery</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {
                    services?.map(service => <div key={service._id}>

                        <PhotoProvider >
                            <PhotoView src={service.img}>
                               <img style={{ height: '180px' }} src={service.img} alt="img" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>)
                }
                <div>
                    <img src="" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Gallery;