import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button
      style={{
        fontSize: `${props.fontSize}`,
        padding: `${props.padding} ${props.paddingL}`,
        borderRadius: `${props.radius}`,
      }}
      className={`button ${props.btnType}`}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};
export default Button;
