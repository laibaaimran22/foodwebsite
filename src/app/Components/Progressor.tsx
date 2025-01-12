
import React from "react";

export default function Progressor() {
  return (
    <div className="bg-gradient-to-b from-[#fff8e1] to-[#fff8e1] py-0">
      <div className="max-w-screen-lg mx-auto">
        {/* Steps */}
        {[1, 2, 3].map((step) => (
          <div className="flex items-center mt-4 mb-4" key={step}>
            {/* Step Number */}
            <div className="w-10 h-10 bg-yellow-700 text-white flex items-center justify-center rounded-full">
              <span className="text-base font-bold">{step}</span>
            </div>
            {/* Progress Line */}
            {step < 3 && (
              <div className="flex-grow h-1 bg-yellow-800 mx-4"></div>
            )}
            {/* Text Details */}
            <div className="ml-6">
              <h6 className="text-lg font-bold text-yellow-900">
                Step {step}: {getStepTitle(step)}
              </h6>
              <p className="text-black text-base">{getStepDescription(step)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper Functions
const getStepTitle = (step: number) => {
  switch (step) {
    case 1:
      return "Choose Your Dish";
    case 2:
      return "Customize Your Order";
    case 3:
      return "Place Your Order";
    default:
      return "";
  }
};

const getStepDescription = (step: number) => {
  switch (step) {
    case 1:
      return "Explore our scrumptious menu and choose your favorite meal.";
    case 2:
      return "Tailor your meal to your taste!";
    case 3:
      return "Ready to eat? Proceed to checkout and complete your order!";
    default:
      return "";
  }
};
