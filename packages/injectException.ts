import type { PluginOption } from "vite";
// 一个可以自动为函数注入 try catch 代码的 Vite 插件

export default (options?: any): PluginOption => {
	return {
		name: "vite-plugin-injectException",
	};
};
