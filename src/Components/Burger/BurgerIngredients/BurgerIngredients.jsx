import React from "react";
import propTypes from "prop-types";
import "./BurgerIngredient.css";
function BurgerIngredient(props) {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom": {
      ingredient = <div className="BreadBottom"></div>;
      break;
    }
    case "bread-top": {
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds2"></div>
          <div className="Seeds1"></div>
        </div>
      );
      break;
    }
    case "Meat": {
      ingredient = <div className="Meat"></div>;
      break;
    }
    case "Cheese": {
      ingredient = <div className="Cheese"></div>;
      break;
    }
    case "Salad": {
      ingredient = <div className="Salad"></div>;
      break;
    }
    case "Bacon": {
      ingredient = <div className="Bacon"></div>;
      break;
    }
  }
  return ingredient;
}
BurgerIngredient.propTypes = {
  type: propTypes.string.isRequired,
};
export default BurgerIngredient;
