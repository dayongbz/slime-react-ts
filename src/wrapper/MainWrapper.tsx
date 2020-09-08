import React, { memo, useRef, useEffect, useCallback } from "react";
import Dot from "../components/Dot";

import getWidthHeight from "../tools/getWidthHeight";
import getDotsCount from "../tools/getDotsCount";

const MainWrapper = memo(
  ({
    screenSize,
    initDotsCount,
    imgCtx,
    eventRef,
    dotWrapperSize,
    maxDepth,
    dispatch,
  }: any) => {
    const dotWrapperRef = useRef<HTMLDivElement>(null);
    const dotSubWrapperRef = useRef<HTMLDivElement>(null);

    const makeInitDots = useCallback(
      (dotsCount: number) => {
        // set initial dots
        const initDotsCount = [];
        for (let i = 0; i < dotsCount; i++) {
          initDotsCount.push(i);
        }
        dispatch({
          type: "SET_INIT_DOTS_COUNT",
          initDotsCount,
        });
      },
      [dispatch]
    );

    const setDotWrapper = useCallback((width: number, height: number) => {
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      // call setDotWrapper and makeInitDots for setting dot wrapper size state and initital dots count
      if (imgCtx) {
        const img = imgCtx.img;
        const size = getWidthHeight(img, screenSize);
        const dotsCount = getDotsCount(size, size.width / 2);
        setDotWrapper(size.width, size.height);
        makeInitDots(dotsCount);
      }
    }, [screenSize, imgCtx, setDotWrapper, makeInitDots]);

    return (
      <div
        id="main-wrapper"
        style={{
          height: `${
            screenSize[1] - (screenSize[0] > 600 ? 125 : 80) // set main wrapper height
          }px`,
        }}
      >
        <div ref={dotWrapperRef} id="dot-wrapper">
          <div ref={dotSubWrapperRef} id="dot-subwrapper">
            {initDotsCount.map((item: any) => (
              <Dot
                ctx={imgCtx.ctx}
                key={item.toString()}
                event={eventRef}
                wrapperSize={dotWrapperSize}
                depth={1}
                maxDepth={maxDepth}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default MainWrapper;
