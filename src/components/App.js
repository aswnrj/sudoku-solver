import React, { useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";
import Buttons from "./Buttons";
import Solve from "./Solve";

function App() {
  let emptyArray = new Array(9);
  for (let i = 0; i < 9; i++) {
    let tmp = new Array(9);
    for (let j = 0; j < 9; j++) {
      tmp[j] = "";
    }
    emptyArray[i] = tmp;
  }
  let [array, setArray] = useState(emptyArray);
  const [tmp, setTmp] = useState(false);
  function solve() {
    setArray(prevArray => {
      const solvedArray = Solve(prevArray);
      if (solvedArray===-1) {
        alert("This puzzle is incorrect/does not have a solution.");
        return emptyArray;
      } else {
        return solvedArray;
      }
    });
    setTmp(!tmp);
  }
  function restart() {
    setArray(emptyArray);
    setTmp(!tmp);
  }

  return (
    <div>
      <Header />
      <Board setArray={setArray} array={array} />
      <Buttons solve={solve} restart={restart} />
      <Footer />
    </div>
  );
}

export default App;
