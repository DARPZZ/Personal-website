import './Info.css'
import React, { useEffect, useRef, useState } from 'react';
import { scrollToTop } from '../Scroll';
import YouTubeVideo from './YouTubeVideo';
function DiscordBotInfo() {
    scrollToTop()
    return (
       <div className='con'>
        <div className='things-learned'>
            <h1>Things that i have learned in this project</h1>
                <div>
                    <h2>Python</h2>
                   <h2>Webscraping in python</h2>
                   <h2>Working with discord.py</h2>
                   <h2>Converting to/from diffrent time zones</h2>
                </div>
                
                <div className='info-picture'>
                    <br />
                    <br />
                    <h2>If you would like to join my sports server you can join here </h2>
                <a href="https://discord.gg/CVbbFcDp4J">
                    <h3>https://discord.gg/CVbbFcDp4J</h3>
                    </a>
                </div>
        </div>
       </div>

    );
}

export default DiscordBotInfo;