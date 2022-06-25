import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/contact";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
