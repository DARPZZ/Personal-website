import './Info.css'
import React, { useEffect, useRef, useState } from 'react';
import { scrollToTop } from '../Scroll';
import YouTubeVideo from './YouTubeVideo';
function BlackjackInfo() {
    scrollToTop()
    return (
       <div className='con'>
        <div className='things-learned'>
            <h1>Things that i have learned in this project</h1>
                <div>
                    <h2>User interface</h2>
                    <h2>Setting cards based of value</h2>
                   <h2>Game Condition(win and loose)</h2>
                   <h2>drawing on diffrent canvas depending on the player</h2>
                </div>
                <div className='pciture'>
                    <YouTubeVideo videoId={'9xZgLO2P3XI'}></YouTubeVideo>
                </div>
        </div>
       </div>

    );
}

export default BlackjackInfo;