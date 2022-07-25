import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePluginTest from "../src/vite";

export default defineConfig({
	plugins: [vue(), VitePluginTest({ name: 1 })],
});
