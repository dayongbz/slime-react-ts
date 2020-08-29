import React, { useRef, memo, useEffect, useReducer } from "react";
import "./reset.css";
import "./App.css";
import Dot from "./components/Dot";
import CanvasImgWrapper from "./components/CanvasImgWrapper";
import ProfileWrapper from "./components/ProfileWrapper";
import getWidthHeight from "./tools/getWidthHeight";

const initialState = {
  name: "kimchaewon",
  imgCtx: {},
  dotSize: 0,
  screenSize: [0, 0],
  initDotsCount: [],
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_IMG_CTX":
      return {
        ...state,
        imgCtx: {
          ...state.imgCtx,
          [action.name]: { ctx: action.ctx, img: action.img },
        },
      };
    case "SET_DOT_SIZE":
      return { ...state, dotSize: action.dotSize };
    case "SET_SCREEN_SIZE":
      return { ...state, screenSize: [...action.size] };
    case "SET_INIT_DOTS_COUNT":
      return { ...state, initDotsCount: [...action.initDotsCount] };
    default:
      return state;
  }
};

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
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

  const setDotWrapper = (imgWidth: number, imgHeight: number) => {
    // set dot-wrapper size
    if (dotWrapperRef.current) {
      const dotWrapper = dotWrapperRef.current as HTMLDivElement;
      dotWrapper.style.width = `${imgWidth}px`;
      dotWrapper.style.height = `${imgHeight}px`;
      dispatch({
        type: "SET_INIT_DOTS_COUNT",
        initDotsCount: [1, 2, 3, 4, 5, 6],
      });
    }
  };

  const onReSize = () => {
    dispatch({
      type: "SET_SCREEN_SIZE",
      size: [window.innerWidth, window.innerHeight],
    });
  };

  useEffect(() => {
    if (state.imgCtx[state.name]) {
      const img = state.imgCtx[state.name].img;
      const size = getWidthHeight(img, state.screenSize);
      setDotWrapper(size.width, size.height);
      dispatch({
        type: "SET_DOT_SIZE",
        dotSize: 350,
      });
    }
  }, [state.imgCtx[state.name], state.name, state.screenSize]);

  useEffect(() => {
    // when document is loaded, set screenSize state at once
    onReSize();
    window.addEventListener("resize", onReSize);
  }, []);
  return (
    <>
      <CanvasImgWrapper
        member={memberRef.current}
        screenSize={state.screenSize}
        dispatch={dispatch}
      />
      <div
        id="main-wrapper"
        style={{ height: `${window.innerHeight - 125}px` }}
      >
        <div ref={dotWrapperRef} className="wrapper" id="dot-wrapper">
          {state.initDotsCount.map((item: any) => (
            <Dot
              size={state.dotSize}
              ctx={state.imgCtx}
              key={item.toString()}
              name={state.name}
            />
          ))}
        </div>
      </div>
      <ProfileWrapper
        member={memberRef.current}
        dispatch={dispatch}
        name={state.name}
      ></ProfileWrapper>
    </>
  );
});

export default App;
