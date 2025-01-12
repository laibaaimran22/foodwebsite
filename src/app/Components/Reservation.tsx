
import React from "react";

const ReservationSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#fff8e1] to-[#fff8e1] py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-[#4B0082]">
          Make A Reservation
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="time"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Reserve Table
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
