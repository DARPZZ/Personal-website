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


  const Minesweeper = {
    name: 'Mine sweeper',
    link: 'https://github.com/DARPZZ/Minesweeper',
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
        <Carousel responsive={responsive} swipeable={true} draggable={true} arrows={true}>
          <GitHubProjectComponent project={Minesweeper} />
          <GitHubProjectComponent project={SnakeGame}/>
          <GitHubProjectComponent project={blackjack}/>
          <GitHubProjectComponent project={nameGuide}/>
          <SpecialGitHubProjectComponent project={rockPaper}/>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
