import React, { memo } from "react";
import CanvasImg from "./CanvasImg";

const CanvasImgWrapper = memo(
  ({ member, screenSize, ctxState, setCtxState }: any) => {
    return (
      <div id="canvas-wrapper">
        {member.map((item: string) => {
          return (
            <CanvasImg
              name={item}
              key={item}
              screenSize={screenSize}
              ctxState={ctxState}
              setCtxState={setCtxState}
            />
          );
        })}
      </div>
    );
  }
);

export default CanvasImgWrapper;
