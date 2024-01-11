import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./hotel-bed.webp";

export default function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<nav className="bg-white shadow-lg p-4 flex justify-between items-center">
			<Image
				src={Logo}
				alt="hotel finder logo"
				width={70}
				height={70}
				quality={100}
			/>

			<div className="flex items-center space-x-4">
				<h1 className="text-xl font-bold">Dojo Helpdesk</h1>
				<div className="relative">
					<button
						onClick={() => setDropdownOpen(!dropdownOpen)}
						className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
					>
						Destinations
					</button>
					{dropdownOpen && (
						<div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
							<Link href="/destination/spain">
								<a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
									Spain
								</a>
							</Link>
							<Link href="/destination/france">
								<a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
									France
								</a>
							</Link>
							<Link href="/destination/italy">
								<a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
									Italy
								</a>
							</Link>
							{/* Repite el patrón para otros destinos */}
						</div>
					)}
				</div>

				<Link href="/tickets">
					<a className="px-4 py-2 bg-blue-500 text-white rounded-md">
						Tickets
					</a>
				</Link>
			</div>
		</nav>
	);
}
