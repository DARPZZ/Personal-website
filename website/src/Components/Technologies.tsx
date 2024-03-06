import React from 'react';
import './Technologies.css';
import Csharp from '../assets/CSharp.png'
import Java from '../assets/java.png';
import docker from '../assets/Docker.png';
import python from '../assets/Python.png';
import github from '../assets/Github.png';

function Technologies() {
    return (
        <div className='container'>
            <div className='technologies'>
                <div className='header'>
                    <p>Tech I have been working with</p>
                </div>
                <div className='logos'>
                    <div className='logo-slide'>
                        {technologies.map((tech, index) => (
                            <img
                                key={index}
                                src={tech.image}
                                alt={tech.name}
                            />
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
    { name: 'python', image: python },
    { name: 'Docker', image: docker },
    { name: 'github', image: github },
];

export default Technologies;
