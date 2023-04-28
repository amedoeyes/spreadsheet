type RowProps = {
	children?: React.ReactNode;
};

export default function Row({ children }: RowProps) {
	return <tr className="spreadsheet__row">{children}</tr>;
}
