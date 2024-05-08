import { HashRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import Home from './home';
import './NavBar.css';
import './home.css'
import { useState, useEffect } from 'react';
import ham from '../assets/WhiteHamburgerIcon.png'
import MinesweeperInfo from './Info-Components/MinesweeperInfo';
import BlackjackInfo from './Info-Components/BlackjackInfo';
import SnakeInfo from './Info-Components/SnakeInfo';
import NNTPInfo from './Info-Components/NNTPInfo'
import EasyBabyNamesInfo from './Info-Components/EasyBabyNamesInfo'
import DiscordBotInfo from './Info-Components/DiscordBotInfo';
import RockPaperInfo from './Info-Components/RockPaperInfo';
import { HashLink as BaseHashLink } from 'react-router-hash-link';
import SensorInfo from './Info-Components/SensorInfo';
import {scrollToTop} from './Scroll'
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
  
    const location = useLocation();
    const gamePaths = ['/MineSweeperInfo', '/BlackjackInfo', '/RockPaperScissorsInfo', '/SnakeInfo'];
    const isGameInfo = gamePaths.includes(location.pathname);
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
    const closeMenu = () => {
      setIsOpen(false);
    };
    
    useEffect(() => {
      if (isGameInfo) {
        document.body.classList.add('game-info');
      } else {
        document.body.classList.remove('game-info');
      }
    }, [isGameInfo]);
    
    return (
        <>
        <div className='container'>
            <div className={`routing ${isGameInfo ? 'game-info' : ''}`}>
              <div className='routing'>
                <div className={`sticky-nav ${isGameInfo ? 'game-info' : ''} sticky-nav ${isOpen ? 'open' : ''}` }>
                  <button className="nav-toggle" onClick={toggleMenu} aria-label="toggle navigation">
                  <img id='nav-toggle-button' src={ham} alt=""width={20} height={20}/>
                    <span className="hamburger"></span>
                  </button>
                  <nav>
                    <div className="animation start-home"></div>
                    <ul>
                      <li>
                        <Link to="/" onClick={() => {scrollToTop("smooth"); closeMenu();}}>Home</Link>
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
                </div>
              </div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/MineSweeperInfo' element={<MinesweeperInfo />}/>
                <Route path='/BlackjackInfo' element={<BlackjackInfo />}/>
                <Route path='/SnakeInfo' element={<SnakeInfo />}/>
                <Route path='/NNTPInfo' element={<NNTPInfo/>}/>
                <Route path='/EasybabyNames' element={<EasyBabyNamesInfo/>}/>
                <Route path='/RockPaperInfo' element={<RockPaperInfo/>} />
                <Route path='/SensorInfo' element={<SensorInfo/>}/>
                <Route path='/discordInfo' element={<DiscordBotInfo/>}/>
              </Routes>
            </div>
        </>
      );
    }
    
export default NavBar;
