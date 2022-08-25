import React from "react";
import "./BackDrop.css";
function BackDrop(props) {
  return props.showBackDrop ? (
    <div onClick={props.disableBackDrop} className="backDrop"></div>
  ) : null;
}
export default BackDrop;
