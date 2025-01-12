import React from 'react';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-[#fff8e1] font-sans mb-7">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://img.freepik.com/premium-photo/delicious-pepperoni-pizza-with-wooden-backdrop-heated-pepperoni-pizza-seen-from_872147-5302.jpg"
          alt="Irresistibly Cheesy, Perfectly Baked - Your Favorite Pizza is Here!"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white py-16 px-6 lg:py-24">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-md">
          Discover Our Menu
        </h2>
        {/* Subtitle */}
        <p className="text-xl mb-6 max-w-xl drop-shadow-md">
          Shop now and enjoy exclusive pizza discounts!
        </p>
        {/* Button */}
        <button
          type="button"
          className="bg-[#ff5722] text-white text-lg font-semibold py-3 px-6 rounded-full shadow hover:bg-[#e64a19] transition duration-300"
        >
          Exciting Deals Launch at 12 PM!
        </button>
      </div>
    </div>
  );
}
