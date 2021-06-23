import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";
import Buttons from "./Buttons";
import Solve from "./Solve";

function App() {

  let emptyArray = new Array(9)
  for (let i = 0; i < 9; i++) {
    let tmp = new Array(9);
    for (let j = 0; j < 9; j++) {
      tmp[j] = "";
    }
    emptyArray[i] = tmp;
  }
  let [array, setArray] = useState(emptyArray);

  function setArrayInd(ind, num) {
    setArray(prevArray => {
      const i = Math.floor(ind/9);
      const j = ind%9;
      prevArray[i][j] = num;
      return prevArray
    })
    console.log(array);
  }
   
  function solve() {
    console.log("HI")
    setArray(Solve(array));
  }

  function restart() {
    setArray(emptyArray);
  }

  return (
    <div>
    <Header />
    <Board setArrayInd={setArrayInd}/>
    <Buttons solve={solve} restart={restart}/>
    <Footer />
    </div>
  );
}

export default App;
