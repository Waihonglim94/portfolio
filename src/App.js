import cursor from './cursor.png';
import portrait from './KevinStaffPhoto.png'
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import WorkList from './WorkList'; // Import your component
import WeatherWidget from './Weather';
// import P5Component from './P5Component';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'reactstrap';



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



function App() {
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);  
  let coverContentLeft1 = "In an exclusive interview with our team, we had the distinct pleasure of sitting down with Lim Wai Hong, the visionary designer hailing from the quaint town of Seremban, Malaysia. Lim's journey is nothing short of remarkable, as he's traveled far and wide, immersing himself in the vibrant cultures of Brunei, Shanghai, Atlanta, New York City, and presently, Shenzhen, China."
  let coverContentLeft2 = "Wai Hong's career, like his travels, has been a journey marked by creativity and innovation. He embarked on his professional odyssey as a motion designer at a boutique design agency, setting the stage for what would become a fascinating and ever-evolving career."
  let coverContentLeft3 = "His tale takes an exciting twist as he shares his experiences of working with tech giants. Notably, Wai Hong lent his design prowess to names that resonate in the world of technology - OnePlus, Oppo, and the hottest tech company named Nothing. As a software product designer, he's had the privilege of contributing to some of the industry's most innovative and cutting-edge developments."
  let coverContentLeft4 = "We had the chance to delve into the inspiring narrative of Wai Hong's growth as a designer, exploring his remarkable journey, the projects that have defined his path, and the invaluable insights he's garnered along the way. So, without further ado, let's join Lim Wai Hong on a voyage through his design universe, one that's transcended borders and pixelated screens to make a mark that's impossible to ignore."
  let coverContentRight1 = "Wai Hong is currently working at Nothing Technology as a software product designer. Nothing Technology Limited (stylised as NOTHING) is a British consumer electronics manufacturer based in London. Investors in the company include iPod inventor Tony Fadell, Twitch co-founder Kevin Lin,"
  let coverContentRight2 = "Reddit CEO Steve Huffman and YouTuber Casey Neistat. On 25 February 2021, the company announced Teenage Engineering as a founding partner, mainly responsible for the brand's design aesthetic and its products. Nothing's first product 'EAR (1)' was launched on 27 July 2021."
  let coverContentRight3 = "Beside designing stuff on screen, you can find him snapping shots, trying out different cuisine, hiking, swimming and experience different culture globally. To follow his journey, please be sure to check out his Instagram and X (formerly Twitter) account @waaihong."
  return (
    <div className='App custom-cursor'>
    <div className='outer-frame1'>
    <div className='outer-frame1'>

    <div>
      <header className="App-header">
      <h4 className="date-display">placeholder for sth</h4>
      <h1 className='App-header'>Perfect Pixel News</h1> 
      <h4 className="date-display">placeholder for sth</h4>
      {/* <WeatherWidget /> */}
      </header>
    </div>

    <div className="lines">
      <div className="line1"></div>
      <div className="banner">
        {/* {formattedDate} */}
        <div>Volume 1 Issue 1, 1994</div>
        <div>Seremban, Malaysia</div>
        <div>8 cents</div>
      </div>
      <div className="line2"></div>
    </div>
    
    <div className='container'>
    <div className='row'>
      <div class="col-sm">
        <div className='cover-Content'>{coverContentLeft1}</div>
        <div className='cover-Content'>{coverContentLeft2}</div>
        <div className='cover-Content'>{coverContentLeft3}</div>
        <div className='cover-Content'>{coverContentLeft4}</div>
      </div>

      <div class="col-sm">
        <div className='cover-Title'>Malaysian Soul: <br></br>Wai Hong's Creative Journey Unveiled</div>
        <img src={portrait} alt="headshot" />
      </div>

      <div class="col-sm">
        <div className='cover-Content'>{coverContentRight1}</div>
        <div className='cover-Content'>{coverContentRight2}</div>
        <div className='cover-Content'>{coverContentRight3}</div>
      </div>
    <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo} />
  </div> 
  </div>

  </div> 
  </div> 
  </div> //cursor
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