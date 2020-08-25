import React, { useRef, useEffect, useState, memo } from "react";

const Dot = memo((props: any) => {
  const [dots, setDots] = useState<Array<any>>([]);
  const dotRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = (e: any) => {
    if (dotRef.current && e) {
      dotRef.current.classList.remove("dot");
      dotRef.current.classList.add("wrapper");
      setDots([1, 2, 3, 4]);
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (dotRef.current) {
      const dot = dotRef.current;
      const x = dot.offsetLeft + dot.offsetWidth / 2,
        y = dot.offsetTop + dot.offsetHeight / 2;
      if (props.ctx) {
        const colorData = props.ctx.getImageData(x, y, 1, 1).data;
        dot.style.backgroundColor = `rgb(${colorData[0]},${colorData[1]},${colorData[2]})`;
      }
      if (dot.clientWidth >= 20) {
        dot.addEventListener("mouseenter", onMouseEnter, { once: true });
      }
    }
  }, [props.size, props.ctx]);
  return (
    <div
      ref={dotRef}
      className="dot"
      style={{ width: props.size, height: props.size }}
    >
      {dots.map((item) => {
        return (
          <Dot size={props.size / 2} key={item.toString()} ctx={props.ctx} />
        );
      })}
    </div>
  );
});

export default Dot;
