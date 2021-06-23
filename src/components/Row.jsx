import React from "react";
import Input from "./Input";

export default (props) => {
    return (
        <tr>
        <td><Input setArrayInd={props.setArrayInd} ind={props.ind+0} /></td>
        <td><Input setArrayInd={props.setArrayInd} ind={props.ind+1} /></td>
        <td><Input setArrayInd={props.setArrayInd} ind={props.ind+2} /></td>
        <td><Input setArrayInd={props.setArrayInd} ind={props.ind+3} /></td>
        <td><Input setArrayInd={props.setArrayInd} ind={props.ind+4} /></td>
        <td><Input setArrayInd={props.setArrayInd} ind={props.ind+5} /></td>
        <td><Input setArrayInd={props.setArrayInd} ind={props.ind+6} /></td>
        <td><Input setArrayInd={props.setArrayInd} ind={props.ind+7} /></td>
        <td><Input setArrayInd={props.setArrayInd} ind={props.ind+8} /></td>
        </tr>
    );
};