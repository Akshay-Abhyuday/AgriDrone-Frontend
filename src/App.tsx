import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from "./Components/Navbar";
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer';
import Products from './Pages/Products';
import NewsPage from './Pages/News';
import FAQPage from "./Pages/FAQ";
import AboutPage from './Pages/AboutUs';

import Solutions from "./Pages/Solutions";

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/About" element={<AboutPage />} />
        

<Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;








