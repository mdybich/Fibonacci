import * as React from "react";
import "./Button.css";

export const Button = (props) => {
  const buttonClassName = props.className ? `button ${props.className}` : "button";
  return (
    <button className={buttonClassName} onClick={props.onClick}>{props.label}</button>
  )
}