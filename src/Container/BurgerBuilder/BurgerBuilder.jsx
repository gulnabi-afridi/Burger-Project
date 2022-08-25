import React, { useState } from "react";
import Auxiliary from "../../Hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";
import BurgerControls from "../../Components/Burger/BurgerControls/BurgerControls.jsx";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/UI/Modal/orderSummary/orderSummary";
function BurgerBuilder(props) {
  const [ingredient, setIngredient] = useState({
    totalPrice: 0,
    Meat: 0,
    Cheese: 0,
    Salad: 0,
    Bacon: 0,
  });
  const [purchaseable, setPurchaseable] = useState(false);
  const ingredient_Price = {
    Meat: 60,
    Cheese: 30,
    Salad: 20,
    Bacon: 15,
  };
  const [disableModal, setdisableMoodal] = useState(false);
  //managing modal
  function DisableModal() {
    return setdisableMoodal(!disableModal);
  }
  //purchaseContinoue

  function purchaceContinue() {
    const queryParms = [];
    for (let i in ingredient) {
      queryParms.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(ingredient[i])
      );
    }
    const queryString = queryParms.join("&");
    props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  }
  //setting purchaseable
  function Purchaseable() {
    const { totalPrice, ...copyIngredient } = ingredient;
    //converting copyIngredient object to array
    const ingredientArray = Object.keys(copyIngredient); //result[meat, cheese, salad, bacon] //hamey keys nahe en ky values chahe hy for that
    const ingValue = ingredientArray.map((igKey) => {
      return ingredient[igKey];
    });
    //for calculating sum of array we used reduced method
    const sum = ingValue.reduce((pre, curr) => {
      return pre + curr;
    }, 0);
    if (sum <= 1) {
      setPurchaseable(true);
    }
  }
  //adding ingredients
  function addIngredients(type) {
    const oldCount = ingredient[type];
    let newCount = oldCount + 1;
    let ingPrice = ingredient_Price[type];
    ingredient.totalPrice = ingPrice + ingredient.totalPrice;
    //******************************************************************* */
    if (type === "Meat") {
      setIngredient((previousValue) => {
        return {
          ...previousValue,
          Meat: newCount,
        };
      });
    }
    if (type === "Cheese") {
      setIngredient((previousValue) => {
        return {
          ...previousValue,
          Cheese: newCount,
        };
      });
    }
    if (type === "Salad") {
      console.log(newCount);
      setIngredient((previousValue) => {
        return {
          ...previousValue,
          Salad: newCount,
        };
      });
    }
    if (type === "Bacon") {
      setIngredient((previousValue) => {
        return {
          ...previousValue,
          Bacon: newCount,
        };
      });
    }
    Purchaseable();
  }
  //******************************************************************* */
  //removing ingredients from object
  function removeIngredient(type) {
    const oldCount = ingredient[type];
    const newCount = oldCount - 1;
    let ingPrice = ingredient_Price[type];
    ingredient.totalPrice = ingredient.totalPrice - ingPrice;
    if (oldCount <= 0) {
      return;
    }
    //******************************************************************* */
    if (type === "Meat") {
      setIngredient((previousValue) => {
        return {
          ...previousValue,
          Meat: newCount,
        };
      });
    }
    if (type === "Cheese") {
      setIngredient((previousValue) => {
        return {
          ...previousValue,
          Cheese: newCount,
        };
      });
    }
    if (type === "Salad") {
      setIngredient((previousValue) => {
        return {
          ...previousValue,
          Salad: newCount,
        };
      });
    }
    if (type === "Bacon") {
      setIngredient((previousValue) => {
        return {
          ...previousValue,
          Bacon: newCount,
        };
      });
    }
    Purchaseable();
    //******************************************************************* */
  }
  //creating copy of state destructing of object, copy all the property except totalPrice.
  const { totalPrice, ...disabledLessButton } = ingredient;
  //for in loop
  for (const key in disabledLessButton) {
    disabledLessButton[key] = disabledLessButton[key] <= 0;
  }

  return (
    <Auxiliary>
      {disableModal ? (
        <Modal disableModal={disableModal} disableBackDrop={DisableModal}>
          <OrderSummary
            Ingredient={ingredient}
            disabledModal={DisableModal}
            purchaceContinoue={purchaceContinue}
            price={ingredient.totalPrice}
          ></OrderSummary>
        </Modal>
      ) : null}
      <Burger burgerIngredient={ingredient}></Burger>
      <BurgerControls
        add={addIngredients}
        rem={removeIngredient}
        price={ingredient.totalPrice}
        disabled={disabledLessButton}
        purchace={purchaseable}
        disableModal={DisableModal}
      ></BurgerControls>
    </Auxiliary>
  );
}
export default BurgerBuilder;
