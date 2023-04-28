import { useState } from "react";
import Spreadsheet from "./lib";
import { Cells } from "./lib/types";

export default function App() {
	const [cells, setCells] = useState<Cells>([
		[
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
		],
		[
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
		],
		[
			{ value: "locked", locked: true },
			{ value: "locked", locked: true },
			{ value: "locked", locked: true },
			{ value: "locked", locked: true },
			{ value: "locked", locked: true },
			{ value: "locked", locked: true },
			{ value: "locked", locked: true },
		],
		[
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
			{ value: "" },
		],
	]);

	const handleChange = (cells: Cells) => setCells(cells);

	return <Spreadsheet cells={cells} onChange={handleChange} />;
}
