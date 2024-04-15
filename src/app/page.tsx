import "./globals.css";
import Navigation from "../components/navigationbar/navigationbar";
import React from 'react';

const Page: React.FC = () => {
  return (
    <header>
      <Navigation /> {/* Rendering the imported content component */}
    </header>
  );
};

export default Page;