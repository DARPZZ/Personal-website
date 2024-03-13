// Projects.css
import './Projects.css';
import github from '../assets/Github.png'
import play from '../assets/play-removebg-preview.png'
interface GitHubProject {
  name: string;
  link: string;
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
            <img src={project.gameImage} alt={project.name} width={300} height={250} />
            <div className='hest'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className='github-logo'>
                  <img src={github} alt="GitHub" width={150} height={75} /> 
                </div>
              </a>
            </div>
            <div className='play-button'>
              <a href={project.playGame} target="_blank" rel="noopener noreferrer">
                <img src={play} alt="play" width={150} height={75} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  



export default SpecialGitHubProjectComponent;
