import type { PluginOption } from "vite";

export default function vitePluginTemplate(): PluginOption {
	return {
		name: "auto-import",
		apply: "serve", // 指明它们仅在 'build' 或 'serve' 模式时调用
		buildStart() {
			// watchFile(defaultDirPath);
			console.log(1);
		},
	};
}
