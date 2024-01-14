// TripDetails.jsx
import React from 'react';

function myTrip({ cart }) {
    return (
        <div>
            <h2>My Trip</h2>
            {cart.map((hotel, index) => (
                <div key={index}>
                    <h3>{hotel.name}</h3>
                    <p>Location: {hotel.location}</p>
                    <p>Category: {hotel.category}</p>
                    <p>Rating: {hotel.rating}</p>
                    {/* Add more details as needed */}
                </div>
            ))}
        </div>
    );
}

export default TripDetails;
