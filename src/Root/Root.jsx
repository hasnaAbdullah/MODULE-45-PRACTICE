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
        <p>
          <NavLink className="text-lg font-semibold" to={"/users"}>
            Users
          </NavLink>
        </p>

        <p>
          <NavLink className="text-lg font-semibold" to={"/food-categories"}>
            Foods
          </NavLink>
        </p>
        <p>
          <NavLink className="text-lg font-semibold" to={"/main-ingradients"}>
            Food Ingradients
          </NavLink>
        </p>
      </nav>
      <h2>this is our root</h2>
      <Header />

      <div className="w-96 min-h-96 bg-sky-950 text-white py-10 px-2 mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
