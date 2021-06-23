import React from "react";
import Row from "./Row";

export default (props) => {
  return (
    <table className="board" cellSpacing="0" cellPadding="0" border="0">
      <tbody>
        <Row setArrayInd={props.setArrayInd} ind={0} />
        <Row setArrayInd={props.setArrayInd} ind={9} />
        <Row setArrayInd={props.setArrayInd} ind={18} />
        <Row setArrayInd={props.setArrayInd} ind={27} />
        <Row setArrayInd={props.setArrayInd} ind={36} />
        <Row setArrayInd={props.setArrayInd} ind={45} />
        <Row setArrayInd={props.setArrayInd} ind={54} />
        <Row setArrayInd={props.setArrayInd} ind={63} />
        <Row setArrayInd={props.setArrayInd} ind={72} />
      </tbody>
    </table>
  );
};
