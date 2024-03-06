import React from 'react';
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
    return (
        <div className='container'>
            <div className='technologies'>
                <div className='header'>
                    <h2>Tech I have been working with</h2>
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
    { name: 'SQL', image: sql },
    { name: 'MongoDB', image: mongoDB},
    { name: 'Cassandra', image: cassandra},
    { name: 'React', image: react}
];

export default Technologies;
