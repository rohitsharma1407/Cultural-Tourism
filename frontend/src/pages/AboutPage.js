import React from "react";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <p>
        Welcome to Jharkhand Tourism Explorer – your ultimate digital guide to the beautiful state of Jharkhand!  
        Our mission is to promote Jharkhand’s natural beauty, tribal culture, historical landmarks, and eco-tourism hotspots in an organized, accessible, and sustainable way.
      </p>

      <h2>Our Vision</h2>
      <p>
        We envision an inclusive platform that empowers local communities, promotes authentic experiences, and makes travel seamless through innovative digital solutions.
      </p>

      <h2>Why Jharkhand?</h2>
      <ul>
        <li>Untouched natural beauty</li>
        <li>Rich tribal heritage & culture</li>
        <li>Historical landmarks like Baidyanath Temple, Parasnath Hills</li>
        <li>Eco-tourism hotspots – Netarhat, Betla National Park, Hundru Falls</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        📧 Email: contact@jharkhandtourism.com  
        📞 Phone: +91 12345 67890  
        📍 Address: Jharkhand Tourism Office, Ranchi, India
      </p>
    </div>
  );
}

export default AboutPage;
