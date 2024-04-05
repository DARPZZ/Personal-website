// Projects.css
import './Projects.css';
import github from '../assets/Github.png'
import play from '../assets/play-removebg-preview.png'
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

function linkingToInfoPage(project:GitHubProject)
{
  if(project.info ==='rockPaper'){
    window.location.hash = '/RockPaperInfo'
  }
}
const SpecialGitHubProjectComponent: React.FC<Props> = ({ project }) => {
    return (
      <div className='container'>
        <div className='card-style'>
          <div className='project-name'>
            <h2>{project.name}</h2>
          </div>
          <div>
            <img src={project.gameImage} alt={project.name} className='gmae-img' onClick={() => linkingToInfoPage(project)} />
            <div className='hest'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className='github-logo2'>
                  <img src={github} alt="GitHub" width={150} height={75} /> 
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
