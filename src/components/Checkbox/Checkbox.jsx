import * as React from "react";
import "../OptionInput.css";
import "./Checkbox.css";

export const Checkbox = (props) => {
  return (
    <label className="checkbox-label">
      <input type="checkbox"
             className="option-input"
             checked={props.checked}
             onChange={props.onChange}
      />
      {props.label}
    </label>
  )
};