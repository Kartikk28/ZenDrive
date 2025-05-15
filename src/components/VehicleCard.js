import React from 'react';

const VehicleCard = ({ vehicle }) => {
  return (
    <div style={{
      width: '280px',
      padding: '16px',
      margin: '10px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      background: '#fff',
      textAlign: 'center'
    }}>
      <img 
        src={vehicle.imageUrl} 
        alt={`${vehicle.make} ${vehicle.model}`} 
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(vehicle.make + ' ' + vehicle.model)}`;
        }}
        style={{
          width: '100%',
          height: '160px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '10px'
        }}
      />
      <h3 style={{ margin: '10px 0 4px' }}>
        {vehicle.make} {vehicle.model}
      </h3>
      <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
        Year: {vehicle.year}
      </p>
      <p style={{
        color: '#27ae60',
        fontWeight: 'bold',
        fontSize: '16px',
        marginTop: '6px'
      }}>
        ${vehicle.price}/day
      </p>
      <button style={{
        padding: '8px 16px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px'
      }}>
        Rent Now
      </button>
    </div>
  );
};

export default VehicleCard;
