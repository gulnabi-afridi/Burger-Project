import React, { useEffect, useState } from "react";
import Order from "../Checkout/order/order";
import "./Orders.css";
import axios from "../../axios-orders";
import Spanner from "../Spinner/Spinner";
const Orders = () => {
  const [Orders, setOrders] = useState([]);
  const [loading, Set_Loading] = useState(true);
  useEffect(() => {
    axios
      .get("/orders.json")
      .then((response) => {
        let tempOrders = [];
        for (let key in response.data) {
          tempOrders.push({
            ...response.data[key],
          });
          Set_Loading(false);
        }
        setOrders(tempOrders);
      })
      .catch((error) => {
        console.log(error);
        Set_Loading(false);
      });
  });
  const order = Orders.map((order, index) => {
    return (
      <Order ingredient={order.ingredient} address={order.customer}></Order>
    );
  });
  return (
    <div className="orders">
      <h3 style={{ textAlign: "center" }}>
        Total number of Orders: {Orders.length}
      </h3>
      {loading ? <Spanner topMargin="4rem" /> : order}
    </div>
  );
};
export default Orders;
