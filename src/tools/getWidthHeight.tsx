const getWidthHeight = (img: HTMLImageElement, screenSize: any) => {
  let { width, height } = img;
  let [maxWidth, maxHeight] = screenSize;
  const profileHeight = 125;
  const padding = 10;
  const result: any = { width: 0, height: 0 };
  maxWidth = maxWidth - padding * 2;
  maxHeight = maxHeight - padding * 2 - profileHeight;
  if (width >= height) {
    result.width = maxWidth;
    result.height = height * (maxWidth / width);
  } else {
    result.width = (maxHeight / height) * width;
    result.height = maxHeight;
  }
  return result;
};

export default getWidthHeight;
