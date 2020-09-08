import React, { useRef, memo, useEffect, useReducer, useCallback } from "react";
import "./reset.css";
import "./App.css";
import ProfileWrapper from "./wrapper/ProfileWrapper";
import CanvasWrapper from "./wrapper/CanvasWrapper";
import MainWrapper from "./wrapper/MainWrapper";

import ModalPopup from "./components/ModalPopup";
import initialState from "./reducer/state";
import reducer from "./reducer/reducer";

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const eventRef = useRef<Event>(new CustomEvent("division"));
  const timeRef = useRef<any>(0);

  const onReSize = useCallback(() => {
    // when window resies, set screen size state
    dispatch({
      type: "SET_SCREEN_SIZE",
      size: [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ],
    });
  }, []);

  const onTouchMove = useCallback((e: any) => {
    // when touches move, dispatch event
    const dots = [];
    for (let i = 0; i < e.touches.length; i++) {
      dots.push(
        document.elementFromPoint(e.touches[i].clientX, e.touches[i].clientY)
      );
    }
    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];
      if (dot && dot.classList.contains("dot")) {
        dot.dispatchEvent(eventRef.current);
      }
    }
  }, []);

  const onMouseMove = useCallback((e: any) => {
    const dot = document.elementFromPoint(e.clientX, e.clientY);
    if (dot && dot.classList.contains("dot")) {
      dot.dispatchEvent(eventRef.current);
    }
  }, []);

  useEffect(() => {
    // set max depth state
    if (state.dotWrapperSize[0] < 600) {
      dispatch({ type: "SET_MAX_DEPTH", depth: 6 });
    } else if (state.dotWrapperSize[0] >= 600) {
      dispatch({ type: "SET_MAX_DEPTH", depth: 7 });
    }
  }, [state.dotWrapperSize]);

  useEffect(() => {
    // when document is loaded, set screenSize state at once
    onReSize();
    const onReSizeDelay = () => {
      timeRef.current && clearTimeout(timeRef.current);
      timeRef.current = setTimeout(onReSize, 300);
    };
    window.addEventListener("resize", onReSizeDelay);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mousemove", onMouseMove);
  }, [onMouseMove, onReSize, onTouchMove]);

  return (
    <>
      <CanvasWrapper
        selectedImg={state.selectedImg}
        screenSize={state.screenSize}
        dispatch={dispatch}
      />
      <MainWrapper
        screenSize={state.screenSize}
        initDotsCount={state.initDotsCount}
        imgCtx={state.imgCtx}
        eventRef={eventRef.current}
        dotWrapperSize={state.dotWrapperSize}
        maxDepth={state.maxDepth}
        dispatch={dispatch}
      />
      <ProfileWrapper
        selectedProfile={state.selectedProfile}
        dispatch={dispatch}
        profile={state.profile}
        dataJson={state.dataJson}
        selectedImg={state.selectedImg}
      />
      {state.modalPopup
        ? state.modalPopup.map((
            item: any,
            index: any // If modalPopup has value then show ModalPopup component
          ) => (
            <ModalPopup
              title={item.title}
              description={item.description}
              dispatch={dispatch}
              key={item.title + index}
            />
          ))
        : null}
    </>
  );
});

export default App;
