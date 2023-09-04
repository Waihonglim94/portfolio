// WorkList.js
import React, { useState } from 'react';
import VideoJS from './Videojs' 
import videojs from 'video.js';
import YouTube from 'react-youtube';


function WorkList({ works, selectedWork, onSelectWork }) {
    // function onSelectWork(url){
    //     console.log(url)
    // }
    const [selectedVideo, setSelectedVideo] = useState(null); 
    const [hoveredWork, setHoveredWork] = useState(null);

    const playerRef = React.useRef(null);

    const handleItemClick = (work, index) => {
      setSelectedVideo(work);
      setHoveredWork(index); // Set hovered item when clicked
    };
  
    const handleMouseEnter = (index) => {
      setHoveredWork(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredWork(null); // Clear hovered item on mouse leave
    };

  const isLocalVideo = true; // Set this to true for local video or false for YouTube video
  const youtubeVideoId = "https://www.youtube.com/watch?v=h6oGqvoWIks&ab_channel=OnePlus";
  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    sources: selectedVideo ? [ { src: selectedVideo.url, type: 'video/mp4', }, ] : [],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <div>
        {/* <ul class="custom-list" className="work-list"> */}
        <ul class="custom-list">
        {works.map((work, index) => (
          <li
            key={index}
            className={`work-item ${selectedWork === index ? 'selected' : ''} ${
              hoveredWork === index ? 'hovered' : ''
            }`}
            onClick={() => handleItemClick(work.url, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {work.name}
            {hoveredWork === index && (
              <div className="year-popup">{work.year}</div>
            )}
          </li>
        ))}
      </ul>


        {selectedVideo && 
        ( <div> 
            {console.log(selectedVideo.isYoutube)}
            {selectedVideo.isYoutube ? (
              <YouTube videoId={youtubeVideoId} />
            ) : (
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            )}

        </div> )}
    </div>

  );
}

//trying to get credential test test test
export default WorkList;