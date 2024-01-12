"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./BarcelonaComponent.module.css";
//icons
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function HotelsList() {
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
							.then((hotelDetails) => {
								hotelDetails.photos =
									hotelDetails.photos.split(",")[0];
								return { ...hotel, ...hotelDetails };
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
		<div className={`bg-gray-100 p-4 ${styles.container}`}>
			<div className="container mx-auto">
				<h2 className="font-bold text-2xl mb-4">Hotels in Barcelona</h2>
				<div className="flex flex-col">
					{hotels.map((hotel, index) => (
						<div
							key={index}
							className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
						>
							<div className="relative h-64 md:h-auto md:w-1/5">
								<Image
									src={hotel.photos}
									layout="fixed"
									width={300}
									height={150}
									alt={hotel.name}
								/>
							</div>
							<div className="flex flex-col justify-between p-4 leading-normal">
								<div>
									<h3 className="font-bold text-lg ">
										{hotel.name}
									</h3>
									<p
										className={`${styles.customFontSize} text-gray-700 text-sm`}
									>
										<LocationCityOutlinedIcon className="mr-1" />
										{hotel.location}
									</p>

									<p className="text-gray-700 text-sm mb-4">
										<LocationOnOutlinedIcon className="mr-1" />
										{hotel.address}
									</p>

									<p className="text-gray-700 text-sm mb-4">
										<LocationOnOutlinedIcon className="mr-1" />
										{hotel.category}
									</p>

									{/* Display the rating */}
									<p className="text-gray-700 text-sm">
										Rating: {hotel.rating}
									</p>
								</div>
								{/* ... Additional hotel details ... */}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
