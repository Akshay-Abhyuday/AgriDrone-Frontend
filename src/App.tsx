import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import FAQPage from "./Pages/FAQ";
import Solutions from "./Pages/Solutions";

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;