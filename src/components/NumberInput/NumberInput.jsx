import * as React from "react";
import "./NumberInput.css";

export const NumberInput = (props) => {
  return (
    <input type="number"
           className="number-input"
           value={props.value}
           onChange={props.onChange}
    />
  )
};