import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import HW from "./components/hw.vue";
const app = createApp(App);
app.use((App) => {
	App.component(HW.name, HW);
});
app.mount("#app");
