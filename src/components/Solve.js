export default (array) => {
    let emptyArray = new Array(9)
  for (let i = 0; i < 9; i++) {
    let tmp = new Array(9);
    for (let j = 0; j < 9; j++) {
      tmp[j] = "";
    }
    emptyArray[i] = tmp;
  }

  emptyArray[3][4] = 5;
  console.log(emptyArray);
  return emptyArray;
}