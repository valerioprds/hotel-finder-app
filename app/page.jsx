import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="p-4">
			<h2>Dashboard</h2>
			<p> ... </p>

			<div className="flex justify-center my-8"></div>

			<h2>Company Updates</h2>

			{/* Full-width Flex Container */}
			<div className="flex flex-wrap justify-center gap-4">
				<div className="w-full sm:w-1/2 lg:w-1/4 p-2">
					{/* primera card */}
					<div className="card bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="relative h-48 w-full">
							{/* Replace with your actual image path */}
							<Image
								src="/sagrada.jpeg"
								layout="fill"
								objectFit="cover"
								alt="Image cap"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg mb-2">
								Visit Barcelona
							</h3>
							<p className="text-gray-700 text-base mb-4">
								Uncover Barcelona &apos;s Charm: Gaudí &apos;s
								Masterpieces, Vibrant Culture, Gastronomic
								Delights, and Picturesque Streets Await!
							</p>
							<Link href="/barcelona">
								<p className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
									Check Availability
								</p>
							</Link>
						</div>
					</div>
				</div>
				{/* segunda card */}
				<div className="w-full sm:w-1/2 lg:w-1/4 p-2">
					<div className="card bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="relative h-48 w-full">
							{/* Replace with your actual image path */}
							<Image
								src="/madrid.jpeg"
								layout="fill"
								objectFit="cover"
								alt="Image cap"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg mb-2">
								Visit Madrid
							</h3>
							<p className="text-gray-700 text-base mb-4">
								Dive into Madrid &apos;s Splendor: Immerse in
								Rich Art, Historic Palaces, Bustling Markets,
								and Exquisite Spanish Gastronomy!
							</p>
							<Link href="/madrid">
								<p className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
									Check Availability
								</p>
							</Link>
						</div>
					</div>
				</div>

				{/* tercera card */}

				<div className="w-full sm:w-1/2 lg:w-1/4 p-2">
					<div className="card bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="relative h-48 w-full">
							{/* Replace with your actual image path */}
							<Image
								src="/torremolinos.jpg"
								layout="fill"
								objectFit="cover"
								alt="Image cap"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg mb-2">
								Visit Torremolinos
							</h3>
							<p className="text-gray-700 text-base mb-4">
								Experience Torremolinos: Breathtaking Beaches,
								Lively Promenades, Traditional Andalusian
								Cuisine, and Enchanting Cultural Festivities!
							</p>
							<Link href="/torremolinos">
								<p className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
									Check Availability
								</p>
							</Link>
						</div>
					</div>
				</div>

				{/* Repeat the above <div> block for each card you need */}
			</div>
		</main>
	);
}
