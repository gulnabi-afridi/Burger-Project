import React, { useState } from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary.css";
const CheckOut_Summary = (props) => {
  return (
    <div className="checkoutSummary">
      <h1>We hope it tastes well!!</h1>
      <Burger burgerIngredient={props.ingredient}></Burger>
      <div className="buttons">
        <Button clicked={props.cancelHandler} btnType="Cancel" fontSize="24px">
          Cancel
        </Button>
        <Button
          clicked={props.continoueHandler}
          btnType="Continoue"
          fontSize="24px"
        >
          Continoue
        </Button>
      </div>
    </div>
  );
};

export default CheckOut_Summary;
