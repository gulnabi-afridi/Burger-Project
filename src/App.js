import "./App.css";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";
import Checkout from "./Components/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./Components/Orders/orders";
function App() {
  return (
    <div>
      <Layout>
        {/* <Switch> */}
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders}></Route>
        {/* </Switch> */}
      </Layout>
    </div>
  );
}

export default App;
