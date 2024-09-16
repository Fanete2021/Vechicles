import { createApp } from 'vue'
import App from './app/App.vue'
import store from "@/app/store/index.js";

const app = createApp(App);

app.use(store).mount('#app');
