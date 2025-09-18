import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/emblem-dark.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
        <Link to="/">Jharkhand Tourism</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About Us</Link></li>

        <li className="dropdown">
          <span>Discover</span>
          <ul className="dropdown-content">
            <li><Link to="/discover/adventure-tourism">Adventure Tourism</Link></li>
            <li><Link to="/discover/eco-tourism">Eco Tourism</Link></li>
            <li><Link to="/discover/heritage-tourism">Heritage Tourism</Link></li>
            <li><Link to="/discover/dams-lake">Dams & Lake</Link></li>
            <li><Link to="/discover/religious-tourism">Religious Tourism</Link></li>
            <li><Link to="/discover/spiritual-tourism">Spiritual Tourism</Link></li>
            <li><Link to="/discover/museum-other">Museum & Other</Link></li>
            <li><Link to="/discover/art-culture">Art and Culture</Link></li>
            <li><Link to="/discover/rural-tourism">Rural Tourism</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Experience</span>
          <ul className="dropdown-content">
            <li><Link to="/experience/fairs-festivals">Fairs & Festivals</Link></li>
            <li><Link to="/experience/palace-on-wheels">Palace On Wheels</Link></li>
            <li><Link to="/experience/adventures">Adventures</Link></li>
            <li><Link to="/experience/heritage-properties">Heritage Properties</Link></li>
            <li><Link to="/experience/travel-diaries">Travel Diaries</Link></li>
            <li><Link to="/experience/knowledge-bank">Knowledge Bank</Link></li>
            <li><Link to="/experience/feedback">Feedback</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Plan</span>
          <ul className="dropdown-content">
            <li><Link to="/plan/best-time-to-visit">Best Time To Visit</Link></li>
            <li><Link to="/plan/how-to-get-there">How To Get There</Link></li>
            <li><Link to="/plan/foreign-tourists">Foreign Tourists</Link></li>
            <li><Link to="/plan/travel-desk">Travel Desk</Link></li>
            <li><Link to="/plan/packages">Packages</Link></li>
            <li><Link to="/plan/suggested-itineraries">Suggested Itineraries</Link></li>
            <li><Link to="/plan/rtdc-tour-packages">R.T.D.C. Tour Packages</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Stay</span>
          <ul className="dropdown-content">
            <li><Link to="/stay/guest-house">Guest House</Link></li>
            <li><Link to="/stay/hotel">Hotel</Link></li>
          </ul>
        </li>

        <li><Link to="/e-ticketing">E-Ticketing</Link></li>

        <li><Link to="/auth">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
