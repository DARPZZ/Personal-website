import React from 'react';
import './Projects.css';
import {LinkToPage} from './LinkToInfoPage'
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
interface Props {
  project: GitHubProject;
}

const GitHubProjectComponent: React.FC<Props> = ({ project }) => {
  return (
    <div className='container'>
      <div className='card-style'>
        <div className='project-name'>
          <h2>{project.name}</h2>
        </div>
        <div>
          <img className='gmae-img' src={project.gameImage} alt={project.name} onClick={() => LinkToPage(project)} />
          <div className='decide-a'>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className='github-logo'>
                <img id='github-logo-size' src={github} alt="GitHub" /> 
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GitHubProjectComponent;
