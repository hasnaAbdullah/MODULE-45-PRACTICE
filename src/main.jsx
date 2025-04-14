import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root";
import Home from "./Home/Home";
import Laptops from "./Laptops/Laptops";
import Mobiles from "./Mobiles/Mobiles";
import Laptop from "./Laptop/Laptop";
import Mobile from "./Mobile/Mobile";

const router = createBrowserRouter([
  {
    path: "",
    Component: Root,
    children: [
      {
        path: "home",
        Component: Home,
      },

      {
        path: "laptops",
        Component: Laptops,
        children: [
          {
            path: "laptop-details",
            Component: Laptop,
          },
        ],
      },
      {
        path: "mobiles",
        Component: Mobiles,
        children: [
          {
            path: "mobile-details",
            Component: Mobile,
          },
        ],
      },
    ],
  },
]);

/* const router2 = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/home",
        Component: Home,
      },
    ],
  },
]); */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
