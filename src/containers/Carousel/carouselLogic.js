export const setCarousel = (data, newStartIndex, display) => {
  const length = data.length;
  console.log(`length is ${length}`);
  //   const display = [];
  //   display[0] = data[mainIndex];
  //   display[1] = data[mainIndex + 1];
  //   display[2] = data[(mainIndex + 2) % length];
  for (let i = 0; i < 3; i++) {
    const newInd = (newStartIndex + i + length) % length;
    console.log(`newInd is ${newInd}`);
    display[i] = (newStartIndex + i + length) % length;
  }
  //   return display;
};
