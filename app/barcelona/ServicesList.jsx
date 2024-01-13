async function getServices() {
	const res = await fetch("http://localhost:4000/accommodations");

	return res.json();
}
export default async function servicesList() {
	const accommodations = await getServices();

	return (
		<>
			{accommodations.map((accommodations) => (
				<div
					key={accommodations.services}
					className="flex items-center text-gray-700 text-sm mb-2"
				>
					<p>{accommodations.services}</p>
				</div>
			))}
		</>
	);
}
/* 



*/
