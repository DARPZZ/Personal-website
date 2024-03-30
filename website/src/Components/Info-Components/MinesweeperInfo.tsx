import './Info.css'
import React, { useEffect, useRef, useState } from 'react';
import { scrollToTop } from '../Scroll';
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
                <div className='pciture'>
                <iframe width="700" height="500"
                    src="https://www.youtube.com/embed/cn81ERY_OZI?autoplay=0&mute=1">      
                    </iframe>
                </div>
        </div>
       </div>

    );
}

export default MinesweeperInfo;
