import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Home from './home';
import './NavBar.css';

function NavBar() {
    return (
        <>
            <div className='container'>
                <div className='routing'>
                    <nav>
                        <ul>
                            <li>
                                <HashLink smooth to="/#tech">Technologies</HashLink>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <HashLink smooth to="/#about">About</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#contact">Contact</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#projects">Projects</HashLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </div>
            </div>
            <div className='navbar-placeholder'></div>
        </>
    );
}

export default NavBar;
