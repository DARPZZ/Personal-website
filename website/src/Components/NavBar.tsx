import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './home';
import './NavBar.css';
import './home.css'
import { HashLink as BaseHashLink } from 'react-router-hash-link';
import { useState } from 'react';

const HashLink = (props) => {
  const { to, ...rest } = props;
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY - 100;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <BaseHashLink
      {...rest}
      to={to}
      scroll={(el) => scrollTo(el.id)}
    />
  );
};

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    
    const closeMenu = () => {
        
      setIsOpen(false);
    };
    
    return (
        <>
          <div className='container'>
            <div className='routing'>
              <div className={`sticky-nav ${isOpen ? 'open' : ''}`}>
                <button className="nav-toggle" onClick={toggleMenu} aria-label="toggle navigation">
                  <span className="hamburger"></span>
                </button>
                <nav>
                  <div className="animation start-home"></div>
                  <ul>
                    <li>
                      <Link to="/" onClick={() => {scrollToTop(); closeMenu();}}>Home</Link>
                    </li>
                    <li>
                      <HashLink smooth to="/#about" onClick={() => {closeMenu();}}>About</HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#tech" onClick={() => {closeMenu();}}>Technologies</HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#projects" onClick={() => {closeMenu();}}>Projects</HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#contact" onClick={() => {closeMenu();}}>Contact</HashLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </div>
          </div>
        </>
      );
    }
    
    export default NavBar;
