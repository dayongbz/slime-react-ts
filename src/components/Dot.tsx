import React, { useRef, useEffect, useState } from 'react'

function Dot(props: any) {
  const [className, setClassName] = useState<string>("dot");
  const dotRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<Array<HTMLDivElement>>(null);

  const onMouseEnter = (e: any) => {
    if (dotRef.current && e) {
      const { clientWidth: size } = e.target;
      console.dir(size)
      setClassName("wrapper")
    }
  }

  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.addEventListener("mouseenter", onMouseEnter, { once: true })
    }
  })
  return (
    <div ref={dotRef} className={className} style={{ width: props.size, height: props.size }}>
      {}
    </div>
  )
}

export default Dot