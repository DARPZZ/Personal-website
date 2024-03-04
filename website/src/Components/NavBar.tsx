import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar() {
    return (
        <div className='container'>
            <div className='routing'>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/Personal-website/tech"}>Technologies</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Personal-website/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to={"/Personal-website/projects"}>Projects</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
