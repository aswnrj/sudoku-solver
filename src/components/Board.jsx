import React from "react";
import Row from "./Row";

export default () => {

  return (
      <table className="board" cellSpacing="0" cellPadding="0" border="0">
        <Row ind={0}/>
        <Row ind={9}/>
        <Row ind={18}/>
        <Row ind={27}/>
        <Row ind={36}/>
        <Row ind={45}/>
        <Row ind={54}/>
        <Row ind={63}/>
        <Row ind={72}/>
      </table>
  );
};
