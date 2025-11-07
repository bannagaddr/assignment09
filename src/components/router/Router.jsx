import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import SignIn from "../pages/loginform/SignIn";
import SignUp from "../pages/loginform/SignUp";
import ToyDetails from "../home/toy/ToyDetails";
import PrivateRouter from "./PrivateRouter";
import Error from "../error/Error";
import MyProfile from "../myprofile/MyProfile";
import ForgetPassword from "../pages/loginform/ForgetPassword";
import Toy from "../home/toy/Toy";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <Error></Error>,
  },
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
        element: (
          <PrivateRouter>
            <ToyDetails></ToyDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/forgot-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);
