import React from "react";
import TouristPlacesGrid from "../components/TouristPlacesGrid";
import ImageCarousel from "../components/ImageCarousel";
import NewsMarquee from "../components/NewsMarquee";
import PhotoVideoGallery from "../components/PhotoVideoGallery";


function HomePage() {
  return (
    <div>
      <ImageCarousel />
      <NewsMarquee />
      <h2 style={{ textAlign: "center", margin: "20px 0", }}>Dekho Hamara Jharkhand</h2>
      <TouristPlacesGrid />
      <PhotoVideoGallery />
    </div>
  );
}

export default HomePage;
