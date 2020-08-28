const getWidthHeight = (img, screenSize) => {
  const { width, height } = img;
  let [maxWidth, maxHeight] = screenSize;
  const profileHeight = 125;
  const padding = 10;
  maxWidth = maxWidth - padding * 2;
  maxHeight = maxHeight - padding * 2 - profileHeight;
  if (width >= height) {
    return { width: maxWidth, height: (height * maxWidth) / width };
  } else if (width < height) {
    return { width: (width * maxHeight) / height, height: maxHeight };
  }
};

console.log(getWidthHeight({ width: 500, height: 750 }, [1080, 1039]));
