import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dnd from "../dnd-practice";

export const router = createBrowserRouter([
  {
    path: "/dnd-practice",
    element: <Dnd />,
  },
  {
    path: "/",
    element: <App />,
  },
]);
