// WorkList.js
import React, { useState } from 'react';
import VideoJS from './Videojs' 
import videojs from 'video.js';


function WorkList({ works, selectedWork, onSelectWork }) {
    // function onSelectWork(url){
    //     console.log(url)
    // }
    const [selectedVideoUrl, setSelectedVideoUrl] = useState(null); 
    const handleItemClick = (videoUrl) => { setSelectedVideoUrl(videoUrl); };

    const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    sources: selectedVideoUrl ? [ { src: selectedVideoUrl, type: 'video/mp4', }, ] : [],
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
        <ul className="work-list">
        {works.map((work, index) => (
            <li
            key={index}
            className={selectedWork === index ? 'selected' : ''}
            onClick={() => handleItemClick(work.url)}
            
            //   onMouseEnter={() => onSelectWork(index)}
            //   onMouseLeave={() => onSelectWork(null)}
            >
            {work.name}
            </li>
        ))}
        </ul>

        {selectedVideoUrl && 
        ( <div> 
            <h3>Video Player</h3> 
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

        </div> )}
    </div>

  );
}


export default WorkList;
