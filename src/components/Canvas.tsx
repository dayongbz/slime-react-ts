import React, { memo } from "react";

const Canvas = memo(({ name }: any) => {
  return <canvas className={name} key={name}></canvas>;
});

export default Canvas;
