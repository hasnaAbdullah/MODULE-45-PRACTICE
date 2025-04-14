import React from "react";
import { Outlet } from "react-router";

function Laptops() {
  return (
    <div>
      <h2>Our all laptops in here.</h2>
      <Outlet />
    </div>
  );
}

export default Laptops;
