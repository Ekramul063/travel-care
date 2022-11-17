import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import banner1 from '../../../asets/banner1.jpg';
import banner2 from '../../../asets/banner2.jpg';
import banner3 from '../../../asets/banner3.jpg';
import quotes from '../../../asets/quotes/quotes.jpg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Review.css'

const Review = () => {
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
            <div className="">
               

                <div className='col-span-2'>
                    <OwlCarousel className='owl-theme'{...options} loop margin={10} nav>
                        <div className='item '>
                            <div>
                                <img className='banner' src={banner3} alt="" />
                            </div>
                            
                        </div>
                        <div className='item '>
                            <div>
                                <img className='banner' src={banner2} alt="" />
                            </div>
                            
                        </div>
                       

                    </OwlCarousel>


                </div>

            </div>




        </div>
    );
};

export default Review;