import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import { NavLink } from "react-router";
import "./Root.css";
function Root() {
  return (
    <div>
      <nav className="flex gap-10">
        <p>
          <NavLink className="text-lg font-semibold" to={"/home"}>
            Home
          </NavLink>
        </p>
        <p>
          <NavLink className="text-lg font-semibold" to={"/mobiles"}>
            Mobiles
          </NavLink>
        </p>
        <p>
          <NavLink className="text-lg font-semibold" to={"/laptops"}>
            Laptops
          </NavLink>
        </p>
      </nav>
      <h2>this is our root</h2>
      <Header />

      <Outlet />
    </div>
  );
}

export default Root;
