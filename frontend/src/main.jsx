import React from "react";
import ReactDOM from "react-dom/client";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "./index.css";

import { route } from "./config";
import { RouterProvider } from "react-router-dom";
import ProductsProvider from "./context/ProductsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={route} />
    </ProductsProvider>
  </React.StrictMode>
);
