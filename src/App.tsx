import React, { useRef, memo, useEffect, useReducer } from "react";
import "./reset.css";
import "./App.css";
import Dot from "./components/Dot";

import getWidthHeight from "./tools/getWidthHeight";
import getDotsCount from "./tools/getDotsCount";
import ModalPopup from "./components/ModalPopup";
import CanvasImg from "./components/CanvasImg";
import Profile from "./components/Profile";
import initialState from "./reducer/state";
import reducer from "./reducer/reducer";

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dotWrapperRef = useRef<HTMLDivElement>(null);
  const dotSubWrapperRef = useRef<HTMLDivElement>(null);
  const profileWrapperRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<Event>(new CustomEvent("division"));
  const timeRef = useRef<any>(0);

  const setDotWrapper = (width: number, height: number) => {
    // set dot-wrapper size
    if (dotWrapperRef.current && dotSubWrapperRef.current) {
      const dotWrapper = dotWrapperRef.current;
      const dotSubWrapper = dotSubWrapperRef.current;
      dotWrapper.style.width = `${width}px`;
      dotWrapper.style.height = `${height}px`;

      dotSubWrapper.style.width = `${width}px`;
      dotSubWrapper.style.height = `${width}px`;
      dispatch({
        type: "SET_DOT_WRAPPER_SIZE",
        size: [width, height],
      });
    }
  };

  const makeInitDots = (dotsCount: number) => {
    // set initial dots
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
    // when window resies, set screen size state
    dispatch({
      type: "SET_SCREEN_SIZE",
      size: [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ],
    });
  };

  const onTouchMove = (e: any) => {
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
  };

  useEffect(() => {
    // set max depth state
    if (state.dotWrapperSize[0] < 600) {
      dispatch({ type: "SET_MAX_DEPTH", depth: 6 });
    } else if (state.dotWrapperSize[0] >= 600) {
      dispatch({ type: "SET_MAX_DEPTH", depth: 7 });
    }
  }, [state.dotWrapperSize]);

  useEffect(() => {
    // call setDotWrapper and makeInitDots for setting dot wrapper size state and initital dots count
    if (state.imgCtx) {
      const img = state.imgCtx.img;
      const size = getWidthHeight(img, state.screenSize);
      const dotsCount = getDotsCount(size, size.width / 2);
      setDotWrapper(size.width, size.height);
      makeInitDots(dotsCount);
    }
  }, [state.screenSize, state.imgCtx]);

  useEffect(() => {
    // when click profile, rest profile wrapper scrollbar
    profileWrapperRef.current?.scrollTo(0, 0);
  }, [state.profile]);

  useEffect(() => {
    // when document is loaded, set screenSize state at once
    onReSize();
    const onReSizeDelay = () => {
      timeRef.current && clearTimeout(timeRef.current);
      timeRef.current = setTimeout(onReSize, 300);
    };
    window.addEventListener("resize", onReSizeDelay);
    window.addEventListener("touchmove", onTouchMove);
  }, []);

  return (
    <>
      <div id="canvas-wrapper">
        {state.selectedImg.map((item: any) => (
          <CanvasImg
            name={item.name}
            group={item.group}
            img={item.img}
            key={`${item.group}/${item.name}/${item.img}`}
            screenSize={state.screenSize}
            dispatch={dispatch}
          />
        ))}
      </div>
      <div
        id="main-wrapper"
        style={{
          height: `${
            state.screenSize[1] - (state.screenSize[0] > 600 ? 125 : 80) // set main wrapper height
          }px`,
        }}
      >
        <div ref={dotWrapperRef} id="dot-wrapper">
          <div ref={dotSubWrapperRef} id="dot-subwrapper">
            {state.initDotsCount.map((item: any, index: number) => (
              <Dot
                ctx={state.imgCtx.ctx}
                key={item.toString()}
                event={eventRef.current}
                wrapperSize={state.dotWrapperSize}
                depth={1}
                maxDepth={state.maxDepth}
              />
            ))}
          </div>
        </div>
      </div>
      <div id="profile-wrapper" ref={profileWrapperRef}>
        <div id="profile-slide">
          {state.selectedProfile !== "home" && ( // If selectedProfile state is not home then profile-slide has prev button
            <Profile
              type="prev"
              dispatch={dispatch}
              depth={state.profile.length}
            />
          )}
          {state.selectedProfile === "home"
            ? state.dataJson.names.map((
                item: any // If selectedprofile state is home then Profile component show group icon
              ) => (
                <Profile
                  group={item}
                  key={item}
                  type={"home"}
                  dispatch={dispatch}
                  sub={item}
                ></Profile>
              ))
            : state.selectedProfile === "group"
            ? state.dataJson[state.profile[0]].member.map((
                item: any // If selectedprofile state is group then Profile component show member icon
              ) => (
                <Profile
                  group={state.profile[0]}
                  name={item}
                  key={item}
                  type={"group"}
                  dispatch={dispatch}
                  imgs={state.dataJson[state.profile[0]].imgs[item]}
                  sub={item}
                />
              ))
            : state.dataJson[state.profile[0]].imgs[state.profile[1]] // If selectedprofile state is member then Profile component show person img
                .map((item: any) => (
                  <Profile
                    name={state.profile[1]}
                    img={item}
                    group={state.profile[0]}
                    key={item}
                    type={"member"}
                    selected={
                      state.selectedImg[state.selectedImg.length - 1].name ===
                        state.profile[1] &&
                      state.selectedImg[state.selectedImg.length - 1].group ===
                        state.profile[0] &&
                      state.selectedImg[state.selectedImg.length - 1].img ===
                        item
                    }
                    dispatch={dispatch}
                  />
                ))}
        </div>
      </div>
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
