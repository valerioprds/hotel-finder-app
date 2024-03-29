"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ServicesList from "./ServicesList";

// Icons
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

// Buttons
import Button from "@mui/material/Button";

export default function HotelsList() {
	const [hotels, setHotels] = useState([]);
	const [cart, setCart] = useState([]);

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
				setTimeout(() => {
					document.querySelectorAll(".hotelCard").forEach((card) => {
						card.style.transform = "scale(1.05)";
						setTimeout(
							() => (card.style.transform = "scale(1)"),
							1000
						);
					});
				}, 0);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	const addToCart = (hotel) => {
		const hotelData = {
			name: hotel.name,
			location: hotel.location,
			category: hotel.category,
			rating: hotel.rating,
		};

		const updatedCart = [...cart, hotelData];
		setCart(updatedCart);
		console.log(updatedCart);
	};

	return (
		<div className="bg-gray-100 p-4 hotelContainer">
			<div className="container mx-auto">
				<h2 className="font-bold text-2xl mb-4">Hotels in Barcelona</h2>
				<div className="flex flex-col">
					{hotels.map((hotel, index) => (
						<div
							key={index}
							className="hotelCard mb-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
						>
							<div className="relative h-64 md:h-auto md:w-1/5">
								<Image
									src={hotel.photos}
									layout="fill"
									objectFit="cover"
									alt={hotel.name}
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
										
									>
										add to my trip
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
