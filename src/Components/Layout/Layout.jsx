import React, { useState } from "react";
import Auxiliary from "../../Hoc/Auxiliary";
import ToolBar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const Layout = (props) => {
  const [sideDrawer, setSideDrawer] = useState(false);
  function handleSideDrawer() {
    return setSideDrawer(!sideDrawer);
  }
  return (
    <Auxiliary>
      {sideDrawer ? <SideDrawer click={handleSideDrawer}></SideDrawer> : null}
      <ToolBar click={handleSideDrawer}> </ToolBar>
      <main>{props.children}</main>
    </Auxiliary>
  );
};
export default Layout;
