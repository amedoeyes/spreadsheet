import RowHeader from "./components/RowHeader";
import ColHeader from "./components/ColHeader";
import "./index.css";
import CellInput from "./components/CellInput";
import { useEffect, useState } from "react";
import cloneDeep from "lodash.clonedeep";
import isEqual from "lodash.isequal";

export type Cell = {
	value: number | string;
	locked?: boolean;
	inputMode?:
		| "search"
		| "text"
		| "none"
		| "tel"
		| "url"
		| "email"
		| "numeric"
		| "decimal";
};

export type Cells = Array<Array<Cell>>;

type SpreadsheetProps = {
	cells: Cells;
	onChange?: (cells: Cells) => void;
	rowHeader?: Array<string | number>;
	colHeader?: Array<string | number>;
	darkMode?: boolean;
};

export default function Spreadsheet({
	cells,
	rowHeader,
	colHeader,
	onChange,
	darkMode = false,
}: SpreadsheetProps) {
	let tabIndex = 1;
	const [localCells, setLocalCells] = useState<Cells>(cells);

	const handleChange = (rowIndex: number, colIndex: number) => {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			const updatedCells = cloneDeep(localCells);
			updatedCells[rowIndex][colIndex].value = e.target.value;

			setLocalCells(updatedCells);
			onChange && onChange(updatedCells);
		};
	};

	useEffect(() => {
		!isEqual(cells, localCells) && setLocalCells(cells);
	}, [cells]);

	return (
		<table
			className={"spreadsheet" + (darkMode ? " spreadsheet--dark" : "")}
		>
			<tbody className="spreadsheet__body">
				<RowHeader rowHeader={rowHeader} cells={localCells} />
				{localCells.map((row, rowIndex) => (
					<tr className="spreadsheet__row" key={rowIndex}>
						<ColHeader rowIndex={rowIndex} colHeader={colHeader} />
						{row.map((cell, cellIndex) => (
							<CellInput
								key={cellIndex}
								cell={cell}
								tabIndex={cell.locked ? -1 : tabIndex++}
								onChange={handleChange(rowIndex, cellIndex)}
							/>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
