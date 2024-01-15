import RoomServiceIcon from "@mui/icons-material/RoomService";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import accommodationsData from "../../_data/db.json";

async function getServices() {
	// Simula una llamada asincrónica
	return new Promise((resolve) => {
		setTimeout(() => resolve(accommodationsData), 1000);
	});
}

export default async function servicesList() {
	const data = await getServices();

	return (
		<>
			{data.accommodations.map((accommodation) => (
				<>
					<div
						key={accommodation.id}
						className="flex items-center text-gray-700 text-sm mb-2"
					>
						<RoomServiceIcon className="text-blue-400 mr-2 mb-1" />
						<p>{accommodation.services.join(", ")}</p>
					</div>
					<div
						key={accommodation.id}
						className="flex items-center text-gray-700 text-sm mb-2"
					>
						<AttachMoneyIcon
							className="mr-1"
							style={{ fontSize: "25px", fontWeight: "bold" }}
						/>
						<p style={{ fontSize: "25px", fontWeight: "bold" }}>
							{accommodation.price}
						</p>
					</div>
				</>
			))}
		</>
	);
}
