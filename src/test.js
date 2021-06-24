let emptyArray = new Array(9);
for (let i = 0; i < 9; i++) {
  let tmp = new Array(9);
  for (let j = 0; j < 9; j++) {
    tmp[j] = "";
  }
  emptyArray[i] = tmp;
}

emptyArray[1][2] = 3;
emptyArray[1][3] = 3;

// const array = [
//   [3, "", 6, 5, "", 8, 4, "", ""],
//   [5, 2, "", "", "", "", "", "", ""],
//   ["", 8, 7, "", "", "", "", 3, 1],
//   ["", "", 3, "", 1, "", "", 8, ""],
//   [9, "", "", 8, 6, 3, "", "", 5],
//   ["", 5, "", "", 9, "", 6, "", ""],
//   [1, 3, "", "", "", "", 2, 5, ""],
//   ["", "", "", "", "", "", "", 7, 4],
//   ["", "", 5, 2, "", 6, 3, "", ""],
// ];

const array = emptyArray;


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

let flag = true;

function checkValidArray(array) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (array[i][j] !== "") {
                if (!check(i, j)) {
                    flag = false;
                    break
                }
            }
        }
        if (!flag) break;
    }
}

checkValidArray(array);

if (!flag) {
    console.log("incorrect");
} else {
    let flag = false;
    
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
    
    fill(0, 0);
    
    if (flag) {
      for (let x = 0; x < 9; x++) {
        console.log(array[x].join(" "));
      }
    } else {
      console.log("Incorrect input");
    }
}

