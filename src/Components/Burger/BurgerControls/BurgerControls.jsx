import React from "react";
import "./BurgerControls.css";
import BurgerControl from "../BurgerControl/BurgerControl";
const data = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "Meat", type: "Meat" },
];
function BurgerControls(props) {
  let control = data.map((control) => {
    return (
      <BurgerControl
        label={control.label}
        added={() => props.add(control.type)}
        remove={() => props.rem(control.type)}
        disabled={props.disabled[control.type]}
      ></BurgerControl>
    );
  });
  return (
    <div id="burgerControls">
      <div className="control">
        <p
          style={{ textAlign: "center", fontWeight: "bold", marginTop: "-5px" }}
        >
          Current Price: {props.price}
        </p>
        {control}
        <button
          className="orderButton"
          onClick={props.disableModal}
          disabled={!props.purchace}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default BurgerControls;
