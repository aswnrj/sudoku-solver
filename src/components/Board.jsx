import React from "react";
import Row from "./Row";

export default (props) => {
  return (
    <table
      className="board"
      cellSpacing="0"
      cellPadding="0"
      border="0">
      <tbody>
        <Row setArray={props.setArray} array={props.array} ind={0} />
        <Row setArray={props.setArray} array={props.array} ind={9} />
        <Row setArray={props.setArray} array={props.array} ind={18} />
        <Row setArray={props.setArray} array={props.array} ind={27} />
        <Row setArray={props.setArray} array={props.array} ind={36} />
        <Row setArray={props.setArray} array={props.array} ind={45} />
        <Row setArray={props.setArray} array={props.array} ind={54} />
        <Row setArray={props.setArray} array={props.array} ind={63} />
        <Row setArray={props.setArray} array={props.array} ind={72} />
      </tbody>
    </table>
  );
};
