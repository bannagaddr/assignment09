import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import SignIn from "../pages/loginform/SignIn";
import SignUp from "../pages/loginform/SignUp";
import ToyDetails from "../home/toy/ToyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/toy-details/:id",
        element: <ToyDetails></ToyDetails>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
