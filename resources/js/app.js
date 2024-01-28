import './bootstrap';
import { createApp } from 'vue';
import App from '../views/components/App.vue';

const app = createApp();
app.component('app' , App);


app.mount('#app');
