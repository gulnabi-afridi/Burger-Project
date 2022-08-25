import React, { useState, useEffect } from "react";
import CheckOut_Summary from "./CheckoutSummary/CheckoutSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Route, Switch } from "react-router-dom";
import "./Checkout.css";

const Checkout = (props) => {
  const [ingredient, setIngredient] = useState({});
  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    for (let parm of query.entries()) {
      ingredients[parm[0]] = +parm[1];
    }
    setIngredient(ingredients);
  }, []);
  const cancelHandler = () => {
    props.history.goBack();
  };
  const continoueHandler = () => {
    props.history.replace("/checkout/contact-form");
  };
  console.log(ingredient);
  return (
    <div className="checkout">
      <CheckOut_Summary
        ingredient={ingredient}
        cancelHandler={cancelHandler}
        continoueHandler={continoueHandler}
      ></CheckOut_Summary>
      <Route
        path={props.match.path + "/contact-form"}
        render={(props) => <CheckoutForm ingredient={ingredient} {...props} />}
      ></Route>
    </div>
  );
};
export default Checkout;
