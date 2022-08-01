import type { PluginOption, ViteDevServer } from "vite";

const defineTestRE = /\bdefineTest\((.*)\)/g;
const reg = /setup\(/g;

function parse(str) {
	//  不规范json字符串的转化
	return eval("(" + str + ")");
}

export default (options?: any): PluginOption => {
	let server: ViteDevServer;
	return {
		name: "vite-plugin-template",
		transform(code: string, id: string) {
			const matchs = Array.from(code.matchAll(defineTestRE));
			if (!matchs.length) return;
			for (const match of matchs) {
				const [, op] = match;

				const { name } = parse(op);

				code = code.replace(defineTestRE, "");

				if (name) {
					code = code.replace(reg, `name:"${name}",setup(`);
				}
				return {
					code,
				};
			}
		},
	};
};
