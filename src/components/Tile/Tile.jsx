import * as React from "react";
import "./Tile.css";

export const Tile = (props) => {
  return (
    <div className="tile">
      <div className="tile-header">{props.title}</div>
      <div className="tile-body">
        {props.children}
      </div>
    </div>
  )
};