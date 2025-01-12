import React from "react";
import Image from "next/image";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center bg-[#fff8e1]">
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-3xl font-bold mb-3 text-[#4B0082] text-center">
          Scrumptious Pizzas
        </h2>
        <p className="text-[#4B0082] mb-3">
          Experience Cravings, Satisfied—Straight from Our Oven.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
          Order Now
        </button>
        <h3 className="text-2xl font-semibold mt-4 mb-2 text-center text-[#4B0082]">
          Get Ready to Savor the Unimaginable—New Pizzas Launching Soon!
        </h3>
        <ul className="text-[#4B0082]">
          <li>
            <strong>Fiery Inferno:</strong> Turn up the heat with our Fiery Inferno pizza.
          </li>
          <br />
          <li>
            <strong>Truffle Temptation:</strong> Indulge in luxury with Truffle Temptation.
          </li>
          <br />
          <li>
            <strong>Mediterranean Bliss:</strong> Take a trip to the Mediterranean with our Mediterranean Bliss pizza.
          </li>
          <br />
          <li>
            <strong>Cheese Avalanche:</strong> Calling all cheese lovers! Cheese Avalanche brings you layers of cheese.
          </li>
          <br />
          <li>
            <strong>Carnivore&apos;s Feast:</strong> Packed with pepperoni, sausage, smoked ham, and crispy bacon.
          </li>
          <br />
        </ul>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="https://i.pinimg.com/474x/37/b6/60/37b660cb40988dda83c8d345f62c83da.jpg"
          alt="mouthwatering pizzas"
          layout="responsive"
          width={500} // Adjust the width as needed
          height={300} // Adjust the height as needed
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
