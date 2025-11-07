import React from "react";
import pageNotFound from "../../assets/error-404.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="inter my-20 mx-auto flex items-center justify-center flex-col">
      <img src={pageNotFound} alt="" className="w-90" />
      <div className="inter mx-auto flex items-center justify-center flex-col gap-5">
        <p className="font-bold text-5xl">Oops, page not found!</p>
        <p>The page you are looking for is not available.</p>
        <Link to="/">
          <button className="btn btn-default bg-[#9e000017]">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
