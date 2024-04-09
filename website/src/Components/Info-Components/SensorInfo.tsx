import { scrollToTop } from "../Scroll";
import YouTubeVideo from './YouTubeVideo';
import Severbillede from '../../assets/Server.png'
function SensorInfo() {
    scrollToTop()
    return (
        <div className='con'>
            <div className='things-learned'>
                <h1>Things that i have learned in this project</h1>
                    <div>
                    <h2>Makeing UI in python </h2>
                    <h2>Get a small engine to turn</h2>
                    <h2>Read data from websocket</h2>
                    <h2>Send data to a web socket</h2>
                    <h2>Get the distance to a  object with ultrasonic sensor</h2>
                    </div>
                    <div className='info-picture'>
                        <YouTubeVideo videoId={'mQEmvks-Yds'}></YouTubeVideo>
                    </div>
                <div className="ekstra-info">
                    <h1>The websocket server looks like this</h1>
                    <img id="server-billede" src={Severbillede}/>
                <div className="ekstra-link">
                    <a id="radar-sensor-link-color" href="https://github.com/DARPZZ/Radar-sensor" target="_blank" rel="noopener noreferrer" >
                        To see the code for sensor and engine click here
                    </a>
                </div>
                </div>
            </div>
       </div>
    );
}

export default SensorInfo;