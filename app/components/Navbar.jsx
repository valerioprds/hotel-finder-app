"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./hotel-bed.webp";
import { GiAirplaneDeparture } from "react-icons/gi";


export default function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Cierra el menú desplegable si se hace clic fuera de él
	useEffect(() => {
		const pageClickEvent = (e) => {
			if (
				dropdownRef.current !== null &&
				!dropdownRef.current.contains(e.target)
			) {
				setDropdownOpen(!dropdownOpen);
			}
		};

		// Si el menú está abierto, escucha los clics en la página
		if (dropdownOpen) {
			window.addEventListener("click", pageClickEvent);
		}

		return () => {
			window.removeEventListener("click", pageClickEvent);
		};
	}, [dropdownOpen]);

	return (
		<nav className="bg-white shadow-lg p-4 flex items-center justify-between">
			<div className="flex items-center space-x-4">
				<Image
					src={Logo}
					alt="hotel finder logo"
					width={70}
					height={70}
					quality={100}
				/>
				<h1 className="text-xl font-bold">Dojo Helpdesk  <i class="fa-solid fa-house"></i></h1>
			</div>
			<div ref={dropdownRef} className="relative">
				<button
					onClick={() => setDropdownOpen(!dropdownOpen)}
					className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
				>
					Destinations <GiAirplaneDeparture />

				</button>
				{dropdownOpen && (
					<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20">
						<Link href="/destination/spain">
							<p className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
								Catalonia
							</p>
						</Link>
						<Link href="/destination/france">
							<p className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
								Basque Country
							</p>
						</Link>
						<Link href="/destination/italy">
							<p className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
								Canary Islands
							</p>
						</Link>
						{/* Repite el patrón para otros destinos */}
					</div>
				)}
			</div>
		
		</nav>
	);
}
