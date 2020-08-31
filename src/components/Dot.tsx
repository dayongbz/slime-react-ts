import React, { useRef, useEffect, useState, memo } from "react";

const Dot = memo(({ ctx, size, name, wrapperSize, event }: any) => {
  const [dots, setDots] = useState<Array<any>>([]);
  const dotRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    // element what has dot class remove dot class then add wrapper class
    if (dotRef.current && dotRef.current.clientWidth >= 10) {
      if (dotRef.current) {
        dotRef.current.classList.remove("dot");
        dotRef.current.classList.add("wrapper");
        setDots([1, 2, 3, 4]);
      }
    }
  };

  const onTouchMove = () => {
    const target = dotRef.current;
    if (target?.classList.contains("dot") && target.clientWidth >= 10) {
      target.classList.remove("dot");
      target.classList.add("wrapper");
      setDots([1, 2, 3, 4]);
    }
  };

  useEffect(() => {
    // init dot setting
    if (dotRef.current && ctx && wrapperSize) {
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
    target?.addEventListener("mouseenter", onMouseEnter, { once: true });
    target?.addEventListener("division", onTouchMove, { once: true });
  }, []);

  return (
    <div
      ref={dotRef}
      className="dot"
      style={{ width: size, height: size }}
      // onMouseEnter={onMouseEnter}
    >
      {dots.map((item) => {
        return (
          <Dot
            size={size / 2}
            key={item.toString()}
            ctx={ctx}
            name={name}
            event={event}
            wrapperSize={wrapperSize}
          />
        );
      })}
    </div>
  );
});

export default Dot;
