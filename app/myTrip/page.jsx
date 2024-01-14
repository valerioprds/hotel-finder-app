import React from "react";

function MyTrip({ myTrip }) {
	return (
		<div>
			<h2>My Trip</h2>
			{myTrip.map((hotel, index) => (
				<div key={index}>
					<h3>{hotel.name}</h3>
					{/* Display other hotel details as needed */}
				</div>
			))}
		</div>
	);
}

export default MyTrip;
