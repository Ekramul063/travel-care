import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import banner1 from '../../../asets/banner1.jpg';
import quotes from '../../../asets/quotes/quotes.jpg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Header.css'

const Header = () => {
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
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div>

                    <div className='none'>
                        <img className='banner' src={quotes} alt="" />
                    </div>

                </div>

                <div className='col-span-2'>
                    <OwlCarousel className='owl-theme'{...options} loop margin={10} nav>
                        <div className='item '>
                            <div>
                                <img className='banner' src={banner1} alt="" />
                            </div>
                        </div>
                        <div className='item'>
                            <h4>2</h4>
                        </div>
                        <div className='item'>
                            <h4>3</h4>
                        </div>

                    </OwlCarousel>


                </div>

            </div>




        </div>
    );
};

export default Header;