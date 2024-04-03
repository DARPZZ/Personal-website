import React from 'react';

const YouTubeVideo = ({ videoId }) => (
    <iframe 
      width="1000" 
      height="650"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} 
      title="YouTube Video Player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      >
    </iframe>
);

export default YouTubeVideo;
