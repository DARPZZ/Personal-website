import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './home';
import './NavBar.css';
import './home.css'
import { HashLink as BaseHashLink } from 'react-router-hash-link';

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
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div className='container'>
                <div className='routing'>
                    <div className='sticky-nav'>
                    <nav>
                    <div className="animation"></div>
                        <ul>
                            <li>
                                <Link to="/" onClick={scrollToTop}>Home</Link>
                            </li>
                            <li>
                                <HashLink smooth to="/#about">About</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#tech">Technologies</HashLink>
                            </li>
                            
                            <li>
                                <HashLink smooth to="/#projects">Projects</HashLink>
                            </li>   
                           
                          
                            <li>
                                <HashLink smooth to="/#contact">Contact</HashLink>
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
