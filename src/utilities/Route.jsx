import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";
import CounterUpdate from "../pages/Dashboard/UpdatePages/CounterUpdate";
import UpdateHeading from "../pages/Dashboard/UpdatePages/UpdateHeading";
import UpdateLogo from "../pages/Dashboard/UpdatePages/UpdateLogo";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Index from "./Index";
import Main from "./Main";
import PrivetRoutes from "./PrivetRoutes";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivetRoutes>
          <Dashboard />
        </PrivetRoutes>
      ),
      children: [
        {
          path: "update-logo",
          element: <UpdateLogo />,
        },
        {
          path: "update-heading",
          element: <UpdateHeading />,
        },
        {
          path: "counter-update",
          element: <CounterUpdate />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Route;
