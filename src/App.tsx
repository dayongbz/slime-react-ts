import React, { useState, useRef } from 'react';
import './reset.css'
import './App.css';
import Dot from './components/Dot'

function App() {
  const [name, setName] = useState<string>("chaewon");
  const dotWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const setDotWrapper = (imgWidth: number, imgHeight: number) => {
    if (dotWrapperRef.current) {
      const dotWrapper = dotWrapperRef.current as HTMLDivElement;
      dotWrapper.style.width = `${imgWidth}px`
      dotWrapper.style.height = `${imgHeight}px`
    }
  }

  const imgOnLoad = (e: any) => {
    if (canvasRef.current && e.target) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      const img = e.target as HTMLImageElement;
      const { width, height } = img;
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height)
      setDotWrapper(width, height);
    }
  }
  return (
    <div id="main-wrapper">
      <img onLoad={imgOnLoad} alt="chaewon" src={`/img/${name}.jpg`}></img>
      <canvas ref={canvasRef}></canvas>
      <div ref={dotWrapperRef} id="dot-wrapper">
        <Dot size={100}/>
      </div>
    </div>
  );
}

export default App;
