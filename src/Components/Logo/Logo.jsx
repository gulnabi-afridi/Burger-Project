import React from "react";
import burgerLogo from "../../Assets/Images/burgerLogo.png";
import "./Logo.css";
const Logo = (props) => {
  return (
    <div className="logo">
      <img
        style={{
          height: props.height,
          width: props.width,
        }}
        src={burgerLogo}
        alt="burgerLogo"
      ></img>
    </div>
  );
};
export default Logo;
