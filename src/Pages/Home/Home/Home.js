import React from 'react';
import About from '../About/About';
import HomeSlider from '../HomeSlider/HomeSlider';
import HomeWatch from '../HomeWatch/HomeWatch';
import ReviewContainer from '../ReviewContainer/ReviewContainer';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <HomeWatch></HomeWatch>
            <About></About>
            <ReviewContainer></ReviewContainer>
        </div>
    );
};

export default Home;