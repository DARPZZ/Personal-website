import React from 'react';
import './Projects.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GitHubProjectComponent from './GithubProjects';
import SpecialGitHubProjectComponent from './SpecialGitHubProjectComponent';
import mineswep from '../assets/Minesweeper.png'
import snake from '../assets/Snake.png'
import Blackjack from '../assets/Blackjack.png'
import nameguide from '..//assets/Name guide.png'
import rockPaperSis from '../assets/rockpaper .png'
import højrePil from '../assets/Højrepil.png'
import venstrePil from '../assets/Venstrepil.png'
const PreviousButton = ({ className = '', onClick }) => (
  <div className='button1-div'>
  <button id='test' className={`carousel-button-one ${className}`} onClick={onClick}>
  <img src={venstrePil} width={40} height={40}/>
  </button>
  </div>
);

const NextButton = ({ className = '', onClick }) => (
  <button className={`carousel-button-two ${className}`} onClick={onClick}>
    <img src={højrePil} width={25} height={25}/>
    
  </button>
);



function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const ButtonGroup = ({ next, previous, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group">
      <div className="left-button">
        <PreviousButton className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      </div>
      <div className="right-button">
        <NextButton onClick={() => next()} />
      </div>
    </div>
  );
};


  const Minesweeper = {
    name: 'Mine sweeper',
    link: 'https://github.com/DARPZZ/Minesweeper',
    info: 'minesweeper',
    gameImage: mineswep,

  };
  
  const SnakeGame = {
    name: "Snake game",
    link: "https://github.com/DARPZZ/Snake-game",
    gameImage:snake,
  }
  const blackjack ={
    name: "Blackjack",
    link: "https://github.com/DARPZZ/Black-jack",
    info: 'blackjack',
    gameImage: Blackjack,
  }
  const nameGuide ={
    name: "Name guide",
    link: "https://github.com/DARPZZ/Baby-names",
    gameImage: nameguide

  }
  const rockPaper={
    name: "Rock paper",
    link: "https://github.com/DARPZZ/Rock-paper-scissors",
    gameImage: rockPaperSis,
    playGame: "https://darpzz.github.io/Rock-paper-scissors/"

  }


  return (
    <div className='container'>
      <div className='project-header'>
        <h2>Projects  I have made</h2>
      </div>
      <div className='caro'>
        <Carousel responsive={responsive} customButtonGroup={<ButtonGroup next={NextButton} previous={PreviousButton} />} swipeable={true} draggable={true} arrows={false}>
          <div><GitHubProjectComponent project={Minesweeper} /></div>
           <div><GitHubProjectComponent project={SnakeGame}/></div>
          <div> <GitHubProjectComponent project={blackjack}/></div>
          <div><GitHubProjectComponent project={nameGuide}/></div>
          <div><SpecialGitHubProjectComponent project={rockPaper}/></div>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
