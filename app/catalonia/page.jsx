"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HotelsList() {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('http://api.egruppa.com/accommodations/search')
            .then(response => response.json())
            .then(data => {
                // Filter for accommodations in Barcelona
                const barcelonaHotels = data.accommodations.filter(hotel => hotel.location === 'BARCELONA');
                setHotels(barcelonaHotels);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div className="bg-gray-100 p-4">
            <div className="container mx-auto">
                <h2 className="font-bold text-2xl mb-4">Hotels in Barcelona</h2>
                <div className="flex flex-col">
                    {hotels.map((hotel, index) => (
                        <div
                            key={index}
                            className="mb-4 p-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
                        >
                            <div className="relative h-64 md:h-auto md:w-1/3">
                                <Image
                                    src="/path-to-your-image.jpg" // Replace with your image path
                                    layout="fill"
                                    objectFit="cover"
                                    alt={hotel.name}
                                />
                            </div>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">
                                        {hotel.name}
                                    </h3>
                                    <p className="text-gray-700 text-sm mb-4">
                                        {hotel.category}  {/* Modify this line to display the appropriate information */}
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
