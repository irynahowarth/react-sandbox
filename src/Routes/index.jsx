import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dnd from "../dnd-practice";
import Mealplan from "../meal-draft";
import BeautifulDnd from "../beautiful-dnd";
import DndKit from "../dnd-kit";

export const router = createBrowserRouter([
  {
    path: "/dnd-practice",
    element: <Dnd />,
  },
  {
    path: "/dnd-kit",
    element: <DndKit />,
  },
  {
    path: "/beautiful-dnd",
    element: <BeautifulDnd />,
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
