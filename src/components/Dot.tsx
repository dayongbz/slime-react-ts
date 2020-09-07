import React, { useRef, useEffect, useState, memo, useCallback } from "react";

const Dot = memo(({ ctx, wrapperSize, event, depth, maxDepth }: any) => {
  const [dots, setDots] = useState<Array<any>>([]);
  const dotRef = useRef<HTMLDivElement>(null);

  const onEvent = useCallback(() => {
    // element what has dot class remove dot class then add wrapper class
    dotRef.current?.classList.remove("dot");
    dotRef.current?.classList.add("wrapper");
    setDots([1, 2, 3, 4]);
  }, []);

  useEffect(() => {
    // add eventlistener
    const target = dotRef.current;
    const status = target?.classList.contains("dot");
    if (target && status && depth < maxDepth) {
      target.addEventListener("mouseenter", onEvent, { once: true });
      target.addEventListener("division", onEvent, { once: true });
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (target && status && depth < maxDepth) {
        target.removeEventListener("mouseenter", onEvent);
        target.removeEventListener("division", onEvent);
      }
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
      dotRef.current &&
      dotRef.current.classList.contains("dot") &&
      ctx &&
      wrapperSize
    ) {
      const dot = dotRef.current;
      let x = dot.offsetLeft + dot.offsetWidth / 2,
        y = dot.offsetTop + dot.offsetHeight / 2;
      x = x < 0 ? 0 : x >= wrapperSize[0] ? wrapperSize[0] - 1 : x;
      y = y < 0 ? 0 : y >= wrapperSize[1] ? wrapperSize[1] - 1 : y;
      const colorData = ctx.getImageData(x, y, 1, 1).data;
      dot.style.backgroundColor = `rgb(${colorData[0]},${colorData[1]},${colorData[2]})`;
    }
  }, [ctx, wrapperSize]);

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
