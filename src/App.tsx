import React, { useRef, memo, useEffect, useReducer } from "react";
import "./reset.css";
import "./App.css";
import Dot from "./components/Dot";

import getWidthHeight from "./tools/getWidthHeight";
import getDotsCount from "./tools/getDotsCount";
import ModalPopup from "./components/ModalPopup";
import CanvasImg from "./components/CanvasImg";
import Profile from "./components/Profile";

import groupData from "./data/group.json";

const initialState = {
  name: "group",
  dataJson: groupData as { [index: string]: any },
  group: "izone",
  img: "0.jpg",
  selectedProfile: "home",
  profile: [],
  selectedImg: [{ group: "izone", name: "group", img: "0.jpg" }],
  imgCtx: null,
  imgCtxArr: [],
  screenSize: [],
  dotWrapperSize: [],
  initDotsCount: [],
  modalPopup: [],
  maxDepth: 6,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profile: [...state.profile, action.status] };
    case "PREV_PROFILE":
      return { ...state, profile: [...state.profile.slice(0, -1)] };
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_GROUP":
      return { ...state, group: action.group };
    case "SET_IMG":
      return { ...state, img: action.img };
    case "SET_IMG_CTX_ARR":
      return {
        ...state,
        imgCtx: { ctx: action.ctx, img: action.img },
        imgCtxARR: {
          ...state.imgCtx,
          [action.name]: { ctx: action.ctx, img: action.img },
        },
      };
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
    case "ADD_SELECTED_IMG":
      return {
        ...state,
        selectedImg: [
          ...state.selectedImg,
          { name: action.name, group: action.group, img: action.img },
        ],
      };
    case "SET_MAX_DEPTH":
      return {
        ...state,
        maxDepth: action.depth,
      };
    case "SET_SELECTED_PROFILE":
      return {
        ...state,
        selectedProfile: action.select,
      };
    default:
      return state;
  }
};

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dotWrapperRef = useRef<HTMLDivElement>(null);
  const dotSubWrapperRef = useRef<HTMLDivElement>(null);
  const profileWrapperRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<Event>(new CustomEvent("division"));
  const timeRef = useRef<any>(0);

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
        dot.classList.add("hello");
      }
    }
  };

  useEffect(() => {
    if (state.screenSize[0] < 600) {
      dispatch({ type: "SET_MAX_DEPTH", depth: 6 });
    } else if (state.screenSize[0] >= 600) {
      dispatch({ type: "SET_MAX_DEPTH", depth: 7 });
    }
  }, [state.screenSize]);

  useEffect(() => {
    if (state.imgCtx) {
      const img = state.imgCtx.img;
      const size = getWidthHeight(img, state.screenSize);
      const dotsCount = getDotsCount(size, size.width / 2);
      setDotWrapper(size.width, size.height);
      makeInitDots(dotsCount);
    }
  }, [state.screenSize, state.imgCtx]);

  useEffect(() => {
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
            state.screenSize[1] - (state.screenSize[0] > 600 ? 125 : 80)
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
          {state.selectedProfile !== "home" && (
            <Profile
              type="prev"
              dispatch={dispatch}
              depth={state.profile.length}
            />
          )}
          {state.selectedProfile === "home"
            ? state.dataJson.names.map((item: any) => (
                <Profile
                  group={item}
                  key={item}
                  type={"home"}
                  dispatch={dispatch}
                  sub={item}
                ></Profile>
              ))
            : state.selectedProfile === "group"
            ? state.dataJson[state.profile[0]].member.map((item: any) => (
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
            : state.dataJson[state.profile[0]].imgs[
                state.profile[1]
              ].map((item: any) => (
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
                    state.selectedImg[state.selectedImg.length - 1].img === item
                  }
                  dispatch={dispatch}
                />
              ))}
        </div>
      </div>
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
    </>
  );
});

export default App;
