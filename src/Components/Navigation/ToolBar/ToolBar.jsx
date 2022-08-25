import React from "react";
import "./ToolBar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const ToolBar = (props) => {
  return (
    <div className="toolBar">
      <div
        style={{ paddingLeft: "20px", fontWeight: "bold", cursor: "pointer" }}
        onClick={props.click}
      >
        Menu
      </div>
      <Logo></Logo>
      <div className="navigate">
        <NavigationItems></NavigationItems>
      </div>
    </div>
  );
};
export default ToolBar;
