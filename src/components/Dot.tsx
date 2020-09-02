import React, { useRef, useEffect, useState, memo, useCallback } from "react";

const Dot = memo(({ ctx, name, wrapperSize, event, depth }: any) => {
  const [dots, setDots] = useState<Array<any>>([]);
  const dotRef = useRef<HTMLDivElement>(null);

  const onEvent = useCallback(() => {
    // element what has dot class remove dot class then add wrapper class
    if (dotRef.current?.classList.contains("dot") && depth < 6) {
      dotRef.current?.classList.remove("dot");
      dotRef.current?.classList.add("wrapper");
      setDots([1, 2, 3, 4]);
    }
  }, [depth]);

  useEffect(() => {
    // init dot setting
    if (
      dotRef.current &&
      dotRef.current?.classList.contains("dot") &&
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
  }, [ctx, name, wrapperSize]);

  useEffect(() => {
    const target = dotRef.current;
    target?.addEventListener("mouseenter", onEvent, { once: true });
    target?.addEventListener("division", onEvent, { once: true });
  }, [onEvent]);

  return (
    <div ref={dotRef} className="dot">
      {dots.map((item) => {
        return (
          <Dot
            key={item.toString()}
            ctx={ctx}
            name={name}
            event={event}
            wrapperSize={wrapperSize}
            depth={depth + 1}
          />
        );
      })}
    </div>
  );
});

export default Dot;
