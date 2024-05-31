import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { HomeSlider } from './components/HomeSlider/HomeSlider';
import { Brands } from './components/Brands/Brands';
import { Advers } from './components/Adverds/Advers';
import { FourInformation } from './components/FourInformation/FourInformation';
import { Footer } from './components/Footer/Footer';
import { Banner } from './components/Banner/Banner';
import { SliderProducts } from './components/SliderProducts/SliderProducts';

export const App = () => {
  return (
    <>
      <Navbar />
      <HomeSlider />
      <Brands />
      <Advers />
      <FourInformation />
      <Banner />
      <SliderProducts />
      <Footer />
    </>
  );
};

export default App;
