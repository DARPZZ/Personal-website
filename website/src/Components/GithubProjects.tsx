// Projects.css
import './Projects.css';
import github from '../assets/Github.png'
interface GitHubProject {
  name: string;
  link: string;
  gameImage: string; 
  
}

import React from 'react';
import Github from '../assets/Github.png'; 

interface Props {
  project: GitHubProject;
}

const GitHubProjectComponent: React.FC<Props> = ({ project }) => {
  return (
    <div className='container'>
      <div className='card-style'>
        <div className='project-header'>
          <h2>{project.name}</h2>
        </div>
        <p>
          
            <img src={project.gameImage} alt={project.name} width={300} height={250} />
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" width={150} height={75} /> 
          </a>
        </p>
      </div>
    </div>
  );
};

export default GitHubProjectComponent;
