export default (array) => {
  function check(i, j) {
    for (let x = 0; x < 9; x++) {
      if (x !== i && array[x][j] === array[i][j]) return false;
    }
    for (let x = 0; x < 9; x++) {
      if (x !== j && array[i][x] === array[i][j]) return false;
    }
    let x = Math.floor(i / 3) * 3;
    let y = Math.floor(j / 3) * 3;
    let c1 = 0;
    while (c1 < 3) {
      let c2 = 0;
      while (c2 < 3) {
        if (x + c1 !== i || y + c2 !== j) {
          if (array[x + c1][y + c2] === array[i][j]) {
            return false;
          }
        }
        c2++;
      }
      c1++;
    }
    return true;
  }

  function fill(i, j) {
    if (array[i][j] === "") {
      for (let x = 1; x <= 9; x++) {
        array[i][j] = x;
        if (check(i, j)) {
          if (i === 8 && j === 8) {
            flag = true;
            return;
          }
          if (j === 8) {
            fill(i + 1, 0);
          } else {
            fill(i, j + 1);
          }
          if (flag) return;
        }
      }
      array[i][j] = "";
    } else {
      if (i === 8 && j === 8) {
        flag = true;
        return;
      }
      if (j === 8) {
        fill(i + 1, 0);
      } else {
        fill(i, j + 1);
      }
    }
  }

  function checkValidArray(array) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (array[i][j] !== "") {
          if (!check(i, j)) {
            flag = false;
            break;
          }
        }
      }
      if (!flag) break;
    }
  }

  let flag = true;
  checkValidArray(array);
  if (!flag) {
    return -1;
  } else {
    flag = false;
    fill(0, 0);

    if (flag) {
      return array;
    } else {
      return -1;
    }
  }
};
