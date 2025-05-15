// Style
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import './style.css';

import { createApp } from 'vue';
import { createBootstrap } from 'bootstrap-vue-next';
import App from './App.vue';

const app = createApp(App);
app.use(createBootstrap()); // bootstrap-vue-next
app.mount('#app');