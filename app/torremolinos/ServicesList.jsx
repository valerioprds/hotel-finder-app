import RoomServiceIcon from "@mui/icons-material/RoomService";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

async function getServices() {
	const res = await fetch("http://localhost:4000/accommodations");

	return res.json();
}
export default async function servicesList() {
	const accommodations = await getServices();

	return (
		<>
			{accommodations.map((accommodations) => (
				<>
					<div
						key={accommodations.services}
						className="flex items-center text-gray-700 text-sm mb-2"
					>
						<RoomServiceIcon className="text-blue-400 mr-2 mb-1" />
						<p>{accommodations.services}</p>
					</div>
					<div
						key={accommodations.price}
						className="flex items-center text-gray-700 text-sm mb-2"
					>
						{" "}
						<AttachMoneyIcon
							className="mr-1"
							style={{ fontSize: "25px", fontWeight: "bold" }}
						/>
						<p style={{ fontSize: "25px", fontWeight: "bold" }}>
							{accommodations.price}
						</p>
					</div>
				</>
			))}
		</>
	);
}
