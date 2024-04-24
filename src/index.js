import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ContentColor } from "./components/ContentColor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "colorContent/:id",
    element: <ContentColor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
