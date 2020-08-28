import React, { useState, useRef, memo, useEffect } from "react";
import "./reset.css";
import "./App.css";
import Dot from "./components/Dot";
import CanvasImgWrapper from "./components/CanvasImgWrapper";
import ProfileWrapper from "./components/ProfileWrapper";

const App = memo(() => {
  const [name, setName] = useState<string>("kimchaewon");
  const [initialDotSize, setInitialDotSize] = useState<number>(0);
  const [initialDots, setInitialDots] = useState<Array<number>>([]);
  const [screenSize, setScreenSize] = useState<Array<number>>([0, 0]);
  const [ctxState, setCtxState] = useState<any>({});
  const memberRef = useRef<Array<string>>([
    "kwoneunbi",
    "sakura",
    "kanghyewon",
    "choiyena",
    "leechaeyeon",
    "kimchaewon",
    "kimminju",
    "nako",
    "hitomi",
    "joyuri",
    "anyujin",
    "jangwonyoung",
  ]);
  const dotWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const setDotWrapper = (imgWidth: number, imgHeight: number) => {
    // set dot-wrapper size
    if (dotWrapperRef.current) {
      const dotWrapper = dotWrapperRef.current as HTMLDivElement;
      dotWrapper.style.width = `${imgWidth}px`;
      dotWrapper.style.height = `${imgHeight}px`;
      setInitialDots([1, 2, 3, 4, 5, 6]);
    }
  };

  const getWidthHeight = (img: HTMLImageElement) => {
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

    return { width, height };
  };

  const settingInit = () => {
    if (ctxState[name]) {
      const img = ctxState[name].img;
      const size = getWidthHeight(img);
      setDotWrapper(size.width, size.height);
      setInitialDotSize(350);
    }
  };

  const onReSize = () => {
    setScreenSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    settingInit();
  }, [name, ctxState]);

  useEffect(() => {
    // when document is loaded, set screenSize state at once
    onReSize();
    window.addEventListener("resize", onReSize);
  }, []);
  return (
    <>
      <CanvasImgWrapper
        member={memberRef.current}
        screenSize={screenSize}
        ctxState={ctxState}
        setCtxState={setCtxState}
      />
      <div id="main-wrapper">
        {/* <DotWrapper ref={dotWrapperRef}></DotWrapper> */}
        <div ref={dotWrapperRef} className="wrapper" id="dot-wrapper">
          {initialDots.map((item) => (
            <Dot
              size={initialDotSize}
              ctx={ctxState}
              key={item.toString()}
              name={name}
            />
          ))}
        </div>
      </div>
      <ProfileWrapper
        member={memberRef.current}
        setName={setName}
        name={name}
      ></ProfileWrapper>
    </>
  );
});

export default App;
