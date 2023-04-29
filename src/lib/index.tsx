import RowHeader from "./components/RowHeader";
import Row from "./components/Row";
import ColHeader from "./components/ColHeader";
import "./index.css";
import CellInput from "./components/CellInput";

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
	onChange: (cells: Cells) => void;
	rowHeader?: Array<string | number>;
	colHeader?: Array<string | number>;
};

export default function Spreadsheet({
	cells,
	rowHeader,
	colHeader,
	onChange,
}: SpreadsheetProps) {
	let tabIndex = 1;

	const handleChange = (rowIndex: number, colIndex: number) => {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			const updatedCells = structuredClone(cells);

			updatedCells[rowIndex][colIndex].value = e.target.value;
			onChange(updatedCells);
		};
	};

	return (
		<table className="spreadsheet">
			<tbody className="spreadsheet__body">
				<RowHeader rowHeader={rowHeader} cells={cells} />
				{cells.map((row, rowIndex) => (
					<Row key={rowIndex}>
						<ColHeader rowIndex={rowIndex} colHeader={colHeader} />
						{row.map((cell, cellIndex) => (
							<CellInput
								key={cellIndex}
								cell={cell}
								tabIndex={cell.locked ? -1 : tabIndex++}
								onChange={handleChange(rowIndex, cellIndex)}
							/>
						))}
					</Row>
				))}
			</tbody>
		</table>
	);
}
