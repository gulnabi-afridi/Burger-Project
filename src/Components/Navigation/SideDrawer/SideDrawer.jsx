import React, { useState } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Auxiliary from "../../../Hoc/Auxiliary";
import BackDrop from "../../UI/BackDrop/BackDrop";
import { motion } from "framer-motion";
import "./SideDrawer.css";
function SideDrawer(props) {
  return (
    <Auxiliary>
      <div id="sideDrawer">
        <BackDrop showBackDrop={true} disableBackDrop={props.click}></BackDrop>
        <motion.div
          initial={{ opacity: 0, x: "-150px" }}
          animate={{ opacity: 1, x: "0px" }}
          transition={{ type: "tween", duration: 0.5 }}
          className="sideDrawer"
        >
          <Logo width="85px" height="11%"></Logo>
          <div className="navigation">
            <NavigationItems></NavigationItems>
          </div>
        </motion.div>
      </div>
    </Auxiliary>
  );
}
export default SideDrawer;
