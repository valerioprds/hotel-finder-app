import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h2>Dashboard</h2>
			<p> ... </p>

			<div className="flex justify-center my-8">
				<Link href="/tickets">
					<button className="btn-primary">View Tickets</button>
				</Link>
			</div>

			<h2>Company Updates</h2>

			{/* Full-width Flex Container */}
			<div className="flex flex-col md:flex-row mx-auto w-full">
				<div className="w-11/12 md:w-1/2 px-2 mb-4 md:mb-0">
					<div className="card">
						<h3>New member of the web dev team...</h3>
						<p> ... </p>
					</div>
				</div>

				<div className="w-11/12 md:w-1/2 px-2">
					<div className="card">
						<h3>New website live!</h3>
						<p> ... </p>
					</div>
				</div>

				<div className="w-11/12 md:w-1/2 px-2">
					<div className="card">
						<h3>New website live!</h3>
						<p> ... </p>
					</div>
				</div>

				<div className="w-11/12 md:w-1/2 px-2">
					<div className="card">
						<h3>New website live!</h3>
						<p> ... </p>
					</div>
				</div>
			</div>
		</main>
	);
}
