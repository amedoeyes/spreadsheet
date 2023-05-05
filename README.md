# Spreadsheet

![preview](preview.png)

A simple react spreadsheet component.

## Installation

```bash
npm i @amedoeyes/spreadsheet
```

## Usage

```ts
import Spreadsheet, { Cells } from "@amedoeyes/spreadsheet";
import { useState } from "react";

export default function App() {
	const [cells, setCells] = useState<Cells>([
		[{ value: "" }, { value: "" }, { value: "" }],
		[{ value: "" }, { value: "" }, { value: "" }],
		[{ value: "" }, { value: "" }, { value: "" }],
	]);

	const handleChange = (cells: Cells) => setCells(cells);

	return <Spreadsheet cells={cells} onChange={handleChange} />;
}
```

#### Types

```ts
type Cell = {
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

type Cells = Array<Array<Cell>>;
```

#### Styling

You can style it by using the following classes:

```css
 spreadsheet
 spreadsheet--dark
 spreadsheet__body
 spreadsheet__cell
 spreadsheet__cell-header
 spreadsheet__cell-input
```
