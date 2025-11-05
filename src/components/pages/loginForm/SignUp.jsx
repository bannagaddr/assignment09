import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../../firebase/firebase.config";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  // password show and hide hooks
  const [showPassword, setShowPassword] = useState(true);

  const signUpSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    // console.log("Sign in", { email, password });

    const regEx10 = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regEx10.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        toast.success("SignUp successful!");
        console.log(result);
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          toast.error("You already signup");
        } else {
          console.log(error.code);
        }
      });
  };
  return (
    <div className="my-12 bg-white rounded-md">
      <form
        onSubmit={signUpSubmit}
        className="w-90 mx-auto space-y-3 border-2 p-5 rounded-md border-[#9e000017]"
      >
        <div className="text-xl text-center font-semibold">
          <h1>SignUp</h1>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="inputField"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Photo URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Enter your email address"
            className="inputField"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="inputField"
            required
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="inputField"
            required
          />
          <span
            className="absolute top-10 right-5 text-xl text-[#9e000077] cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        <div>
          <button className="btn bg-[#403F3F] text-white w-full">SignUp</button>
        </div>
        <div className="flex justify-center">
          <p className="text-xs">
            <span className="text-[#706F6F] font-medium">
              Already have an account ?
            </span>{" "}
            <Link to="/signin" className="text-[#FF8C47] font-semibold">
              SignIn
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
