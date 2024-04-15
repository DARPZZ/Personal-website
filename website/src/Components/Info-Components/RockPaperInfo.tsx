import { scrollToTop } from "../Scroll";
import YouTubeVideo from './YouTubeVideo';
function RockPaperInfo() {
    scrollToTop()
    return (
        <div className='con'>
        <div className='things-learned'>
            <h1>Things that i have learned in this project</h1>
                <div>
                    <h2>CSS</h2>
                    <h2>HTML</h2>
                    <h2>Typescript</h2>
                    <h2>Create UI on the web</h2>
                    
                </div>
                <div className='info-picture'>
                    <YouTubeVideo videoId={'sii5du87a_Q'}></YouTubeVideo>
                </div>
        </div>
       </div>
    );
}

export default RockPaperInfo;