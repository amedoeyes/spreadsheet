type LockedCellProps = {
	children?: React.ReactNode;
};

export default function CellLocked({ children }: LockedCellProps) {
	return (
		<td className="spreadsheet__cell spreadsheet__cell--locked">
			{children}
		</td>
	);
}
