import React, { memo, useRef } from "react";

const CanvasImg = memo(({ name, screenSize, ctxState, setCtxState }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getWidthHeight = (img: HTMLImageElement) => {
    let { width, height } = img;
    if (width < height) {
      if (width > screenSize[0] * 0.8) {
        height = (height / width) * screenSize[0] * 0.8;
        width = screenSize[0] * 0.8;
      }
      // if (height > screenSize[1] * 0.5) {
      //   width = (width / height) * screenSize[1] * 0.5;
      //   height = screenSize[1] * 0.5;
      // }
    } else if (width > height) {
    }

    return { width, height };
  };

  const setCanvas = (
    // set canvas size and draw image and return ctx
    canvas: HTMLCanvasElement,
    img: HTMLImageElement,
    width: number,
    height: number
  ): CanvasRenderingContext2D => {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    return ctx;
  };

  const onLoad = (e: any) => {
    if (canvasRef.current && e.target) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const img = e.target;
      const size = getWidthHeight(img);
      const ctx = setCanvas(canvas, img, size.width, size.height);
      setCtxState({ ...ctxState, [name]: ctx });
    }
  };

  return (
    <div className={`${name}-wrapper`}>
      <img
        onLoad={onLoad}
        className={name}
        alt={name}
        src={`./img/${name}.jpg`}
      />
      <canvas ref={canvasRef} className={name}></canvas>
    </div>
  );
});

export default CanvasImg;
