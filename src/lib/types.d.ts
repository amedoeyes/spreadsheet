export type Header = Array<string | number>;

export type Cell = {
	value: number | string;
	locked?: boolean;
	inputMode?:
		| "search"
		| "text"
		| "none"
		| "tel"
		| "url"
		| "email"
		| "numeric"
		| "decimal";
};

export type Cells = Array<Array<Cell>>;

export type Row = Array<Cell>;

export type onChange = (cells: Cells) => void;
