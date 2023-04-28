import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		react(),
		dts({
			rollupTypes: true,
			include: ["src/lib/"],
			outputDir: "dist",
			copyDtsFiles: true,
		}),
	],
	build: {
		lib: {
			entry: "src/lib/index.tsx",
			name: "Spreadsheet",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
