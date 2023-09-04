// import logo from './logo.svg';
import './App.css';
import WorkList from './WorkList'; // Import your component

const works= [
  {
    "name":"Zenmode app",
    // "url":process.env.PUBLIC_URL + "Videos/test1.mp4",
    "url":"https://www.youtube.com/watch?v=h6oGqvoWIks&ab_channel=OnePlus",
    "year":"2020",
    "isYoutube":true,
    "company":"Oneplus"
  },
  
  {
    "name":"OnePlus x Hasselblad Camera app",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2020-2021",
    "isYoutube":false
  },
  
  {
    "name":"Nothing X",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023"
  },
  
  {
    "name":"Camera app",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023"
  },
  
  {
    "name":"OS_Boot",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023"
  },
  
  {
    "name":"OS_Folders",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023"
  },
  
  {
    "name":"OS_Settings",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023"
  },
  
  {
    "name":"motion workshop",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "year":"2023"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WaiHong</h1> 
      </header>

      
      <WorkList works={works} />  
    
    </div>
  );
}

export default App;
