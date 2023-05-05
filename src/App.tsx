import { useState } from "react";
import Spreadsheet from "./lib";
import { Cells } from "./lib/index";

const ROWS = 100;
const COLUMNS = 10;

export default function App() {
	const [cells, setCells] = useState<Cells>(
		Array.from(Array(ROWS), () =>
			Array.from(Array(COLUMNS), () => ({ value: "" }))
		)
	);

	const handleChange = (cells: Cells) => setCells(cells);

	return <Spreadsheet cells={cells} onChange={handleChange} />;
}
