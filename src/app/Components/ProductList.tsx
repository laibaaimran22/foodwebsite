import React from "react";
import Image from "next/image"; // Import Image from Next.js

const products = [
  {
    id: 1,
    title: "Sausage and Pepper Pizza",
    category: "Fixing",
    price: "1000.00",
    imageUrl:
      "https://stordflolretailpd.blob.core.windows.net/df-us/lolretail/media/lolr-media/recipe-collections/2024/2024.july/retail_collection_pizza-recipes-sausage-and-pepper-pizza_850x800.jpg?ext=.jpg",
    bgColor: "bg-white",
  },
  {
    id: 2,
    title: "Veggie Pizza",
    category: "Fixing",
    price: "1000.00",
    imageUrl:
      "https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-veggie-pizza-1693570712.jpg",
    bgColor: "bg-white",
  },
  {
    id: 3,
    title: "Pepperoni Pizza",
    category: "Delights",
    price: "1000.00",
    imageUrl:
      "https://joyfoodsunshine.com/wp-content/uploads/2024/01/homemade-pepperoni-pizza-recipe-2.jpg",
    bgColor: "bg-white",
  },
];

export default function ProductList() {
  return (
    <div className="flex flex-wrap justify-center bg-[#fff8e1] p-8">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col items-center m-4 p-4 rounded-lg shadow-lg ${product.bgColor} w-64 hover:shadow-xl transform transition duration-300 hover:scale-105`}
        >
          <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
            <Image
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
              src={product.imageUrl}
              alt={product.title}
              width={256} // Set width to match the size
              height={192} // Set height to maintain aspect ratio
            />
          </div>
          <div className="text-center">
            <span className="block text-[#ff5722] text-sm mb-1">
              {product.category}
            </span>
            <h3 className="font-semibold text-lg text-[#333333] mb-2">
              {product.title}
            </h3>
            <span className="bg-[#ff5722] text-white text-sm font-bold px-3 py-1 rounded-full">
              ${product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
