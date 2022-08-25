import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const app = (
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
