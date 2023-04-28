import RowHeader from "./components/RowHeader";
import Row from "./components/Row";
import ColHeader from "./components/ColHeader";
import Col from "./components/Col";
import "./index.css";
import { Cells, Header } from "./types";

type Props = {
	cells: Cells;
	rowHeader?: Header;
	colHeader?: Header;
	onChange: (cells: Cells) => void;
};

export default function Spreadsheet({
	cells,
	rowHeader,
	colHeader,
	onChange,
}: Props) {
	let tabIndex = 1;

	return (
		<table className="spreadsheet">
			<tbody className="spreadsheet__body">
				<RowHeader rowHeader={rowHeader} cells={cells} />
				{cells.map((row, rowIndex) => (
					<Row key={rowIndex}>
						<ColHeader rowIndex={rowIndex} colHeader={colHeader} />
						{row.map((col, colIndex) => (
							<Col
								key={colIndex}
								col={col}
								rowIndex={rowIndex}
								colIndex={colIndex}
								cells={cells}
								tabIndex={col.locked ? -1 : tabIndex++}
								onChange={onChange}
							/>
						))}
					</Row>
				))}
			</tbody>
		</table>
	);
}
