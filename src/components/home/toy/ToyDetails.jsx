import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch("/toy.json")
      .then((res) => res.json())
      .then((data) => {
        const foundToy = data.find((item) => item.toyId === parseInt(id));
        setToy(foundToy);
      });
  }, [id]);

  if (!toy) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#fff4eb] to-white py-16 px-5 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow overflow-hidden">
        {/* Image */}
        <div className="w-full h-80 bg-gray-100">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-10 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{toy.toyName}</h1>

          {/* Seller Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="text-lg">
              <span className="font-semibold">Seller:</span> {toy.sellerName}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {toy.sellerEmail}
            </p>
          </div>

          {/* Info Box */}
          <div className="grid grid-cols-3 text-center bg-orange-50 py-5 rounded-xl border border-orange-200">
            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p className="text-2xl font-bold text-green-600">{toy.rating}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Available</p>
              <p className="text-2xl font-bold">{toy.availableQuantity}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-2xl font-bold text-red-500">${toy.price}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{toy.description}</p>
          </div>

          {/* Category */}
          <p className="text-lg">
            <span className="font-semibold">Sub Category:</span>{" "}
            {toy.subCategory}
          </p>

          {/* Button */}
          <div className="pt-4">
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-semibold shadow hover:scale-105 duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
