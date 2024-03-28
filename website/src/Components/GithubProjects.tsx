// Projects.css
import './Projects.css';
import github from '../assets/Github.png'
import play from '../assets/play.png'
interface GitHubProject {
  name: string;
  link: string;
  info?: string;
  gameImage: string; 
  gamelink? : string;
  playGame? : string
}

import React from 'react';
import Github from '../assets/Github.png'; 

interface Props {
  project: GitHubProject;
}

function linkingToInfoPage(project:GitHubProject)
{
  if(project.info === 'minesweeper')
  {
    window.location.hash ='/#MineSweeperInfo'
  }else if (project.info === 'blackjack')
  {
    window.location.hash ='/#BlackjackInfo'
  }
}
const GitHubProjectComponent: React.FC<Props> = ({ project }) => {
  return (
    <div className='container'>
      <div className='card-style'>
        <div className='project-name'>
          <h2>{project.name}</h2>
        </div>
        <div>
          <img className='gmae-img' src={project.gameImage} alt={project.name} onClick={() => linkingToInfoPage(project)} />
          <div className='decide-a'>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className='github-logo'>
                <img src={github} alt="GitHub" width={150} height={75} /> 
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



export default GitHubProjectComponent;
