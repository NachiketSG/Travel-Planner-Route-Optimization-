import { useState } from 'react';
import './App.css';

function App() {
  const [destination, setDestination] = useState('');
  const [destinations, setDestinations] = useState([]);

  // Function to add a new destination
  const handleAddDestination = () => {
    if (destination.trim() !== '') {
      setDestinations([...destinations, destination]);
      setDestination(''); // Clear input box
    }
  };

  // Function to remove a destination
  const handleDeleteDestination = (indexToDelete) => {
    const updatedDestinations = destinations.filter((_, index) => index !== indexToDelete);
    setDestinations(updatedDestinations);
  };

  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <h2>Travel Planner</h2>
        
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Enter destination (e.g., Goa)" 
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
              <button 
                className="delete-btn" 
                onClick={() => handleDeleteDestination(index)}
              >
                ❌
              </button>
            </li>
          ))}
          {destinations.length === 0 && (
            <p style={{ color: '#95a5a6', textAlign: 'center', marginTop: '20px' }}>
              No destinations added yet.
            </p>
          )}
        </ul>

        <button className="optimize-btn" onClick={() => alert("Optimization will be added in Week 4!")}>
          Optimize Route
        </button>
      </div>

      {/* Right Map Area */}
      <div className="map-area">
        {/* Background Image Layer */}
        <div className="bg-image"></div>
        
        {/* Content on top of image */}
        <div className="map-placeholder">
          <h3>Plan Your Next Adventure</h3>
          <p>Google Maps API integration coming in Week 3</p>
        </div>
      </div>
    </div>
  );
}

export default App;