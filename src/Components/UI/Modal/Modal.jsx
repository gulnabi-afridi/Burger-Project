import React from "react";
import BackDrop from "../BackDrop/BackDrop";
import { motion } from "framer-motion";
import "./Modal.css";
const modalMotion = {
  hidden: {
    opacity: 0,
    y: "-300px",
  },
  visible: {
    opacity: 1,
    y: "0px",
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
function Modal(props) {
  {
    return (
      <div>
        <motion.div
          variants={modalMotion}
          initial="hidden"
          animate="visible"
          className="Modal"
        >
          {props.children}
        </motion.div>
        <BackDrop
          disableBackDrop={props.disableBackDrop}
          showBackDrop={props.disableModal}
        ></BackDrop>
      </div>
    );
  }
}
export default Modal;
