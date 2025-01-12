
'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import { Product } from "@/pages/types";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => setShowCart((prev) => !prev);

  const goToCheckout = () => setIsCheckout(true);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9zci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3dvcmxkZmFjZXNsYWJfZGVsaWNpb3VzX3BpenphX2FuZF9mbHlpbmdfaW5ncmVkaWVudHNfaXNvbGF0ZWRfb19iOWY1NzQ5My1mNmFjLTRkNjgtOTVkYy01NzFlZDFlZjM5YzFfMS5qcGc.jpg')",
        }}
      ></div>
      <div className="relative z-10 text-center text-yellow-900">
        <div className="max-w-6xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#ff5722] drop-shadow-lg">
            Scrumptious Pizzas In Our Menu
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Explore our section of mouth-watering pizzas to order now!
          </p>
        </div>

        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-wrap justify-center gap-8">
            {products.map((product) => (
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" key={product.id}>
                <ProductCard {...product} onAddToCart={addToCart} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-[#ff5722] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#e64a19] transition-transform transform hover:scale-110"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>
          {showCart && (
            <div className="mt-6 bg-[#fff8e1] p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-[#333333]">Your Cart Items</h2>
              {cart.length > 0 ? (
                <>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between mb-6"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 sm:w-24 sm:h-24"
                        />
                        <span>{product.name} - ${product.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-6">
                    <span className="font-semibold text-xl text-[#333333]">
                      Total: ${cart.reduce((total, product) => total + product.price, 0)}
                    </span>
                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-green-600 py-3 px-8 rounded-lg text-white shadow-md hover:bg-green-700 transform hover:scale-110"
                      >
                        Proceed to Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="ml-4 bg-red-600 py-3 px-8 rounded-lg text-white shadow-md hover:bg-red-700 transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;



