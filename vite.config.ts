import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
	plugins: [
		react(),
		dts({
			rollupTypes: true,
			include: ["src/lib/"],
		}),
		cssInjectedByJsPlugin(),
	],
	build: {
		lib: {
			entry: "src/lib/index.tsx",
			name: "Spreadsheet",
			formats: ["es"],
			fileName: () => "index.js",
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
