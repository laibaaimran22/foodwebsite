
import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-[#fff8e1] py-3 px-4">
        <div className="mx-auto max-w-screen-xl sm:py-6 lg:px-2">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Image 1 - Cheese Pie */}
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="https://preppykitchen.com/wp-content/uploads/2021/10/Cheese-Pizza-Recipe-Card-500x375.jpg"
                alt="Cheese Pie"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
              <h3 className="z-10 text-xl font-bold text-black absolute bottom-4 left-4">
                Cheese Pie
              </h3>
            </a>

            {/* Image 2 - Veggie Pie */}
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_570541132.jpg.webp"
                alt="Veggie Pie"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
              <h3 className="z-10 text-xl font-bold text-black absolute bottom-4 left-4">
                Veggie Pie
              </h3>
            </a>

            {/* Image 3 - Pepperoni Pie */}
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_514457074-768x512.jpg.webp"
                alt="Pepperoni Pie"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
              <h3 className="z-10 text-xl font-bold text-black absolute bottom-4 left-4">
                Pepperoni Pie
              </h3>
            </a>

            {/* Image 4 - Meat Pie */}
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="https://chasety.com/wp-content/uploads/2024/05/realchasecurtis_Meat_Lovers_Pizza_sitting_on_plate_on_dark_conc_fa5643ad-de21-4982-9629-47d8460a51d5.png"
                alt="Meat Pie"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
              <h3 className="z-10 text-xl font-bold text-black absolute bottom-4 left-4">
                Meat Pie
              </h3>
            </a>

            {/* Image 5 - BBQ Chicken Pie */}
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="https://www.ezcater.com/lunchrush/wp-content/uploads/sites/2/2017/10/shutterstock_184944413-768x512.jpg.webp"
                alt="BBQ Chicken Pie"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
              <h3 className="z-10 text-xl font-bold text-black absolute bottom-4 left-4">
                BBQ Chicken Pie
              </h3>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
