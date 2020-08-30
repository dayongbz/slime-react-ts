const getWidthHeight = (img, screenSize) => {
  let { width, height } = img;
  let [maxWidth, maxHeight] = screenSize;
  const ratio = width >= height ? width / height : height / width;
  console.log(ratio);
  const profileHeight = 125;
  const padding = 10;
  const result = { width: 0, height: 0 };
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

console.log(getWidthHeight({ width: 500, height: 750 }, [1080, 1039]));
