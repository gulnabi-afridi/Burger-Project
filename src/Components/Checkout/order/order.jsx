import React, { useEffect, useState } from "react";
import "./order.css";
const Order = (props) => {
  const [orderCount, Set_Order_Count] = useState(0);

  let IngList = [];
  for (let item in props.ingredient) {
    IngList.push(item + ": " + props.ingredient[item]);
  }
  return (
    <div className="order">
      <ul className="orderList">
        Ingredients :
        <div className="orderDiv">
          {IngList.map((each, index) => {
            return <li>{each}</li>;
          })}
        </div>
      </ul>
    </div>
  );
};
export default Order;
