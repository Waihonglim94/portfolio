import logo from './logo.svg';
import './App.css';
import WorkList from './WorkList'; // Import your component

const works= [
  {
    "name":"work1",
    "url":process.env.PUBLIC_URL + "Videos/test1.mp4",
  },
  
  {
    "name":"work2",
    "url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
}  
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Waihong</h1> 
      </header>

      
      <WorkList works={works} />  
      {/* <VideoDisplay works={works} /> */}
    
    </div>
  );
}

export default App;
