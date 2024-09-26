import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTag, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import { PiAirplaneTiltDuotone } from "react-icons/pi";
import { toggleMenu } from '../redux/actions/navbarActions'; 
import '../styles/Navbar.css';
import profilePic from '../assets/images/profile.jpg';


const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.navbar.isMenuOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const goHome = () => {
    window.location = "/"
  }
  
  return (
    <nav className="navbar">
      <div onClick={goHome} className="navbar-left">
        <PiAirplaneTiltDuotone className="logo-icon" />
        <span className="company-name">PLANE SCAPE</span>
      </div>
      <div className="menu-icon" onClick={handleToggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
        <a href="#deals" className="nav-link">
          <FaTag className="nav-icon" /> Deals
        </a>
        <a href="#discovery" className="nav-link">
          <FaGlobe className="nav-icon" /> Discovery
        </a>
        <div className="user-info">
          <img
            src={profilePic}
            alt="User"
            className="user-avatar"
          />
          <span className="user-name">Fehmi Gunay</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
