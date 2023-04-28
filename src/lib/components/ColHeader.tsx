import { Header } from "../types";
import CellHeader from "./CellHeader";

type ColHeaderProps = {
	colHeader?: Header;
	rowIndex: number;
};

export default function ColHeader({ colHeader, rowIndex }: ColHeaderProps) {
	return (
		<CellHeader>
			{colHeader ? colHeader[rowIndex] : rowIndex + 1}
		</CellHeader>
	);
}
