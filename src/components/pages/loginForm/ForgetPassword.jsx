import React, { use } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../../firebase/firebase.config";

const ForgetPassword = () => {
  const { loading, setLoading } = use(AuthContext);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your Gmail.");
      })
      .catch((error) => {
        toast.error("Failed to send reset email. Check your email address.");
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md my-20">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Forgot Password
      </h2>

      <form onSubmit={handleResetPassword} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-[#FF8C47]"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn w-full bg-[#FF8C47] text-white hover:bg-[#e57830]"
        >
          {loading ? "Sending..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
