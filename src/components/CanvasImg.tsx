import React, { memo, useRef, useEffect } from "react";
import getWidthHeight from "../tools/getWidthHeight";

const CanvasImg = memo(({ name, screenSize, dispatch }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

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
      const size = getWidthHeight(img, screenSize);
      const ctx = setCanvas(canvas, img, size.width, size.height);
      dispatch({ type: "SET_IMG_CTX", name, ctx, img });
    }
  };

  useEffect(() => {
    if (canvasRef.current && imgRef.current) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const img = imgRef.current;
      const size = getWidthHeight(img, screenSize);
      const ctx = setCanvas(canvas, img, size.width, size.height);
      dispatch({ type: "SET_IMG_CTX", name, ctx, img });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize, name]);

  return (
    <div className={`${name}-wrapper`}>
      <img
        ref={imgRef}
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
