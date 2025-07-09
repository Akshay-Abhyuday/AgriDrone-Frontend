import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Style/Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Helper to apply active class
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-item active' : 'nav-item';

  return (
    <header className="navbar">
      <div className="navbar-left">
      <img src="/Img/logo.png" alt="Drone Logo" className="logo" />

        <span className="brand-name">Abhyuday Bharat </span>
      </div>

      <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={closeMenu} className={getLinkClass}>
          Products
        </NavLink>
        <NavLink to="/solutions" onClick={closeMenu} className={getLinkClass}>
          Solutions
        </NavLink>
        <NavLink to="/about" onClick={closeMenu} className={getLinkClass}>
          About Us
        </NavLink>

        <div className="nav-item dropdown">
          Support
          <div className="dropdown-content">
            <Link to="/faq" onClick={closeMenu} className="dropdown-link">
              FAQ
            </Link>
          </div>
        </div>

        <NavLink to="/faq" onClick={closeMenu} className={getLinkClass}>
          FAQ
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={getLinkClass}>
          Contact
        </NavLink>
        <NavLink to="/news" onClick={closeMenu} className={getLinkClass}>
          News
        </NavLink>

        {/* <Link to="/order" onClick={closeMenu} className="order-button mobile-only">
          Order Now
        </Link> */}
      </div>

      <div className="navbar-right desktop-only">
        <Link to="/order" className="order-button">
          Order Now
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

export default Navbar;
