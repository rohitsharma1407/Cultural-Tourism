import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PlaceDetailPage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/places/${id}`)
      .then(res => setPlace(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!place) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{place.name}</h1>
      <p>{place.description}</p>
      <p><i>{place.location}</i></p>

      <h3>Gallery (Placeholder for Video & Photos)</h3>
      <div style={{ width: '100%', height: '200px', backgroundColor: '#ccc' }}></div>

      <h3>Nearby Hostel + Transport</h3>
      <p>Nearest hostel: Example Hostel</p>
      <p>Transport: Bus, Train, Taxi</p>

      <button>AI Generate Trip Plan</button>
      <button>Book Ticket</button>
    </div>
  );
}

export default PlaceDetailPage;
