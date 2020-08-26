import React, { useState, useRef, memo, useEffect } from "react";
import "./reset.css";
import "./App.css";
import Dot from "./components/Dot";

const App = memo(() => {
  const [name, setName] = useState<string>("chaewon");
  const [initialDotSize, setInitialDotSize] = useState<number>(0);
  const [screenSize, setScreenSize] = useState<object>({ width: 0, height: 0 });
  const [ctxState, setCtxState] = useState<CanvasRenderingContext2D>();
  const dotWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const setDotWrapper = (imgWidth: number, imgHeight: number) => {
    // set dot-wrapper size
    if (dotWrapperRef.current) {
      const dotWrapper = dotWrapperRef.current as HTMLDivElement;
      dotWrapper.style.width = `${imgWidth}px`;
      dotWrapper.style.height = `${imgHeight}px`;
    }
  };

  const setCanvas = (
    // set canvas size and draw image and return ctx
    canvas: HTMLCanvasElement,
    img: HTMLImageElement,
    width: number,
    height: number
  ): CanvasRenderingContext2D => {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = width;
    canvas.height = height;
    setCtxState(ctx);
    ctx.drawImage(img, 0, 0, width, height);
    return ctx;
  };

  const imgOnLoad = (e: any) => {
    // when img is loaded, init system
    if (canvasRef.current && e.target) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const img = e.target as HTMLImageElement;
      const { width, height } = img;
      setCanvas(canvas, img, width, height);
      setDotWrapper(width, height);
      setInitialDotSize(350);
    }
  };

  useEffect(() => {
    // when document is loaded, set screenSize state at once
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener("resize", () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  return (
    <div id="main-wrapper">
      <img onLoad={imgOnLoad} alt="chaewon" src={`./img/${name}.jpg`}></img>
      <canvas ref={canvasRef}></canvas>
      <div ref={dotWrapperRef} className="wrapper" id="dot-wrapper">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Dot size={initialDotSize} ctx={ctxState} key={item.toString()} />
        ))}
      </div>
    </div>
  );
});

export default App;
