import * as React from "react";
import "../OptionInput.css";
import "./RadioButton.css";

export const RadioButton = (props) => {
  return (
    <label className="radio-label">
      <input type="radio"
             className="option-input radio-button"
             name={props.name}
             checked={props.checked}
             onChange={props.onChange}
      />
      {props.label}
    </label>
  )
};