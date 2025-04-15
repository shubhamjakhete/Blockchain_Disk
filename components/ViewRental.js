import React from 'react';

function ViewRental({ rentalData, onTerminate }) {
  const { rentalId, renter, space, startTime, endTime, active } = rentalData;

  const cardStyles = {
    maxWidth: '20rem',
    padding: '1.5rem',
    backgroundColor: 'white',
    border: '1px solid #E5E7EB',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const titleStyles = {
    marginBottom: '1rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1E3A8A',
  };

  const labelStyles = {
    fontWeight: 'bold',
    color: '#4B5563',
  };

  const buttonStyles = {
    backgroundColor: '#2563EB',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    marginTop: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <div style={cardStyles}>
      <a href="#">
        <h5 style={titleStyles}>Rental Agreement #{rentalId}</h5>
      </a>
      <p style={labelStyles}>
        <strong>Renter:</strong> {renter}
      </p>
      <p style={labelStyles}>
        <strong>Rental Space (MB):</strong> {space}
      </p>
      <p style={labelStyles}>
        <strong>Start Time:</strong>{' '}
        {new Date(startTime * 1000).toLocaleString()}
      </p>
      <p style={labelStyles}>
        <strong>End Time:</strong>{' '}
        {new Date(endTime * 1000).toLocaleString()}
      </p>
      <p style={labelStyles}>
        <strong>Status:</strong>{' '}
        {active ? 'Active' : 'Terminated'}
      </p>

      {active && (
        <a href="#" style={buttonStyles} onClick={() => onTerminate(rentalId)}>
          Terminate
          
        </a>
      )}
    </div>
  );
}

export default ViewRental;
