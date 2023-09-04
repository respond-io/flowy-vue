import { createApp } from 'vue';
import FlowyPlugin from '@/index.js';
import DemoBlock from '@/demo_components/DemoBlock.vue';
import DemoNode from '@/demo_components/DemoNode.vue';
import App from './App.vue';

const app = createApp(App);

app.use(FlowyPlugin);
app.component('DemoBlock', DemoBlock);
app.component('DemoNode', DemoNode);

app.mount('#app');
