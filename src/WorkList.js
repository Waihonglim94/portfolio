// WorkList.js
import React, { useState } from 'react';
import VideoJS from './Videojs' 
import videojs from 'video.js';
import YouTube from 'react-youtube';


const VideoPlayer = React.memo(({ video }) => {
  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    sources: video ? [ { src: video.url, type: 'video/mp4', }, ] : [],
  };
  const playerRef = React.useRef(null);

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
    video?
      (video.isYoutube ? 
        <YouTube videoId={video.url} autoplay={true}/>
       : 
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>
      ):
      <></>
    
  );
});

function WorkList({ works, selectedWork, onSelectWork }) {

    const [selectedVideo, setSelectedVideo] = useState(null); 
    const [hoveredWork, setHoveredWork] = useState(null);

    const handleItemClick = (work, index) => {
      setSelectedVideo(work);
      setHoveredWork(index); // Set hovered item when clicked
    };
  
    const handleMouseEnter = (index) => {
        setHoveredWork(index)
    };
  
    const handleMouseLeave = () => {
      setHoveredWork(null); // Clear hovered item on mouse leave
    };

  return (
    <div className='container'>
      <div className='list-container'>
        <header className="Title-header">OnePlus 2019-2021</header>
        <ul className="custom-list" id="oneplus project">
        {works.map((work, index) => ( (work.company ==="Oneplus" ) ?
          <li
            key={index}
            className={`work-item ${selectedWork === index ? 'selected' : ''} ${
              hoveredWork === index ? 'hovered' : ''
            }`}
            onClick={() => handleItemClick(work, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="work-info">
            {hoveredWork === index && (
              <div className="year-popup">{work.year}</div>
            )}
              {work.name}
            </div>
          </li> : <></>
        ))}
      </ul>

      <header className="Title-header">Nothing 2021-now</header>
      {console.log("page_updated")}
        <ul className="custom-list" id="nothing project">
          {works.map((work, index) => ( (work.company ==="Nothing" ) ?
            <li
              key={index}
              className={`work-item ${selectedWork === index ? 'selected' : ''} ${
                hoveredWork === index ? 'hovered' : ''
              }`}
              onClick={() => handleItemClick(work, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="work-info">
              {hoveredWork === index && (
                <div className="year-popup">{work.year}</div>
              )}
                {work.name}
              </div>
            </li> : <></>
          ))}
        </ul>
      </div>

      <div className="video-container"> 
        <VideoPlayer video={selectedVideo}/>
      </div> 
    </div>

  );
}

//trying to get credential test test test
export default WorkList;