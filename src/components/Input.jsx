import React, { useState } from "react";

export default (props) => {

  return (
    <input
      className="input-box"
      type="number"
      min="1"
      max="9"
      id={"cell" + props.ind}
    />
  );
};
