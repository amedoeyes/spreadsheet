import CellHeader from "./CellHeader";

type ColHeaderProps = {
	colHeader?: Array<string | number>;
	rowIndex: number;
};

export default function ColHeader({ colHeader, rowIndex }: ColHeaderProps) {
	return (
		<CellHeader>
			{colHeader ? colHeader[rowIndex] : rowIndex + 1}
		</CellHeader>
	);
}
