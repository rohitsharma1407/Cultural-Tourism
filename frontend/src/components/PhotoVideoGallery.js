import React from "react";
import "../styles/PhotoVideoGallery.css";

const photos = [
  "/images/photogallery/1.jpg",
  "/images/photogallery/2.jpg",
  "/images/photogallery/3.jpg",
  "/images/photogallery/4.jpg",
  "/images/photogallery/5.jpg",
  "/images/photogallery/6.jpg"
];
const videos = [
  "https://www.youtube.com/"
];


function PhotoVideoGallery() {
  return (
    <div className="gallery-container">
      
      {/* PHOTO GALLERY */}
      <div className="gallery-section">
        <div className="gallery-header">
          <h2>PHOTO GALLERY</h2>
          <a href="/photos" className="view-all">VIEW ALL →</a>
        </div>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div className="photo-card" key={index}>
              <img src={photo} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO GALLERY */}
      <div className="galleryvideo-section">
        <div className="gallery-header">
          <h2>VIDEO GALLERY</h2>
          <a href="/videos" className="view-all">VIEW ALL →</a>
        </div>
        <div className="video-grid">
          {videos.map((video, index) => (
            <div className="video-card" key={index}>

            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kzgw0qjQRgw?si=oj-69d5l4ONj8inQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default PhotoVideoGallery;
