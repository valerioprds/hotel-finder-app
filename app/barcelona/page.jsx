"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ServicesList from "./ServicesList"; // Ensure this component is correctly imported

function HotelsList({ onAddToTrip }) {
	const [hotels, setHotels] = useState([]);

	useEffect(() => {
		fetch("http://api.egruppa.com/accommodations/search")
			.then((response) => response.json())
			.then((data) => {
				const barcelonaHotels = data.accommodations.filter(
					(hotel) => hotel.location === "BARCELONA"
				);
				return Promise.all(
					barcelonaHotels.map((hotel) => {
						return fetch(
							`http://api.egruppa.com/accommodations/${hotel.id}`
						)
							.then((response) => response.json())
							.then((details) => {
								return { ...hotel, ...details };
							});
					})
				);
			})
			.then((hotelsWithDetails) => {
				setHotels(hotelsWithDetails);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	return (
		<div className="flex flex-col">
			{hotels.map((hotel, index) => (
				<div
					key={index}
					className="hotelCard mb-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
				>
					<div className="relative h-64 md:h-auto md:w-1/5">
						<Image
							src={hotel.photos.split(",")[0]}
							alt={hotel.name}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="flex flex-col justify-between p-4 leading-normal flex-grow">
						<div>
							<h3 className="font-bold text-lg mb-2">
								{hotel.name} {hotel.category}
							</h3>
							<div className="flex items-center text-gray-700 text-sm mb-2">
										<LocationOnOutlinedIcon className="text-blue-500 mr-2" />
										<p>{hotel.location}</p>
									</div>
							<div className="flex items-center text-gray-700 text-sm mb-2">
										<ThumbUpIcon className="text-blue-400 mr-2" />
										<p>{hotel.rating}</p>
									</div>
							<div className="flex items-center text-gray-700 text-sm mb-2">
							<p>
											<ServicesList />
										</p>
							</div>
						</div>
						<div className="flex justify-end mt-4">
							<Button
								className="hotelAddButton"
								variant="outlined"
								size="large"
								onClick={() => onAddToTrip(hotel)}
							>
								Add to My Trip
							</Button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function App() {
	const [myTrip, setMyTrip] = useState([]);

	const addToTrip = (hotel) => {
		setMyTrip([...myTrip, hotel]);
	};

	return (
		<div>
			<h2 className="font-bold text-2xl mb-4">Hotels in Barcelona</h2>
			<HotelsList onAddToTrip={addToTrip} />
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

export default App;
