import { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './App.css';

// Default map center (India)
const defaultCenter = {
  lat: 20.5937,
  lng: 78.9629
};

const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

function App() {
  const [destination, setDestination] = useState('');
  const [destinations, setDestinations] = useState([]);

  // Load Google Maps API
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  const handleAddDestination = () => {
    if (destination.trim() !== '') {
      setDestinations([...destinations, destination]);
      setDestination('');
    }
  };

  const handleDeleteDestination = (indexToDelete) => {
    const updatedDestinations = destinations.filter((_, index) => index !== indexToDelete);
    setDestinations(updatedDestinations);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Travel Planner</h2>
        
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Enter destination" 
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddDestination()}
          />
          <button onClick={handleAddDestination}>Add</button>
        </div>

        <ul className="destinations-list">
          {destinations.map((dest, index) => (
            <li key={index}>
              {dest}
              <button className="delete-btn" onClick={() => handleDeleteDestination(index)}>
                ❌
              </button>
            </li>
          ))}
          {destinations.length === 0 && (
            <p className="empty-message">No destinations added yet.</p>
          )}
        </ul>

        <button className="optimize-btn" onClick={() => alert("Optimization will be added in Week 4!")}>
          Optimize Route
        </button>
      </div>

      <div className="map-area">
        {/* Google Map Integration */}
        {loadError && <div className="map-error">Error loading maps</div>}
        {!isLoaded && !loadError && <div className="map-loading">Loading Map...</div>}
        
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={defaultCenter}
            zoom={5}
          >
            {/* Markers can be added here in the next step */}
          </GoogleMap>
        )}
      </div>
    </div>
  );
}

export default App;