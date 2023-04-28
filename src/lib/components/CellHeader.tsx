type CellHeaderProps = {
	children?: React.ReactNode;
};

export default function CellHeader({ children }: CellHeaderProps) {
	return (
		<td className="spreadsheet__cell spreadsheet__cell-header">
			{children}
		</td>
	);
}
