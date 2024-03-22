import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Technologies.css';
import Csharp from '../assets/CSharp.png'
import Java from '../assets/java.png';
import docker from '../assets/Docker.png';
import python from '../assets/Python.png';
import github from '../assets/Github.png';
import sql from '../assets/sql-removebg-preview.png'
import mongoDB from '../assets/mongodb-removebg-preview.png'
import cassandra from  '../assets/cassandra-removebg-preview.png'
import react from '../assets/react-removebg-preview.png';

function Technologies() {
    const logosRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    function chooseSpeed(speed:number){
        const tl = gsap.timeline({repeat: -1 });
        tl.fromTo(logosRef.current, {
            x: logosRef.current.offsetWidth,
        }, {
            x: -logosRef.current.scrollWidth,
            duration: (logosRef.current.scrollWidth + logosRef.current.offsetWidth) / (window.innerWidth/speed),
            ease: "linear"
        });
    }
    function normalSpeed()
    {
        chooseSpeed(10)
    }
    function mobileSpeed()
    {
        chooseSpeed(3)
    }
    useEffect(() => {
        if (window.innerWidth < 400) {
             mobileSpeed();
        } else {
             normalSpeed();
        }
     }, [screenWidth, window.innerWidth]); 
     

    return (
        <div className='container'>
            <div className='technologies'>
                <div className='header'>
                    <h2>Tech I have been working with</h2>
                </div>
                <div className='logos' ref={logosRef}>
                    <div className='logo-slide'>
                        {technologies.map((tech, index) => (
                            <div key={index}>
                                <img
                                    src={tech.image}
                                    alt={tech.name}
                                />
                                <p id='tech-name'>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const technologies = [
    { name: 'C#', image: Csharp },
    { name: 'Java', image: Java },
    { name: 'Python', image: python },
    { name: 'Docker', image: docker },
    { name: 'Github', image: github },
    { name: 'SQL', image: sql },
    { name: 'MongoDB', image: mongoDB},
    { name: 'Cassandra', image: cassandra},
    { name: 'React', image: react}
];

export default Technologies;
