import React, { useEffect, useState } from "react";
import axios from "axios";

const EcoPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/eco");
    setItems(res.data);
  };

  const addToItinerary = (item) => {
    let itinerary = JSON.parse(localStorage.getItem("itinerary")) || [];
    itinerary.push(item);
    localStorage.setItem("itinerary", JSON.stringify(itinerary));
    alert(`${item.name} added to itinerary ✅`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌱 Eco Tourism</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
        {items.map((item) => (
          <div key={item._id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px" }}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p><b>Location:</b> {item.location}</p>
            <button onClick={() => addToItinerary(item)}>➕ Add to Itinerary</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoPage;
