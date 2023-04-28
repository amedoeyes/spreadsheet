import { Cells } from "../types";

type CellEditableProps = {
	rowIndex: number;
	colIndex: number;
	cells: Cells;
	tabIndex: number;
	onChange: (cells: Cells) => void;
};

export default function CellEditable({
	rowIndex,
	colIndex,
	cells,
	tabIndex,
	onChange,
}: CellEditableProps) {
	const handleChange = (rowIndex: number, colIndex: number) => {
		return (e: React.ChangeEvent<HTMLInputElement>) => {
			const updatedCells = structuredClone(cells);

			updatedCells[rowIndex][colIndex].value = e.target.value;
			onChange(updatedCells);
		};
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			const currentElement = e.target as HTMLInputElement;
			const nextTapIndex = currentElement.tabIndex + 1;

			const nextInput = document.querySelector(
				`input[tabindex="${nextTapIndex}"]`
			) as HTMLInputElement;

			if (nextInput) nextInput.focus();
			else currentElement.blur();
		}
	};

	return (
		<td className="spreadsheet__cell">
			<input
				className="spreadsheet__cell--editable"
				type="text"
				tabIndex={tabIndex}
				value={cells[rowIndex][colIndex].value}
				inputMode={cells[rowIndex][colIndex].inputMode}
				onChange={handleChange(rowIndex, colIndex)}
				onKeyDown={handleKeyDown}
			/>
		</td>
	);
}
