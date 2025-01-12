

import React from 'react';
import Navbar from "../app/Components/Navbar";
import Banner from './Components/Banner';
import Card from './Components/Card';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Offer from './Components/Offer';
import ProductList from './Components/ProductList';
import Progressor from './Components/Progressor';
import Menu from './Components/Menuitem';
import Reservation from './Components/Reservation';

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff8e1", minHeight: "100vh" }}>
      <Navbar />
      <Carousel />
      <Banner />
      <Offer />
      <ProductList />
      <Menu />
      <Card />
      <Progressor />
      <Reservation />
      <Footer />
    </div>
  );
}
