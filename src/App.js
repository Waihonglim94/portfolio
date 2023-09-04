// import logo from './logo.svg';
import './App.css';
import WorkList from './WorkList'; // Import your component
import React, { useState } from 'react';

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>waihong</h1> 
      </header>

        <WorkList works={works} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo} />
    </div>
  );
}

export default App;
