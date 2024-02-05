import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dnd from "../dnd-practice";
import Mealplan from "../meal-draft";

export const router = createBrowserRouter([
  {
    path: "/dnd-practice",
    element: <Dnd />,
  },
  {
    path: "/mealplan",
    element: <Mealplan />,
  },
  {
    path: "/",
    element: <App />,
  },
]);
