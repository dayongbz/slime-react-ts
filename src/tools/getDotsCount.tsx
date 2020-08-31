const getDotsCount = (size: any, dotSize: number): number => {
  const { height } = size;
  return Math.ceil(height / dotSize) * 2;
};

export default getDotsCount;
