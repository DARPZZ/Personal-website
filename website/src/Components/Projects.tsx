import React from 'react';
import './Projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import GitHubProjectComponent from './GithubProjects';
import SpecialGitHubProjectComponent from './SpecialGitHubProjectComponent';
import mineswep from '../assets/Minesweeper.png';
import snake from '../assets/Snake.png';
import blackjack from '../assets/Blackjack.png';
import nameguide from '..//assets/Name guide.png';
import rockPaperSis from '../assets/rockpaper .png';
import højrePil from '../assets/Højrepil.png';
import venstrePil from '../assets/Venstrepil.png';
import NNTPBillede from '../assets/NNTP server.png'
import SensorBillede from '../assets/Sensor.png'
import { link } from 'fs';
import { info } from 'console';

//#region Buttons
const PreviousButton = ({ onClick }: { onClick: any }) => (
  <div className='button1-div'>
    <button id='test' className='carousel-button-one' onClick={onClick}>
      <img src={venstrePil} width={60} height={60} alt='Previous' />
    </button>
  </div>
);

const NextButton = ({ onClick }: { onClick: any }) => (
  <div className='button2-div'>
    <button className='carousel-button-two' onClick={onClick}>
      <img src={højrePil} width={40} height={40} alt='Next' />
    </button>
  </div>
);
//#endregion

const Projects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PreviousButton onClick={() => {}} />,
    nextArrow: <NextButton onClick={() => {}} />,
    autoplay: true,
    autoplaySpeed: 1500, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

//#region  projects
  const Minesweeper = {
    name: 'Mine sweeper',
    link: 'https://github.com/DARPZZ/Minesweeper',
    info: 'minesweeper',
    gameImage: mineswep,
  };

  const SnakeGame = {
    name: 'Snake game',
    link: 'https://github.com/DARPZZ/Snake-game',
    info: 'snake',
    gameImage: snake,
  };
  const Sensor = {
    name: 'Sensor',
    link: 'https://github.com/DARPZZ/radar-graph',
    info: 'sensor',
    gameImage: SensorBillede, 
  };

  const Blackjack = {
    name: 'Blackjack',
    link: 'https://github.com/DARPZZ/Blackjack-real',
    info: 'blackjack',
    gameImage: blackjack,
  };

  const nameGuide = {
    name: 'Name guide',
    link: 'https://github.com/DARPZZ/Baby-names',
    info: 'nameGuide',
    gameImage: nameguide,
  };

  const rockPaper = {
    name: 'Rock paper',
    link: 'https://github.com/DARPZZ/Rock-paper-scissors',
    info: 'rockPaper',
    gameImage: rockPaperSis,
    playGame: 'https://darpzz.github.io/Rock-paper-scissors/',
  };
  const NNTP = {
    name: 'NNTP',
    link: 'https://github.com/DARPZZ/Sunsite-3',
    info: 'NNTP',
    gameImage: NNTPBillede,
  };
  //#endregion

  return (
    <div className='container'>
      <div className='project-header'>
        <h2>Projects I have made</h2>
        <p id='learned'>click on a picture to see video and what i have learned</p>
      </div>
      <div className='caro'>
        <Slider {...settings}>
          <div><GitHubProjectComponent project={Minesweeper} /></div>
          <div><GitHubProjectComponent project={SnakeGame} /></div>
          <div><GitHubProjectComponent project={Blackjack} /></div>
          <div><GitHubProjectComponent project={nameGuide} /></div>
          <div><GitHubProjectComponent project={NNTP} /></div>
          <div><SpecialGitHubProjectComponent project={rockPaper} /></div>
          <div><GitHubProjectComponent project={Sensor} /></div>
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
