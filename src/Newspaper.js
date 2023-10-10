import React from 'react';
import HTMLFlipBook from "react-pageflip";

function Newspaper() {
  return (
    
    <HTMLFlipBook width={300} height={500}>
    <div className="demoPage placeholder-rectangle">Page 1</div>
    <div className="demoPage">Page 2</div>
    <div className="demoPage">Page 3</div>
    <div className="demoPage">Page 4</div>
  </HTMLFlipBook>
    
  );
}

export default Newspaper;