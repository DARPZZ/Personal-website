
import React from 'react';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import './home.css'
import NavBar from "./NavBar"
function Home() {
    return (
        <div className='container'>
            
            <div id='about' className='about'>
                <About></About>
            </div>
            <div id='tech' className='tech'>
                <Technologies></Technologies>
            </div>
            <div id='projects' className='proc'>
                <Projects></Projects>
            </div>
            
        </div>
        
    );
}

export default Home;
