import { scrollToTop } from "../Scroll";
import YouTubeVideo from './YouTubeVideo';
function RockPaperInfo() {
    scrollToTop()
    return (
        <div className='con'>
        <div className='things-learned'>
            <h1>Things that i have learned in this project</h1>
                <div>
                   <h2></h2>
                </div>
                <div className='pciture'>
                        <YouTubeVideo videoId={'sii5du87a_Q'}></YouTubeVideo>
                </div>
        </div>
       </div>
    );
}

export default RockPaperInfo;