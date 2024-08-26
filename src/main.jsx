import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Frontend/Layout.jsx";
import Home from "./Frontend/Home.jsx";
import { About } from "./Frontend/About.jsx";
import PackageDetails from "./Frontend/PackageDetails.jsx";
import Destination from "./Frontend/Destination.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: `:slug/package`,
        element: <PackageDetails />,
      },
      {
        path: "all-destinations",
        element: <Destination />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
