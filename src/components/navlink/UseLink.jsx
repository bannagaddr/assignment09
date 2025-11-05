import React from "react";
import { NavLink } from "react-router";

const UseLink = ({ to, className, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "text-red-600" : `{${className}}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default UseLink;
