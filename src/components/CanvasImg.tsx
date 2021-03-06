import React, { memo, useRef, useEffect } from "react";
import getWidthHeight from "../tools/getWidthHeight";

const CanvasImg = memo(({ name, group, img, screenSize, dispatch }: any) => {
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
    // when img element loaded, dispatch Img ctx arr state.
    if (canvasRef.current && e.target) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const imgT = e.target;
      const size = getWidthHeight(imgT, screenSize);
      const ctx = setCanvas(canvas, imgT, size.width, size.height);
      dispatch({
        type: "SET_IMG_CTX_ARR",
        name: `${group}/${name}/${img}`,
        ctx,
        img: imgT,
      });
    }
  };

  useEffect(() => {
    // dispatch Img ctx arr state.
    if (canvasRef.current && imgRef.current) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const imgT = imgRef.current;
      const size = getWidthHeight(imgT, screenSize);
      const ctx = setCanvas(canvas, imgT, size.width, size.height);
      dispatch({
        type: "SET_IMG_CTX",
        name: `${group}/${name}/${img}`,
        ctx,
        img: imgT,
      });
    }
  }, [dispatch, group, img, name, screenSize]);

  return (
    <div className={`${name}-wrapper`}>
      <img
        ref={imgRef}
        onLoad={onLoad}
        className={`name/${img} none`}
        alt={name}
        src={`./img/${group}/${name}/${img}`}
      />
      <canvas ref={canvasRef} className={name}></canvas>
    </div>
  );
});

export default CanvasImg;
