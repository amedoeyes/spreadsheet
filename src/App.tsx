import { useState } from "react";
import Spreadsheet from "./lib";
import { Cells } from "./lib/index";

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
			{ value: "this", locked: true },
			{ value: "is", locked: true },
			{ value: "a", locked: true },
			{ value: "locked", locked: true },
			{ value: "cell", locked: true },
			{ value: "", locked: true },
			{ value: "", locked: true },
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
