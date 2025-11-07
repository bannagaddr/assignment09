import React, { use } from "react";
import { Link } from "react-router";

const toyPromise = fetch("/toy.json").then((result) => result.json());

const Toy = () => {
  const toyData = use(toyPromise);

  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="text-center font-bold">
        <h1 className="text-3xl mb-10">Popular Toys</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {toyData.map((everyData) => (
          <div
            key={everyData.toyId}
            className="bg-white rounded-2xl shadow hover:shadow-md border border-[#f4a1353d]"
          >
            {/* Image */}
            <div>
              <img
                src={everyData.pictureURL}
                alt={everyData.toyName}
                className="w-full h-50 object-cover rounded-tl-2xl rounded-tr-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              {/* Toy Info */}
              <h1 className="text-xl font-semibold text-gray-900">
                {everyData.toyName}
              </h1>

              <div className="flex items-center justify-between text-gray-700 text-sm">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-500">Rating</span>
                  <span className="font-medium text-xl text-[#009425]">
                    {everyData.rating}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-500">Available</span>
                  <span className="font-medium text-xl">
                    {everyData.availableQuantity}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-500">Price</span>
                  <span className="font-semibold text-xl text-[#F24018]">
                    ${everyData.price}
                  </span>
                </div>
              </div>

              {/* Button */}
              <div>
                <Link
                  to={`/toy-details/${everyData.toyId}`}
                  className="btn w-full px-4 py-2 rounded-lg bg-linear-to-r from-[#F24018] to-[#F4A035] text-white font-medium shadow"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toy;
