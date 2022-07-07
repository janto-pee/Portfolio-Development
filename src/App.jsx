import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Contact from "./Pages/contact";
import Services from "./Pages/services";
import Home from "./Pages/home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";
import Portfolio from "./Pages/portfolio";
import RealEstate from "./Pages/RealEstate";
import Skincare from "./Pages/skincare-lp";
import Realestate from "./Pages/realestate-2";
import Cryptoboard from "./Pages/cryptoboard";
import Web3 from "./Pages/web3";
import CryptosApi from "./Pages/CryptosApi";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
