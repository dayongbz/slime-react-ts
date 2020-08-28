import React, { memo } from "react";
import CanvasImg from "./CanvasImg";

const CanvasImgWrapper = memo(({ member, screenSize, dispatch }: any) => {
  return (
    <div id="canvas-wrapper">
      {member.map((item: string) => {
        return (
          <CanvasImg
            name={item}
            key={item}
            screenSize={screenSize}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
});

export default CanvasImgWrapper;
