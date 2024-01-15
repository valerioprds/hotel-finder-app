import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="p-4 bg-gray-100 sm:p-6 md:p-8 lg:p-10 xl:p-12">
			<h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 sm:text-4xl md:mb-8">
				Discover Spain&apos;s Wonders with Our Tailor-Made Travel
				Packages!
			</h2>
			<p className="text-lg text-gray-600">
				Dive into an unforgettable journey through Spain, a land of
				vibrant cultures, historic splendors, and breathtaking
				landscapes. From the artistic streets of Barcelona to the
				grandeur of Madrid&apos;s palaces, Spain offers an array of
				experiences for every traveler. Immerse yourself in the rich
				tapestry of Spanish life. Marvel at the architectural wonders
				that dot the skyline, indulge in the culinary delights that
				Spain is famed for, and soak in the sun on picturesque beaches.
				<span style={{ fontWeight: "bold" }}>
					&nbsp;Book with us now and embark on your dream Spanish
					adventure!
				</span>
			</p>

			<div className="flex justify-center my-8"></div>

			<h2 className="text-2xl font-semibold text-center text-gray-800 mb-4 sm:text-3xl md:mb-6">
				Our Travel Packages
			</h2>

			{/* Full-width Flex Container */}
			<div className="flex flex-wrap justify-center gap-4">
				{/* Card 1 */}
				<div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
					<div className="card bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="relative h-48 w-full">
							<Image
								src="/sagrada.jpeg"
								layout="fill"
								objectFit="cover"
								alt="Sagrada Familia"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg mb-2">
								Visit Barcelona
							</h3>
							<p className="text-gray-700 text-base mb-3">
								Uncover Barcelona&apos;s charm with Gaudí&apos;s
								masterpieces, vibrant culture, gastronomic
								delights, and picturesque streets!
							</p>
							<div className="flex flex-col sm:flex-row justify-between items-center">
								<small className="block mb-2 sm:mb-0 sm:mr-2 font-bold italic">
									From 99 Euros
								</small>
								<Link href="/barcelona" legacyBehavior>
									<a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
										Check Availability
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Card 2 */}
				<div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
					<div className="card bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="relative h-48 w-full">
							<Image
								src="/madrid.jpeg"
								layout="fill"
								objectFit="cover"
								alt="Madrid"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg mb-2">
								Visit Madrid
							</h3>
							<p className="text-gray-700 text-base mb-3">
								Dive into Madrid&apos;s Splendor: Immerse in
								Rich Art, Historic Palaces, Bustling Markets,
								and Exquisite Spanish Gastronomy!
							</p>
							<div className="flex flex-col sm:flex-row justify-between items-center">
								<small className="block mb-2 sm:mb-0 sm:mr-2 font-bold italic">
									From 120 Euros
								</small>
								<Link href="/madrid" legacyBehavior>
									<a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
										Check Availability
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Card 3 */}
				<div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
					<div className="card bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="relative h-48 w-full">
							<Image
								src="/torremolinos.jpg"
								layout="fill"
								objectFit="cover"
								alt="Torremolinos"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg mb-2">
								Visit Torremolinos
							</h3>
							<p className="text-gray-700 text-base mb-3">
								Experience Torremolinos: Breathtaking Beaches,
								Lively Promenades, Traditional Andalusian
								Cuisine, and Enchanting Cultural Festivities!
							</p>
							<div className="flex flex-col sm:flex-row justify-between items-center">
								<small className="block mb-2 sm:mb-0 sm:mr-2 font-bold italic">
									From 89 Euros
								</small>
								<Link href="/torremolinos" legacyBehavior>
									<a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-center">
										Check Availability
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
