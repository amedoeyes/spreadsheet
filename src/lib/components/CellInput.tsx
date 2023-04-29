import { Cell } from "../index";

type CellInputProps = {
	cell: Cell;
	tabIndex: number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CellInput({
	cell,
	tabIndex,
	onChange,
}: CellInputProps) {
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
				value={cell.value}
				inputMode={cell.inputMode}
				onChange={onChange}
				onKeyDown={handleKeyDown}
				disabled={cell.locked}
			/>
		</td>
	);
}
