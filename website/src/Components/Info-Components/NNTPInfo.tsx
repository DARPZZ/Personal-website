import { scrollToTop } from "../Scroll";
import YouTubeVideo from './YouTubeVideo';
function NNTPInfo() {
    scrollToTop()
    return (
        <div className='con'>
        <div className='things-learned'>
            <h1>Things that i have learned in this project</h1>
                <div>
                   
                </div>
                <div className='pciture'>
                        <YouTubeVideo videoId={'CREmYAl5hGQ'}></YouTubeVideo>
                </div>
        </div>
       </div>
    );
}

export default NNTPInfo;