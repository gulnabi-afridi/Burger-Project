import React from "react";
import "./BurgerControl.css";
function BurgerControl(props) {
  return (
    <div className="burgerControl">
      <div className="label">{props.label}</div>
      <div className="controlButton">
        <button onClick={props.remove} disabled={props.disabled}>
          Less
        </button>
        <button onClick={props.added}>More</button>
      </div>
    </div>
  );
}
export default BurgerControl;
