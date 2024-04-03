import { scrollToTop } from "../Scroll";
import './Info.css'
import YouTubeVideo from './YouTubeVideo';
function EasyBabyNamesInfo() {
    scrollToTop()
    return (
        <div className='con'>
        <div className='things-learned'>
            <h1>Things that i have learned in this project</h1>
                <div>
                   <h2>Working with css</h2>
                   <h2>working with html</h2>
                   <h2>working with react</h2>
                   <h2>Building my own webscraber</h2>
                   <h2>Working with typescript </h2>
                </div>
                <div className='info-picture'>
                    <YouTubeVideo videoId={'xEMd6BL3_5E'}></YouTubeVideo>
                </div>
        </div>
       </div>
    );
}

export default EasyBabyNamesInfo;