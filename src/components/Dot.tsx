import React, { useRef, useEffect, useState, memo, useCallback } from "react";

const Dot = memo(({ ctx, wrapperSize, event, depth, maxDepth }: any) => {
  const [dots, setDots] = useState<Array<any>>([]);
  const dotRef = useRef<HTMLDivElement>(null);

  const onEvent = useCallback((e: any) => {
    // element what has dot class remove dot class then add wrapper class
    e.target.classList.remove("dot");
    e.target.classList.add("wrapper");
    setDots([1, 2, 3, 4]);
  }, []);

  const getCoord = useCallback(
    (element: any): any => {
      let x = element.offsetLeft + element.offsetWidth / 2,
        y = element.offsetTop + element.offsetHeight / 2;
      x = x < 0 ? 0 : x >= wrapperSize[0] ? wrapperSize[0] - 1 : x;
      y = y < 0 ? 0 : y >= wrapperSize[1] ? wrapperSize[1] - 1 : y;
      return [x, y];
    },
    [wrapperSize]
  );

  useEffect(() => {
    // add eventlistener
    const target = dotRef.current;
    const status = target?.classList.contains("dot");
    if (target && status && depth < maxDepth) {
      target.addEventListener("division", onEvent, { once: true });
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      target?.removeEventListener("division", onEvent);
    };
  }, [onEvent, depth, maxDepth]);

  useEffect(() => {
    // if depth is bigger than maxDepth then reset Dots components
    const target = dotRef.current;
    if (depth >= maxDepth && target?.classList.contains("wrapper")) {
      setDots([]);
      target.classList.add("dot");
      target.classList.remove("wrapper");
    }
  }, [depth, maxDepth]);

  useEffect(() => {
    // init dot setting
    if (
      dotRef.current?.classList.contains("dot") &&
      !dotRef.current.classList.contains("wrapper")
    ) {
      const dot = dotRef.current;
      const coord = getCoord(dot);
      const colorData = ctx.getImageData(coord[0], coord[1], 1, 1).data;
      dot.style.backgroundColor = `rgb(${colorData[0]},${colorData[1]},${colorData[2]})`;
    }
  }, [ctx, getCoord]);

  return (
    <div ref={dotRef} className="dot">
      {dots &&
        dots.map((item) => {
          return (
            <Dot
              key={item.toString()}
              ctx={ctx}
              event={event}
              wrapperSize={wrapperSize}
              depth={depth + 1}
              maxDepth={maxDepth}
            />
          );
        })}
    </div>
  );
});

export default Dot;
