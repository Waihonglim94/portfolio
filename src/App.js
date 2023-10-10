// import logo from './logo.svg';
import './App.css';
import WorkList from './WorkList'; // Import your component
import React, { useState, useEffect } from 'react';
import WeatherWidget from './Weather';
// import P5Component from './P5Component';
import HTMLFlipBook from "react-pageflip";
import FlipPage from 'react-pageflip';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Row, Col} from 'reactstrap';
import Newspaper from './Newspaper';
const works= [
  {
    "name":"Zenmode app",
    // "url":process.env.PUBLIC_URL + "Videos/test1.mp4",
    "url":"h6oGqvoWIks",
    "year":"2020",
    "isYoutube":true,
    "company":"Oneplus"
  },
  
  {
    "name":"OnePlus x Hasselblad Camera app",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2021",
    "isYoutube":false,
    "company":"Oneplus"
  },
  
  {
    "name":"Nothing X",
    "url":process.env.PUBLIC_URL + "Videos/zenmode.mp4",
    "year":"2022",
    "isYoutube":false,
    "company":"Nothing"
  },
  
  {
    "name":"Camera app",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023",
    "isYoutube":false,
    "company":"Nothing"
  },
  
  {
    "name":"OS_Boot",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023",
    "isYoutube":false,
    "company":"Nothing"
  },
  
  {
    "name":"OS_Folders",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023",
    "isYoutube":false,
    "company":"Nothing"
  },
  
  {
    "name":"OS_Settings",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023",
    "isYoutube":false,
    "company":"Nothing"
  },
  
  {
    "name":"motion workshop",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023",
    "isYoutube":false,
    "company":"Nothing"
  }
]

function getWindowDimensions() {
  let { innerWidth: width, innerHeight: height } = window;

  if (width > 768) {
    width /= 2;
  }
  console.log(width);
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  useEffect(() => {
  function handleResize() {
  setWindowDimensions(getWindowDimensions());
  }
  
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return windowDimensions;
}


function App() {
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);
  const { height, width } = useWindowDimensions();

  const [updateKey, setUpdateKey] = useState(0);
  useEffect(() => {
    // Call setUpdateKey whenever you want to trigger an update
    setUpdateKey(prevKey => prevKey + 1);
  }, [height, width]);


  return (
    <div>
      {/* <Newspaper /> */}

      {width > 400 && (
        <div className='placeholder-rectangle'>intentionally left blank</div>)}
        
      <FlipPage
        width={width} 
        height={height} 
        key={updateKey}
        maxShadowOpacity={0.1}   
        mobileScrollSupport={true}
        //size={"stretch"}
        //key = {width + height}
        //usePortrait={true}
        //onFlip={onPage}
        //onChangeOrientation={this.onChangeOrientation}
        //onChangeOrientation={onChangeOrientation}
        //onChangeState={this.onChangeState}
        showCover={false}
      > 

     <div className="newspaperCover">
      <header className="App-header">
       <div className="date-display">
         1st edition<br></br>
         {formattedDate}
       </div>
        <h1 className='App-header'>Wai York Times</h1> 
        <WeatherWidget />
      </header>
      <div className="lines">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
      <div className='cover-Content'>Malaysian Soul: Snapping Shots Globally While Dodging Pixels.</div>
    </div>
      <div className="newspaperCover">
        page2 <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo}/>
        page 22222222
      </div>

      <div className="newspaperCover">
        page3 <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo}/>
        page 3333
      </div>
      <div className="newspaperCover">
        page3 <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo}/>
        page 3333
      </div>
      <div className="newspaperCover">
        page3 <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo}/>
        page 3333
      </div> 
      </FlipPage>

      </div>
  );
}

export default App;


/* <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo} />
<header className="About-title">About</header>
<p className='About-paragraph'>
  Hey! I'm a digital product designer from Malaysia. 
  Currently working on <a href="https://www.nothing.tech" className='About-link'>Nothing</a>, previously 
  at <a href="https://www.oneplus.com" className='About-link'>OnePlus</a>. On the side, I take <a href="https://instagram.com/waaihong" className='About-link'>photos</a>  
  , drink coffee, travel and <a href="https://mapericano.vercel.app/" className='About-link'>mapericano</a>. 
</p>
<div className='social-link-container'>
  <a href="https://x.com/waaihong" className='Social-link'>X</a>
  <a href="https://www.linkedin.com/in/waihonglim/" className='Social-link'>LinkedIn</a>
  <a href="https://www.linkedin.com/in/waihonglim/" className='Social-link'>Resume</a>
  <p> resume link not ready & need to write email popup</p>
</div> */
 /* <P5Component /> */

//  const PageCover = React.forwardRef((props, ref) => {
//   return (
//     <div className="page page-cover" style = {{backgroundColor:"white"}} ref={ref} data-density="hard">
//       <div className="page-content">
//         <h2>{props.children}</h2>
//       </div>
//     </div>
//   );
// });



// <div class="placeholder-rectangle">test test</div>
        
// <div className="newspaperCover">
//   <header className="App-header">
//       <div className="date-display">
//         1st edition<br></br>
//         {formattedDate}
//       </div>
//       <h1 className='App-header'>Wai York Times</h1> 
//       <WeatherWidget />
//   </header>
//     <div className="lines">
//       <div className="line1"></div>
//       <div className="line2"></div>
//     </div>
//     <div className='cover-Content'>Malaysian Soul: Snapping Shots Globally While Dodging Pixels.</div>
//   </div>

//   <div className="newspaperCover">
//     page2 <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo}/>
//     page 22222222
//   </div>

//   <div className="newspaperCover">
//     page3 <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo}/>
//     page 3333
//   </div>

//   <div className="newspaperCover">
//     page4 <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo}/>444
//   </div>

//   <div className="newspaperCover">
//     page5 <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo}/>
//   </div> 