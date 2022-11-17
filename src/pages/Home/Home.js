import React from 'react';
import Services from '../Services/Services';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import HomePageServies from './HomePageServies/HomePageServies';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomePageServies></HomePageServies>
            <Gallery></Gallery>
            <Review></Review>
            
        </div>
    );
};

export default Home;