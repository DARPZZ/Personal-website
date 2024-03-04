import React from 'react';
import pic from '../assets/download.jpg'
import './About.css'
function About() {
    return (
      
        <div className='about'>
            <div className='picture'>
            <img src={pic} alt="" />
            </div>
            <div className='text'>
                <h2>Welcome to my website</h2>
                <p>Information about me here</p>
            </div>
        </div>
    );
}

export default About;
