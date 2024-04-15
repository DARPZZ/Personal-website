import { scrollToTop } from "../Scroll";
import YouTubeVideo from './YouTubeVideo';
function NNTPInfo() {
    scrollToTop()
    return (
        <div className='con'>
        <div className='things-learned'>
            <h1>Things that i have learned in this project</h1>
                <div>
                    <h2>multithreading in c#</h2>
                    <h2>Network Communication</h2>
                    <h2>Understanding NNTP Protocol</h2>
                    <h2>Worked with .INI file</h2>
                </div>
                <div className='info-picture'>
                    <YouTubeVideo videoId={'CREmYAl5hGQ'}></YouTubeVideo>
                </div>
        </div>
       </div>
    );
}

export default NNTPInfo;