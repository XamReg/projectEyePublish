import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ContentColor } from "./components/ContentColor";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/projectEyePublish",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projectEyePublish/colorContent/:id",
    element: <ContentColor />,
    errorElement: <ErrorPage />,
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
