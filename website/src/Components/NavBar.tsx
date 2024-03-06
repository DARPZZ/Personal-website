import React from 'react';
import { HashRouter as Router, Link,Routes,Route } from 'react-router-dom';
import Test from './Test';
import './NavBar.css';

function NavBar() {
    return (
        <div className='container'>
            <div className='routing'>
                
                    <nav>
                        <ul>
                            <li>
                                <Link to="/tech">Technologies</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="projects">Projects</Link>
                            </li>
                        </ul>
                    </nav>
            <Routes>
          <Route path='/tech' Component={Test}/>

          
        </Routes>
            </div>
        </div>
    );
}

export default NavBar;
