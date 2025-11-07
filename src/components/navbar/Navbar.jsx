import React, { use } from "react";
import "../../index.css";
import { NavLink } from "react-router";
import logo from "/car-toy.png";
import defaultUserIcon from "../../assets/default-user.png";
import UseLink from "../navlink/UseLink";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user } = use(AuthContext);

  // signout function
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        toast.success("SignOut Successful!");
        console.log(result);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-[#9e000017] px-10 border-b border-b-[#9e000017]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className="flex items-center gap-3">
          <img src={logo} alt="" className="w-10" />
          <span className="font-bold mt-2">Playgo</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1">
          <li>
            <UseLink to={"/"}>
              <span className="font-medium">Home</span>
            </UseLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <div>
          <img
            src={`${user ? user.photoURL : defaultUserIcon}`}
            alt=""
            className="w-10 ring ring-[#F2511D] rounded-full p-1"
          />
        </div>

        {user ? (
          <NavLink>
            <button
              onClick={handleSignOut}
              className="btn bg-[#F2511D] text-white"
            >
              SignOut
            </button>
          </NavLink>
        ) : (
          <NavLink to={"/signin"}>
            <button className="btn bg-[#F2511D] text-white">SignIn</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
