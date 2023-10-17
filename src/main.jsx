import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLogin from "./Components/UserLogin.jsx";
import AdminLogin from "./Components/AdminLogin.jsx";
import NoUser from "./Components/NoUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/nouser",
    element: <NoUser />,
  },
  {
    path: "/user",
    element: <UserLogin />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
);
