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
								Visit Catalonia
							</h3>
							<p className="text-gray-700 text-base mb-4">
								Discover the Vibrant Heart of Spain: Explore
								Catalonia &apos;s Rich History, Stunning
								Architecture, and Breathtaking Landscapes!
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
								src="/basco.jpg"
								layout="fill"
								objectFit="cover"
								alt="Image cap"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg mb-2">
								Visit the Basque Country
							</h3>
							<p className="text-gray-700 text-base mb-4">
								Experience the Unique Charm of Basque Country:
								Captivating Culture, Exquisite Cuisine, and
								Majestic Natural Beauty Await!
							</p>
							<Link href="/somewhere">
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
								src="/canarias.jpg"
								layout="fill"
								objectFit="cover"
								alt="Image cap"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg mb-2">
								Visit the Canary Islands
							</h3>
							<p className="text-gray-700 text-base mb-4">
								Escape to the Canary Islands: A Paradise of
								Sun-Kissed Beaches, Exotic Landscapes,
								Adventure, and Unforgettable Memories!
							</p>
							<Link href="/somewhere">
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
