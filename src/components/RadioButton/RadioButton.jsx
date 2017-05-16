import * as React from "react";
import "./RadioButton.css";

export const RadioButton = (props) => {
  const className = props.className ? `${props.className} radio-button` : "radio-button";

  return (
    <label className="radio-label">
      <input type="radio"
             className={className}
             name={props.name}
             checked={props.checked}
             onChange={props.onChange}
      />
      {props.label}
    </label>
  )
};