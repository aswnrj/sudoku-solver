import React, { useState } from "react";

export default (props) => {
  const [inputNum, setInputNum] = useState("");
  const i = Math.floor(props.ind / 9);
  const j = props.ind % 9;
  const [style, setStyle] = useState({});

  function handleChange(event) {
    const currentInput = parseInt(event.target.value);
    if (currentInput > 9 || currentInput < 1) {
      props.setArray((prevArray) => {
        prevArray[i][j] = "";
        return prevArray;
      });
      alert("Enter a number in the range 1-9")
      setInputNum(currentInput);
    } else {
      props.setArray((prevArray) => {
        prevArray[i][j] = currentInput;
        return prevArray;
      });
      setInputNum(currentInput);
      setStyle({fontWeight : "900"});
    }
    console.log(props.array);
  }

  return (
    <input
      className="input-box"
      type="number"
      min="1"
      max="9"
      onChange={handleChange}
      value={props.array[i][j]}
      id={"cell" + props.ind}
      style={style}
    />
  );
};
