import { Suspense } from "react";
import TicketsList from "./TicketsList";
//import loading from "../loading";
import Loading from "../loading";

export default function Tickets() {
	return (
		<main>
			<nav>
				<div>
					<h2>Tickets</h2>
					<p>
						<small>Currently open tickets</small>
					</p>
				</div>
			</nav>

			<Suspense fallback={<Loading />}>
				<TicketsList />
			</Suspense>
		</main>
	);
}
// nested routes example /news/latest
