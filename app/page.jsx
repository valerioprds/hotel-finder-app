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
								Card title
							</h3>
							<p className="text-gray-700 text-base mb-4">
								Some quick example text to build on the card
								title and make up the bulk of the card content.
							</p>
							<Link href="/somewhere">
								<p className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
									Go somewhere
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
								src="/sagrada.jpeg"
								layout="fill"
								objectFit="cover"
								alt="Image cap"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg mb-2">
								Card title
							</h3>
							<p className="text-gray-700 text-base mb-4">
								Some quick example text to build on the card
								title and make up the bulk of the card content.
							</p>
							<Link href="/somewhere">
								<p className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
									Go somewhere
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
								src="/sagrada.jpeg"
								layout="fill"
								objectFit="cover"
								alt="Image cap"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg mb-2">
								Card title
							</h3>
							<p className="text-gray-700 text-base mb-4">
								Some quick example text to build on the card
								title and make up the bulk of the card content.
							</p>
							<Link href="/somewhere">
								<p className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
									Go somewhere
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
