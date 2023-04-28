import { Cells, Header } from "../types";
import CellHeader from "./CellHeader";

type RowHeaderProps = {
	rowHeader?: Header;
	cells: Cells;
};

function getRowHeader(index: number): string {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let header = "";
	index++;
	while (index > 0) {
		header = alphabet[(index - 1) % 26] + header;
		index = (index / 26) | 0;
	}
	return header;
}

export default function RowHeader({ rowHeader, cells }: RowHeaderProps) {
	const defaultHeader = cells[0].map((_, index) => getRowHeader(index));
	const header = rowHeader?.slice(0, cells[0].length) || defaultHeader;

	return (
		<tr className="spreadsheet__row-header">
			<CellHeader />
			{header.map((element, index) => (
				<CellHeader key={index}>{element}</CellHeader>
			))}
		</tr>
	);
}
