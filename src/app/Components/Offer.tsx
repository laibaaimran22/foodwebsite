
'use client';
import React from 'react';

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: 'Happy Hour',
      description: 'Get 50% off on any drink from 5PM to 7PM',
    },
    {
      title: 'Family Meal Deal',
      description: 'Order any 2 courses and get family deal coupon',
    },
    {
      title: 'Weekend Brunch',
      description: 'Get a free complimentary drink',
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10 bg-[#fff8e1] text-slate-700">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-md">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-white text-slate-700 shadow-lg rounded-lg p-6 text-center hover:bg-[#fdd835] hover:text-white border-2 border-[#333333] hover:border-[#ff5722] transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-3">{offer.title}</h3>
              <p className="text-[#ff5722]">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

