import React from "react";

export default (props) => {
  return (
    <div className="buttons">
      <button onClick={props.restart} className="btn btn-danger btn-lg restart">
        Restart
      </button>
      <button onClick={props.solve} className="btn btn-success btn-lg solve">
        Solve
      </button>
    </div>
  );
};
