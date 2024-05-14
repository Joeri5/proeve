import "./globals.css";
import Navigation from "../components/navigationbar/navigationbar";
import React from 'react';
import Carousel from "@/components/carousel/Carousel";
import slides from '../components/carousel/carouselData.json'

const Page: React.FC = () => {
  return (
    <header>
      <Navigation /> {/* Rendering the imported content component */}
      <Carousel data={slides}/>
    </header>
  );
};

export default Page;