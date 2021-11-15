import React from 'react';
import './About.css'
import image from '../../../Images/about.jpg'
const About = () => {
    return (
         <div id="about" className="about-container">
            <div className="w-50 col" style={{height:'400px',overflow:'hidden'}}>
                <img className="w-100" src={image} style={{objectFit:"cover"}}  alt="" />
            </div>
            <div className="w-50 p-5 text-start col col-right d-flex justify-content-center flex-column">
                <h3 style={{color:'#fff'}}>About Luxywatch.com</h3>
                <p className='text-light'><b>Behind the Luxywatch crown is a way of thinking about our place in the world and an aspiration to contribute.</b>We call this perpetual spirit. It is based on a fundamental belief in unlimited human potential, in continuous improvement and lasting excellence, in always pushing the boundaries and taking the long-term view. Our watches are built to last. So is our contribution to future generations. Discover more about our corporate commitments on Luxywatch.org</p>
                
            </div>
        </div>
    );
};

export default About;