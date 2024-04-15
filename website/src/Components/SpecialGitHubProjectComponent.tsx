// Projects.css
import './Projects.css';
import github from '../assets/Github.png'
import play from '../assets/play-removebg-preview.png'
import {LinkToPage} from './LinkToInfoPage'
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

const SpecialGitHubProjectComponent: React.FC<Props> = ({ project }) => {
    return (
      <div className='container'>
        <div className='card-style'>
          <div className='project-name'>
            <h2>{project.name}</h2>
          </div>
          <div>
            <img src={project.gameImage} alt={project.name} className='gmae-img' onClick={() => LinkToPage(project)} />
            <div className='project-link-css'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className='github-logo2'>
                  <img id='github-logo-size' src={github} alt="GitHub" /> 
                </div>
              </a>
            </div>
            <div className='play-button'>
              <a href={project.playGame} target="_blank" rel="noopener noreferrer">
                <img id='play' src={play} alt="play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SpecialGitHubProjectComponent;
