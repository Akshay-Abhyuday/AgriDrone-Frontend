import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer';
import Products from './Pages/Products';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;