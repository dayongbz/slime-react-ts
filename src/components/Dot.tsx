import React, { useRef, useEffect, useState, memo } from "react";

const Dot = memo(({ ctx, size, name }: any) => {
  const [dots, setDots] = useState<Array<any>>([]);
  const dotRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = (e: any) => {
    // element what has dot class remove dot class then add wrapper class
    if (dotRef.current && e) {
      dotRef.current.classList.remove("dot");
      dotRef.current.classList.add("wrapper");
      setDots([1, 2, 3, 4]);
    }
  };

  useEffect(() => {
    // init dot setting
    if (dotRef.current && ctx[name]) {
      const dot = dotRef.current;
      let x = dot.offsetLeft + dot.offsetWidth / 2,
        y = dot.offsetTop + dot.offsetHeight / 2;
      const colorData = ctx[name].ctx.getImageData(x, y, 1, 1).data;
      dot.style.backgroundColor = `rgb(${colorData[0]},${colorData[1]},${colorData[2]})`;
      if (dot.clientWidth >= 10) {
        dot.addEventListener("mouseenter", onMouseEnter, { once: true });
      }
    }
  }, [size, ctx, name]);
  return (
    <div ref={dotRef} className="dot" style={{ width: size, height: size }}>
      {dots.map((item) => {
        return (
          <Dot size={size / 2} key={item.toString()} ctx={ctx} name={name} />
        );
      })}
    </div>
  );
});

export default Dot;
