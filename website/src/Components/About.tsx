import React from 'react';
import pic from '../assets/download.jpg'
import './About.css'
import personBillede from '../assets/Person billede.jpg'
function About() {
    return (
        <div className='about'>
            <div className='picture'>
                <img id='person-billede' src={personBillede} />
            </div>
            <div className='text'>
                <h2>Welcome to my website</h2>
                <p>I am an ambitious computer science student at EASV, seeking an internship focusing on both frontend and backend development.</p>
                <p>My education has equipped me with a solid understanding of programming languages, databases, and system development.</p>
                <p>I am driven by a constant curiosity and a passion for diving into complex technologies and solving problems.</p>
                <p>Throughout my education, I have developed many different things.</p>
            </div>
        </div>
    );
}

export default About;
