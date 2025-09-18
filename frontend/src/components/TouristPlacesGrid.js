import React from "react";
import "../styles/TouristPlacesGrid.css";

const places = [
  { name: "Netarhat", image: "/images/photogallery/1.jpg", description: "Netarhat: Queen of Chotanagpur." },
  { name: "Patratu Dam", image: "/images/photogallery/2.jpg", description: "Patratu Dam: Beautiful water reservoir." },
  { name: "Betla National Park", image: "/images/photogallery/3.jpg", description: "Wildlife eco-tourism spot." },
  { name: "Hundru Falls", image: "/images/photogallery/4.jpg", description: "Majestic waterfall." },
  { name: "Deoghar", image: "/images/photogallery/5.jpg", description: "Famous Baidyanath Temple." },
  { name: "Jonha Falls", image: "/images/photogallery/6.jpg", description: "One of the highest waterfalls." },
  { name: "Dassam Falls", image: "/images/photogallery/1.jpg", description: "A popular scenic waterfall." },
  { name: "Rajrappa Temple", image: "/images/rajrappa-temple.jpg", description: "Religious and cultural site." },
  { name: "Ranchi Lake", image: "/images/ranchi-lake.jpg", description: "Serene place for relaxation." },
  { name: "Sita Falls", image: "/images/sita-falls.jpg", description: "Beautiful nature view." },
  { name: "Parasnath Hills", image: "/images/parasnath-hills.jpg", description: "Pilgrimage destination." },
  { name: "Pahari Mandir", image: "/images/pahari-mandir.jpg", description: "Hilltop religious site." },
  { name: "Hazaribagh Wildlife Sanctuary", image: "/images/hazaribagh-sanctuary.jpg", description: "Wildlife sanctuary." },
  { name: "Jamshedpur Steel Plant", image: "/images/jamshedpur.jpg", description: "Industrial and educational hub." },
  { name: "Tundi Hills", image: "/images/tundi-hills.jpg", description: "Picturesque hilly landscape." }
];

function TouristPlacesGrid() {
  return (
    <div className="grid-container">
      {places.map((place, index) => (
        <div className="place-card" key={index} style={{ backgroundImage: `url(${place.image})`, }}>
          <div className="place-overlay">
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <button className="know-more-btn">Know More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouristPlacesGrid;
