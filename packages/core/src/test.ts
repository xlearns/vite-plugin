import { PluginOption } from "vite";

const fileRegex = /\.(my-file-ext)$/;

export default function myPlugin(): PluginOption {
	return {
		name: "transform-test",
		transform(code: string, id: string) {
			if (fileRegex.test(id)) {
			}
		},
	};
}
