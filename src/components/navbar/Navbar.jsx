import React, { use } from "react";
import "../../index.css";
import { Link, NavLink } from "react-router";
import logo from "/car-toy.png";
import defaultUserIcon from "../../assets/default-user.png";
import UseLink from "../navlink/UseLink";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { IoMenuSharp } from "react-icons/io5";

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
    <div className="navbar bg-[#9e000017] border-b border-b-[#9e000017] p-0">
      <div
        className="w-11/12 mx-auto flex items-center gap-2
"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden pr-2 sm:pr-5">
              <IoMenuSharp size={25} />
            </div>
            <ul
              tabIndex="-1"
              className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/"} className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="" className="w-8 ml-1 sm:ml-0 sm:w-10" />
            <span className="font-bold mt-2">Playgo</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="px-1 flex items-center gap-2">
            <li>
              <NavLink to={"/"}>
                <span className="font-medium">Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link to={"/profile"} className="relative group">
            <img
              src={`${user ? user.photoURL : defaultUserIcon}`}
              alt=""
              className="w-8 sm:w-10 ring ring-[#F2511D] rounded-full p-1"
            />

            <span
              className="absolute top-1/2 right-12 -translate-y-1/2 bg-gray-800
            text-white text-xs px-2 py-1 rounded opacity-0
            group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block"
            >
              {user ? user.displayName : "No User"}
            </span>
          </Link>

          {user ? (
            <NavLink>
              <button
                onClick={handleSignOut}
                className="btn btn-xs bg-[#F2511D] text-white px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-base rounded-xl shadow border-none"
              >
                SignOut
              </button>
            </NavLink>
          ) : (
            <NavLink to={"/signin"}>
              <button className="btn btn-xs bg-[#F2511D] text-white px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-base rounded-xl shadow border-none">
                SignIn
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
