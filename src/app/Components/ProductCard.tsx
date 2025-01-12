import { Product } from "@/pages/types";
import React from 'react';
import Image from 'next/image'; // Import Image from Next.js

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out hover:scale-110"
        width={400} // Specify the width of the image
        height={224} // Specify the height of the image (keeping aspect ratio)
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
      <p className="text-lg text-gray-600 mb-4">${price}</p>
      <button
        onClick={() => onAddToCart({ id, name, price, image })}
        className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
