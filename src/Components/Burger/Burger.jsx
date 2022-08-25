import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
import "./Burger.css";
function Burger(props) {
  //*********************how the object to array code work******************************** */
  //let obj = { mellon: 2, meet: 1, chesse: 3 };
  //var b = [...Array(obj.chesse)];
  //console.log(b); //array with length 3, undefined element.
  //******************************************************* */
  let { totalPrice, ...tempIngredient } = props.burgerIngredient;
  let transformedIngredient = Object.keys(tempIngredient).map((ig) => {
    return [...Array(tempIngredient[ig])].map((value, index) => {
      return <BurgerIngredient key={ig + index} type={ig}></BurgerIngredient>;
    });
  });
  // console.log(transformedIngredient);
  //**************************Reduce more clear**********************************
  // let obj = [["melon"], ["bacon"], ["salot"], ["green"]];
  // let newArray = obj.reduce((p, c) => {
  //   return p.concat(c);
  // }, []);
  // console.log(newArray);

  // let obj = [["melon", "potato", "melon"], ["bacon"], ["salot"], ["green"]];
  // obj.map((value) => {
  //   value.map((evalue) => {
  //     console.log(evalue);
  //   });
  // });

  //*********************************************************** */ */
  let oneArray = transformedIngredient.reduce((p, c) => {
    return p.concat(c);
  }, []);
  if (oneArray.length === 0) {
    transformedIngredient = (
      <p className="ingredientText" style={{ color: "white" }}>
        Please start adding ingredients
      </p>
    );
  }
  return (
    <div id="burger">
      <div className="Burger">
        <BurgerIngredient type="bread-top"></BurgerIngredient>
        {transformedIngredient}
        <BurgerIngredient type="bread-bottom"></BurgerIngredient>
      </div>
    </div>
  );
}
export default Burger;
