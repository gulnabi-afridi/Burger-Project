import React from "react";
import "./orderSummary.css";
import Button from "../../Button/Button";
import { motion } from "framer-motion";

const sumaryMotion = {
  hidden: {
    y: "-300px",
  },
  visible: {
    y: "0px",
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

function OrderSummary(props) {
  const { totalPrice, ...tempIngr } = props.Ingredient;
  //converting object to array
  const ingArray = Object.keys(tempIngr);
  const ingList = ingArray.map((ingKey) => {
    return (
      <li>
        {ingKey} : {tempIngr[ingKey]}
      </li>
    );
  });
  return (
    <motion.div
      variants={sumaryMotion}
      initial="hidden"
      animate="visible"
      className="orderSummary"
    >
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredient</p>
      <p className="list">{ingList}</p>
      <p style={{ fontWeight: "bold" }}>Total Price: {props.price}</p>
      <p>Continoue to CheckOut ?</p>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Button btnType={"Cancel"} clicked={props.disabledModal}>
          CANCEL
        </Button>
        <Button btnType={"Continoue"} clicked={props.purchaceContinoue}>
          CONTINUE
        </Button>
      </div>
    </motion.div>
  );
}
export default OrderSummary;
