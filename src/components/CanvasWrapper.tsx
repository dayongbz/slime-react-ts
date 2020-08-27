import React, { memo } from "react";
import Canvas from "./Canvas";

const CanvasWrapper = memo(({ member }: any) => {
  return (
    <div id="canvas-wrapper">
      {member.map((item: string) => {
        return <Canvas className={item} key={item}></Canvas>;
      })}
    </div>
  );
});

export default CanvasWrapper;
