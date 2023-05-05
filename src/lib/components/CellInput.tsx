import { memo, useState } from "react";
import { Cell } from "../index";

type CellInputProps = {
	cell: Cell;
	tabIndex: number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function CellInput({ cell, tabIndex, onChange }: CellInputProps) {
	const [value, setValue] = useState(cell.value);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		onChange(e);
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
				className="spreadsheet__cell-input"
				type="text"
				tabIndex={tabIndex}
				inputMode={cell.inputMode}
				disabled={cell.locked}
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
		</td>
	);
}

export default memo(
	CellInput,
	(prevProps, nextProps) => prevProps.cell === nextProps.cell
);
