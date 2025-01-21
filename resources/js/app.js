import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router';
// import store from './store/index.js';
import store from './store';


const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');