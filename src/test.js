const getPrimeNum = (width) => {
  const result = [1];
  for (let i = 2; i < width; i++) {
    if (i > 10) {
      return result;
    }
    if (width % i === 0) {
      result.push(i);
    }
  }
  return result;
};

const getLeast = (arr, a, b) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(`arr[i] = ${arr[i]}\na / arr[i] = ${a / arr[i]}\n=======`);
    result.push(b / (a / arr[i]));
  }
  return result;
};

console.log(getLeast(getPrimeNum(700), 700, 933));
