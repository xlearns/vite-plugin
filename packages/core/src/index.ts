import { parseSFC } from "@plugin/common";
import { compileScript } from "@vue/compiler-sfc";
import { createUnplugin } from "unplugin";

import type { PluginOption, ViteDevServer } from "vite";

const DEFINE_OPTIONS = "defineTest";

export default createUnplugin((): any => {
	console.log(1);
	return {};
});

/*
return {
		name: "vite-plugin-template",
		transform(code: string, id: string) {
			if (!code.includes(DEFINE_OPTIONS)) return;
			const sfc = parseSFC(code, id);
			if (!sfc.scriptSetup) return;
			if (!sfc.scriptSetup.scriptSetupAst) {
				sfc.scriptSetup = compileScript(sfc, {
					id,
				});
			}
			const { script, scriptSetup } = sfc;

			console.log(scriptSetup, script);
		},
	};
*/
