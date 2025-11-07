import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  // Local form state
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setUser({ ...user, displayName: name, photoURL: photoURL });
      })
      .catch((error) => {
        toast.error("Profile update failed!");
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md my-20">
      <h2 className="text-2xl font-semibold text-center mb-4">My Profile</h2>

      {/* Profile info */}
      <div className="text-center mb-6">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto border-4 border-[#FF8C47] p-1"
        />
        <h3 className="text-lg font-medium mt-2">
          {user?.displayName || "No Name"}
        </h3>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>

      {/* Edit Form */}
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-[#FF8C47]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-[#FF8C47]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn w-full bg-[#FF8C47] text-white hover:bg-[#e57830]"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
