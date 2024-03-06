import React from 'react';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import './home.css'
function Home() {
    return (
        <div className='container'>
            <div className='about'>
                <About></About>
            </div>
            <div className='tech'>
                <Technologies></Technologies>
            </div>
            <div className='proc'>
                <Projects></Projects>
            </div>
            
        </div>
        
    );
}

export default Home;
