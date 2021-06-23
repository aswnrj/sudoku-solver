import React, { useState } from "react";

export default (props) => {
  const [inputNum, setInputNum] = useState("");
  const [redBorder, setRedBorder] = useState(false);
  const i = Math.floor(props.ind / 9);
  const j = props.ind % 9;

  function handleChange(event) {
    const currentInput = event.target.value;
    if (currentInput > 9 || currentInput < 1) {
      props.setArray((prevArray) => {
        prevArray[i][j] = "";
        return prevArray;
      });
      setInputNum(currentInput);
      setRedBorder(true);
    } else {
      props.setArray((prevArray) => {
        prevArray[i][j] = currentInput;
        return prevArray;
      });
      setInputNum(currentInput);
      setRedBorder(false);
    }
    console.log(props.array);
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
      onChange={handleChange}
      onClick={handleClick}
      value={props.array[i][j]}
      id={"cell" + props.ind}
      style={redBorder ? { border: "1px solid red" } : {}}
    />
  );
};
