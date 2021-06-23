import React, { useState } from "react";
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

  function solve() {
    setArray(Solve(array));
  }

  function restart() {
    setArray(emptyArray);
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
