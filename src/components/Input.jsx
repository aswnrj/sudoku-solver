import React, { useState } from "react";

export default (props) => {

  const [inputNum, setInputNum] = useState("");
  const [redBorder, setRedBorder] = useState(false);
  function checkLength(event) {
    const currentInput = event.target.value;
    if (currentInput > 9 || currentInput < 1) {
      setInputNum("");
      setRedBorder(true);
    } else {
        setInputNum(currentInput);
        props.setArrayInd(props.ind, currentInput);
      setRedBorder(false);
    }
  }

  function handleClick() {
      setRedBorder(false);
  }

  return (
    <input
      className="input-box"
      type="number"
      min="1"
      max="9"
      onChange={checkLength}
      onClick={handleClick}
      value={inputNum}
      id={"cell" + props.ind}
      style={redBorder ? { border: "1px solid red" } : {}}
    />
  );
};
