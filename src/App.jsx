import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Contact from "./Pages/contact";
import Homepage from "./Pages/Homepage";
import Services from "./Pages/services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";
import Portfolio from "./Pages/portfolio";
import RealEstate from "./Pages/Projects/RealEstate";
import Skincare from "./Pages/Projects/skincare-lp";
import Realestate from "./Pages/Projects/realestate-2";
import Cryptoboard from "./Pages/Projects/cryptoboard";
import Web3 from "./Pages/Projects/web3";
import CryptosApi from "./Pages/Projects/CryptosApi";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio/real-estate" element={<RealEstate />} />
        <Route path="/portfolio/skincare-lp" element={<Skincare />} />
        <Route path="/portfolio/realestate2" element={<Realestate />} />
        <Route path="/portfolio/cryptoboard-app" element={<Cryptoboard />} />
        <Route path="/portfolio/web-3-app" element={<Web3 />} />
        <Route path="/portfolio/cryptos-api" element={<CryptosApi />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
