import Image from "next/image";
import Link from "next/link";

export default function HotelsList() {
	const hotels = [
		// Add your hotel data here
		// Example:
		{
			name: "Hotel Catalunya",
			imageUrl: "/hotel1.jpeg",
			description: "Luxury stay in the heart of Barcelona.",
		},
		{
			name: "La Playa Resort",
			imageUrl: "/hotel2.jpeg",
			description: "Beachside bliss and relaxation.",
		},
		// etc.
	];

	return (
		<div className="bg-gray-100 p-4">
			<div className="container mx-auto">
				<h2 className="font-bold text-2xl mb-4">Hotels in Catalonia</h2>
				<div className="flex flex-col">
					{hotels.map((hotel, index) => (
						<div
							key={index}
							className="mb-4 p-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
						>
							<div className="relative h-64 md:h-auto md:w-1/3">
								<Image
									src={hotel.imageUrl}
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
										{hotel.description}
									</p>
								</div>
								<div>
									<p className="text-gray-500 text-xs">
										{hotel.offer}
									</p>
									<div className="flex items-center mt-2">
										<div className="text-sm">
											<p className="text-gray-900 leading-none">
												{hotel.rating}
											</p>
											<p className="text-gray-600">
												{hotel.reviewsCount} comentarios
											</p>
										</div>
									</div>
									<div className="flex items-center justify-between mt-3">
										<span className="text-xl font-bold">
											{hotel.currency}
											{hotel.price}
										</span>
										<span className="line-through text-sm text-gray-600">
											{hotel.currency}
											{hotel.originalPrice}
										</span>
									</div>
									<Link href="/hotel-details">
										<p className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer">
											Ver disponibilidad
										</p>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
