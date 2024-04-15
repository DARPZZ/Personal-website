import './Info.css'
import React, { useEffect, useRef, useState } from 'react';
import { scrollToTop } from '../Scroll';
import YouTubeVideo from './YouTubeVideo';
function MinesweeperInfo() {
    scrollToTop()
    return (
       <div className='con'>
        <div className='things-learned'>
            <h1>Things that i have learned in this project</h1>
                <div>
                    <h2>SDLC</h2>
                    <h2>User interface</h2>
                    <h2>Recursion in c#</h2>
                    <h2>Playing music in c#</h2>
                    <h2>Worked with share.cs</h2>
                    <h2>Game Condition(win and loose)</h2>
                </div>
                <div className='info-picture'>
                    <YouTubeVideo videoId={'cn81ERY_OZI'}></YouTubeVideo>
                </div>
        </div>
       </div>

    );
}

export default MinesweeperInfo;
