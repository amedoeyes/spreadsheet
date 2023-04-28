import CellEditable from "./CellEditable";
import CellLocked from "./CellLocked";
import { Cell, Cells } from "../types";

type ColProps = {
	col: Cell;
	rowIndex: number;
	colIndex: number;
	cells: Cells;
	tabIndex: number;
	onChange: (cells: Cells) => void;
};

export default function Col({
	col,
	rowIndex,
	colIndex,
	cells,
	tabIndex,
	onChange,
}: ColProps) {
	return col.locked ? (
		<CellLocked key={colIndex}>{col.value}</CellLocked>
	) : (
		<CellEditable
			key={colIndex}
			rowIndex={rowIndex}
			colIndex={colIndex}
			cells={cells}
			tabIndex={tabIndex}
			onChange={onChange}
		></CellEditable>
	);
}
