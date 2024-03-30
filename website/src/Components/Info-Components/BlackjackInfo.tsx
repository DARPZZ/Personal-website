import './Info.css'
import React, { useEffect, useRef, useState } from 'react';
import { scrollToTop } from '../Scroll';
function BlackjackInfo() {
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
                <iframe width="1000" height="650"
                    src="https://www.youtube.com/embed/9xZgLO2P3XI?autoplay=1&mute=1">      
                    </iframe>
                </div>
        </div>
       </div>

    );
}

export default BlackjackInfo;