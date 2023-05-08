import { useState } from "react";
import Spreadsheet from "./lib";
import { Cells } from "./lib/index";

export default function App() {
	const [rows, setRows] = useState(100);
	const [columns, setColumns] = useState(10);

	const generateCells = (rows: number, columns: number): Cells => {
		return Array.from(Array(rows), () =>
			Array.from(Array(columns), () => ({ value: "" }))
		);
	};

	const [cells, setCells] = useState<Cells>(generateCells(rows, columns));
	const handleCellsChange = (cells: Cells) => setCells(cells);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === "rows") setRows(Number(e.target.value));
		else if (e.target.name === "columns")
			setColumns(Number(e.target.value));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setCells(generateCells(rows, columns));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>rows</label>
					<input
						type="number"
						name="rows"
						value={rows}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label>columns</label>
					<input
						type="number"
						name="columns"
						value={columns}
						onChange={handleChange}
						required
					/>
				</div>

				<button>Generate</button>
			</form>

			<Spreadsheet cells={cells} onChange={handleCellsChange} />
		</div>
	);
}
