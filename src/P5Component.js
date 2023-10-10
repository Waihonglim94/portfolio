import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5Component = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = new p5((p) => {
      p.setup = () => {
        p.createCanvas(200, 200);
      };

      p.draw = () => {
        p.background(220);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
      };
    }, sketchRef.current);

    // Add event listeners
    sketchRef.current.addEventListener('mousemove', (e) => {
      sketch.mouseX = e.clientX;
      sketch.mouseY = e.clientY;
    });

    // Update canvas size when window is resized
    window.addEventListener('resize', () => {
      sketch.resizeCanvas(window.innerWidth, window.innerHeight);
    });
  }, []);

  return <div ref={sketchRef} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default P5Component;
