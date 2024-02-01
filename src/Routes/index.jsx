import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/dnd-practice",
    element: <div>This is DND</div>,
  },
  {
    path: "/",
    element: <App />,
  },
]);
