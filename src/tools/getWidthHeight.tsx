const getWidthHeight = (img: HTMLImageElement, screenSize: any): any => {
  let { width, height } = img;
  let [maxWidth, maxHeight] = screenSize;
  const ratio = width >= height ? width / height : height / width;
  const profileHeight = 125;
  const padding = 10;
  const result: any = { width: 0, height: 0 };
  maxWidth = maxWidth - padding * 2;
  maxHeight = maxHeight - padding * 2 - profileHeight;
  if (width >= height) {
    result.width = maxWidth;
    result.height = maxWidth / ratio;
    if (result.height > maxHeight) {
      result.width = maxWidth - (result.height - maxHeight) * ratio;
      result.height = maxHeight;
    }
  } else {
    result.width = maxHeight / ratio;
    result.height = maxHeight;
    if (result.width > maxWidth) {
      result.height = maxHeight - (result.width - maxWidth) * ratio;
      result.width = maxWidth;
    }
  }
  return result;
};

export default getWidthHeight;
