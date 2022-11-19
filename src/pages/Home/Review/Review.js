import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { useState } from 'react';
import { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Review.css'

const Review = () => {


    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('https://travel-care-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])
    const options = {

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    };


    return (
        <div>
            <div className="bg_img flex items-center ">
                <div className='slider_container  py-6 px-3'>
                    <OwlCarousel className='owl-theme'{...options} loop margin={10} nav>

                        {
                            reviews.map(review => <div key={review._id} className='item '>


                                <div className="flex flex-col items-center mb-3 pt-2">
                                    <img style={{ height: '35px', width: '35px', borderRadius: '100%' }} src={review?.img} alt="" />
                                    <h1 className='font-bold  mt-2'> {review?.email}</h1>
                                </div>

                                <p className='text-center'>{review?.description}</p>

                            </div>)
                        }


                    </OwlCarousel>

                </div>

            </div>




        </div>
    );
};

export default Review;