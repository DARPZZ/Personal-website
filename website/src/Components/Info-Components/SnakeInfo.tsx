import { scrollToTop } from "../Scroll";
import './Info.css'
import YouTubeVideo from './YouTubeVideo';
function SnakeInfo() {
    scrollToTop()
    return (
        <div className='con'>
        <div className='things-learned'>
            <h1>Things that i have learned in this project</h1>
                <div>
                    <h2>SDLC</h2>
                    <h2>Makeing grid</h2>
                    <h2>Crud support</h2>
                    <h2>User interface</h2>
                    <h2>Database connection</h2>
                    <h2>Draw shapes on canvas</h2>
                    <h2>Makeing software that you can easily maintain</h2>
                    <h2>Handle new requirements half way through the project</h2>
                </div>
                <div className='info-picture'>
                <YouTubeVideo videoId={'dIuudb07AI0'}></YouTubeVideo>
                </div>
        </div>
       </div>
    );
}

export default SnakeInfo;