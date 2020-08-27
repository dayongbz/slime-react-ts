import React, { useState, useRef, memo, useEffect } from "react";
import "./reset.css";
import "./App.css";
import Dot from "./components/Dot";
import Profile from "./components/Profile";

const App = memo(() => {
  const [name, setName] = useState<string>("chaewon");
  const [initialDotSize, setInitialDotSize] = useState<number>(0);
  const [screenSize, setScreenSize] = useState<Array<number>>([0, 0]);
  const [ctxState, setCtxState] = useState<CanvasRenderingContext2D>();
  const dotWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

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

  const reset = () => {
    if (dotWrapperRef.current) {
      const parent = dotWrapperRef.current;
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  };

  const imgOnLoad = () => {
    // when img is loaded, init system
    if (canvasRef.current && imgRef.current) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const img = imgRef.current as HTMLImageElement;
      let { width, height } = img;
      if (width < height) {
        if (width > screenSize[0] * 0.8) {
          height = (height / width) * screenSize[0] * 0.8;
          width = screenSize[0] * 0.8;
        }
        // if (height > screenSize[1] * 0.5) {
        //   width = (width / height) * screenSize[1] * 0.5;
        //   height = screenSize[1] * 0.5;
        // }
      } else if (width > height) {
      }
      setCanvas(canvas, img, width, height);
      setDotWrapper(width, height);
      setInitialDotSize(350);
    }
  };

  useEffect(() => {
    // when document is loaded, set screenSize state at once
    setScreenSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", () => {
      setScreenSize([window.innerWidth, window.innerHeight]);
    });
  }, []);

  return (
    <>
      <div id="main-wrapper">
        <img
          onLoad={imgOnLoad}
          alt="chaewon"
          src={`./img/${name}.jpg`}
          ref={imgRef}
        ></img>
        <canvas ref={canvasRef}></canvas>
        <div ref={dotWrapperRef} className="wrapper" id="dot-wrapper">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Dot
              size={initialDotSize}
              ctx={ctxState}
              key={item.toString()}
              name={name}
            />
          ))}
        </div>
      </div>
      <div id="profile-wrapper">
        <Profile name="chaewon" setName={setName} />
        <Profile name="joyuri" setName={setName} />
      </div>
    </>
  );
});

export default App;
