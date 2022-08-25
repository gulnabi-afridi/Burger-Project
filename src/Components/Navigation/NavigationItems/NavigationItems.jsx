import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";
function NavigationItems() {
  return (
    <div className="items">
      <ul>
        <NavigationItem link={"/"} exact>
          Burger Builder
        </NavigationItem>

        <NavigationItem link={"/orders"}>Orders</NavigationItem>
      </ul>
    </div>
  );
}
export default NavigationItems;
