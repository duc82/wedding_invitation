import React from "react";
import ReactDOM from "react-dom/client";
import "aos/dist/aos.css";
import "./index.scss";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AosProvider from "./providers/AosProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AosProvider>
      <RouterProvider router={router}></RouterProvider>
    </AosProvider>
  </React.StrictMode>
);
