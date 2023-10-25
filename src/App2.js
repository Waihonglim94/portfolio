import React, { useState, useEffect, useRef } from 'react';
import HTMLFlipBook from "react-pageflip";


function getWindowDimensions() {
    let { innerWidth: width, innerHeight: height } = window;
    console.log(width);
      // width=width/2;
  
      if (width<768){
        width = height/2
      } else{
        width = width/2;
      }
    //   landscape = true;
    // }else{
    //   landscape = false;
    // }
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

  const Page = React.forwardRef((props, ref) => {
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleClick = () => {
        playVideo();
        
    };

    return (
        <div className="demoPage" ref={ref}>
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
            {props.number === "2" && (
                <div style={{ position: 'relative', maxWidth: '100%' }}>
                    <video
                        ref={videoRef}
                        controls
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent event from propagating to parent element
                            handleClick();
                        }}
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* <button
                        onClick={playVideo}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        Play Video
                    </button> */}
                </div>
            )}
        </div>
    );
});



function MyBook(props) {
    const [isFlippingEnabled, setIsFlippingEnabled] = useState(true);

    const handleChangeState = (newState) => {
      if (newState === "fold_corner") {
        setIsFlippingEnabled(true);
      } else {
        setIsFlippingEnabled(false);
      }
    };

    const { height, width } = useWindowDimensions();
    return (
        <HTMLFlipBook
            width={width}
            height={height}
            maxShadowOpacity={0.1}
            onChangeState={handleChangeState}
            disabled={!isFlippingEnabled}
        >
        
    <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
            
        </HTMLFlipBook>
    );
}

export default MyBook;
