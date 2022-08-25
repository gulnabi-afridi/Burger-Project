import React, { useState } from "react";
import "./Spinner.css";
const Spanner = ({ topMargin }) => {
  console.log(topMargin);
  return (
    <div className="spannerLoader" style={{ marginTop: topMargin }}>
      <span className="loader"></span>;
    </div>
  );
};
export default Spanner;
