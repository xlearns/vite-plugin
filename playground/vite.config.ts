import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePluginTest from "../packages/test";
// import VitePluginTest from "../packages/core/src/test";

export default defineConfig({
	plugins: [vue(), VitePluginTest()],
});
