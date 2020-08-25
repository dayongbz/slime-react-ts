import React, { useRef, useEffect, useState, memo } from 'react'

const Dot = memo((props: any) => {
  const [dots, setDots] = useState<Array<any>>([]);
  const dotRef = useRef<HTMLDivElement>(null)

  const onMouseEnter = (e: any) => {
    if (dotRef.current && e) {
      dotRef.current.classList.remove("dot");
      dotRef.current.classList.add("wrapper");
      setDots([1, 2, 3, 4]);
    }
  }

  useEffect(() => {
    if (dotRef.current) {
      if (dotRef.current.clientWidth >= 20) {
        dotRef.current.addEventListener("mouseenter", onMouseEnter, { once: true })
      }
    }
  },[props.size])
  return (
    <div ref={dotRef} className="dot" style={{ width: props.size, height: props.size }}>
      {dots.map((item) => {
        return <Dot size={props.size / 2} key={item.toString()} />
      })}
    </div>
  )
})

export default Dot