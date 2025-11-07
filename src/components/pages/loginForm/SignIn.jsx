import React, { use, useState } from "react";
import "../../../index.css";
import { Link, useLocation, useNavigate } from "react-router";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// google provider
const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  const { setLoading } = use(AuthContext);
  const [user, setUser] = useState(null);
  // password show and hide hooks
  const [showPassword, setShowPassword] = useState(true);
  console.log(user);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const signinSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log("Sign in", { email, password });

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        toast.success("SignIn Successful!");
        setUser(result.user);
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  // google signin function
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("SignIn Successful!");
        setUser(result.user);
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className="my-12 bg-white rounded-md px-10 sm:px-110 mx-auto">
      <form
        onSubmit={signinSubmit}
        className="space-y-3 border-2 p-5 rounded-md border-[#9e000017]"
      >
        <div className="text-xl text-center font-semibold">
          <h1>SignIn</h1>
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
        <div className="flex flex-col gap-2">
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
            <Link
              to={"/forgot-password"}
              className="text-[#FF8C47] font-semibold text-xs"
            >
              Forget password
            </Link>
          </div>
        </div>
        <div>
          <button className="btn bg-[#403F3F] text-white w-full">SignIn</button>
        </div>

        {/* signin with google */}
        <div className="space-y-2">
          <div className="flex items-center mx-auto">
            <div className="h-0.5 flex-1 bg-linear-to-r from-[#ffffff00] to-[#9e000017]"></div>
            <h2 className="mx-2 font-medium text-[#a8a8a8]">or</h2>
            <div className="h-0.5 flex-1 bg-linear-to-r from-[#9e000017] to-[#ffffff00]"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5] w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            SignIn with Google
          </button>
        </div>

        <div className="flex justify-center">
          <p className="text-xs">
            <span className="text-[#706F6F] font-medium">
              Don't have an account ?
            </span>{" "}
            <Link to="/signup" className="text-[#FF8C47] font-semibold">
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
