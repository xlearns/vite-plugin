import { createUnplugin } from "unplugin";
import type { Options } from "../types";
export default createUnplugin<Options>((options) => {
	return {
		name: "test",
		vite: {
			async handleHotUpdate({ file }) {
				console.log(1, file);
			},
			async configResolved(config) {
				console.log(2, config);
			},
		},
	};
});
