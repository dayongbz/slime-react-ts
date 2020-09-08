import React, { memo } from "react";
import CanvasImg from "../components/CanvasImg";

const CanvasWrapper = memo(({ selectedImg, screenSize, dispatch }: any) => {
  return (
    <div id="canvas-wrapper">
      {selectedImg.map((item: any) => (
        <CanvasImg
          name={item.name}
          group={item.group}
          img={item.img}
          key={`${item.group}/${item.name}/${item.img}`}
          screenSize={screenSize}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
});

export default CanvasWrapper;
