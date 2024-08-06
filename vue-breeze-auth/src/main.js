import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import "./axios";
import "./style.css";
import App from "./App.vue";

import Echo from 'laravel-echo';
import io from 'socket.io-client';

window.io = io;

window.Echo = new Echo({
  broadcaster: 'socket.io',
  host: 'http://localhost:6001',
  transports: ['polling', 'websocket'],
});

const pinia = createPinia();

pinia.use(({store}) => {
    store.router=markRaw(router);
});

const app   = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
