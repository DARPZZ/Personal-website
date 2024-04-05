const YouTubeVideo = ({ videoId }) => (
    <iframe 
      id="ifframe"
      width="100%" 
      height="650px"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1`} 
      title="YouTube Video Player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      >
    </iframe>
);

export default YouTubeVideo;
