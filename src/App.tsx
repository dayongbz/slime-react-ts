import React, { useRef, memo, useEffect, useReducer } from "react";
import "./reset.css";
import "./App.css";
import Dot from "./components/Dot";
import CanvasImgWrapper from "./components/CanvasImgWrapper";
import ProfileWrapper from "./components/ProfileWrapper";
import getWidthHeight from "./tools/getWidthHeight";
import getDotsCount from "./tools/getDotsCount";
import ModalPopup from "./components/ModalPopup";

const initialState = {
  name: "kimchaewon",
  imgCtx: {},
  dotSize: 0,
  screenSize: [0, 0],
  dotWrapperSize: [0, 0],
  initDotsCount: [],
  modalPopup: [],
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
    case "SET_DOT_WRAPPER_SIZE":
      return { ...state, dotWrapperSize: [...action.size] };
    case "SET_INIT_DOTS_COUNT":
      return { ...state, initDotsCount: [...action.initDotsCount] };
    case "SET_MODAL_POPUP":
      return {
        ...state,
        modalPopup: [...state.modalPopup, { ...action.modalPopup }],
      };
    case "CANCEL_MODAL_POPUP":
      return {
        ...state,
        modalPopup: [...state.modalPopup.slice(1)],
      };
    case "OK_MODAL_POPUP":
      for (let i = 0; i < state.modalPopup[0].functions.length; i++) {
        state.modalPopup[0].functions[i](state.modalPopup[0].args[i]);
      }

      return {
        ...state,
        modalPopup: [...state.modalPopup.slice(1)],
      };

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
  const dotSubWrapperRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<Event>(new CustomEvent("division"));

  const setDotWrapper = (imgWidth: number, imgHeight: number) => {
    // set dot-wrapper size
    if (dotWrapperRef.current && dotSubWrapperRef.current) {
      const dotWrapper = dotWrapperRef.current;
      const dotSubWrapper = dotSubWrapperRef.current;
      dotWrapper.style.width = `${imgWidth}px`;
      dotWrapper.style.height = `${imgHeight}px`;

      dotSubWrapper.style.width = `${imgWidth}px`;
      dotSubWrapper.style.height = `${imgWidth}px`;
      dispatch({
        type: "SET_DOT_WRAPPER_SIZE",
        size: [imgWidth, imgHeight],
      });
    }
  };

  const makeInitDots = (dotsCount: number) => {
    const initDotsCount = [];
    for (let i = 0; i < dotsCount; i++) {
      initDotsCount.push(i);
    }
    dispatch({
      type: "SET_INIT_DOTS_COUNT",
      initDotsCount,
    });
  };

  const onReSize = () => {
    dispatch({
      type: "SET_SCREEN_SIZE",
      size: [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ],
    });
  };

  const onTouchMove = (e: any) => {
    const dot = document.elementFromPoint(
      e.touches[0].clientX,
      e.touches[0].clientY
    );
    if (dot && dot.classList.contains("dot")) {
      dot.dispatchEvent(eventRef.current);
      dot.classList.add("hello");
    }
  };

  useEffect(() => {
    if (state.imgCtx[state.name]) {
      const img = state.imgCtx[state.name].img;
      const size = getWidthHeight(img, state.screenSize);
      const dotsCount = getDotsCount(size, size.width / 2);
      dispatch({
        type: "SET_DOT_SIZE",
        dotSize: size.width / 2,
      });
      setDotWrapper(size.width, size.height);
      makeInitDots(dotsCount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.imgCtx[state.name], state.name, state.screenSize]);

  useEffect(() => {
    // when document is loaded, set screenSize state at once
    onReSize();
    window.addEventListener("resize", onReSize);
    window.addEventListener("touchmove", onTouchMove);
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
        style={{ height: `${document.documentElement.clientHeight - 125}px` }}
      >
        <div ref={dotWrapperRef} id="dot-wrapper">
          <div ref={dotSubWrapperRef} id="dot-subwrapper">
            {state.initDotsCount.map((item: any, index: number) => (
              <Dot
                size={state.dotSize}
                ctx={state.imgCtx[state.name].ctx}
                key={item.toString()}
                name={state.name}
                index={index}
                event={eventRef.current}
                wrapperSize={state.dotWrapperSize}
              />
            ))}
          </div>
        </div>
      </div>
      <ProfileWrapper
        member={memberRef.current}
        dispatch={dispatch}
        name={state.name}
      />
      {state.modalPopup
        ? state.modalPopup.map((item: any, index: any) => (
            <ModalPopup
              title={item.title}
              description={item.description}
              dispatch={dispatch}
              key={item.title + index}
            />
          ))
        : null}
      {/* <ModalPopup title={"경고"} description={"hello"} /> */}
    </>
  );
});

export default App;
