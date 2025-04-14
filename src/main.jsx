import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root";
import Home from "./Home/Home";
import Laptops from "./Laptops/Laptops";
import Mobiles from "./Mobiles/Mobiles";
import Users from "./Users/Users";
import Foods from "./Foods/Foods";
import FoodIngradients from "./FoodIngradients/FoodIngradients";
import Laptop from "./Laptop/Laptop";
import UserDetails from "./UserDetails/UserDetails";

const foodCatsPromise = fetch(
  "https://www.themealdb.com/api/json/v1/1/categories.php"
).then((res) => res.json());

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
            path: "laptop",
            Component: Laptop,
          },
        ],
      },
      {
        path: "mobiles",
        Component: Mobiles,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "food-categories",
        element: (
          <Suspense fallback={<h2>Loading....</h2>}>
            <Foods foodCatsPromise={foodCatsPromise} />
          </Suspense>
        ),
      },
      {
        path: "main-ingradients",
        Component: FoodIngradients,
      },
      {
        path: "users/:userId",
        loader: ({ params }) => {
          console.log(params);
          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`
          );
        },
        Component: UserDetails,
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
