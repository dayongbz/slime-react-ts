const getWidthHeight = (img: HTMLImageElement, screenSize: any) => {
  let { width, height } = img;
  let [maxWidth, maxHeight] = screenSize;
  const profileHeight = 125;
  const padding = 10;
  maxWidth = maxWidth - padding * 2;
  maxHeight = maxHeight - padding * 2 - profileHeight;
  if (width >= height) {
    return { width: maxWidth, height: (height * maxWidth) / width };
  } else {
    return { width: (width * maxHeight) / height, height: maxHeight };
  }
};

export default getWidthHeight;
