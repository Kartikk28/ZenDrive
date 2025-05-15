import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VehicleCard from './components/VehicleCard';
import { fetchCarImage } from './utils/imageService';

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const response = await axios.get('https://myfakeapi.com/api/cars/');
        const rawCars = response.data.cars;

        const formattedCars = await Promise.all(
          rawCars.map(async (car) => {
            const imageUrl = await fetchCarImage(`${car.car} ${car.car_model}`);
            return {
              make: car.car,
              model: car.car_model,
              year: car.car_model_year,
              imageUrl,
              price: Math.floor(Math.random() * 80 + 20),
            };
          })
        );

        setVehicles(formattedCars);
        setLoading(false);
      } catch (error) {
        console.error("🚨 API ERROR:", error);
        alert("Could not fetch cars. Please check your connection or try a different API.");
        setLoading(false);
      }
    };

    loadVehicles();
  }, []);

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      background: '#f4f4f4',
      minHeight: '100vh'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        🚗 ZenDrive - Available Cars
      </h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {loading ? (
          <p>Loading cars...</p>
        ) : vehicles.length > 0 ? (
          vehicles.map((vehicle, idx) => (
            <VehicleCard key={idx} vehicle={vehicle} />
          ))
        ) : (
          <p>No cars available right now.</p>
        )}
      </div>
    </div>
  );
}

export default App;
