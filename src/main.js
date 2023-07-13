import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入全局公共样式表
import '@/assets/static/styles/reset.css'
//引入vant组件库
import vant from 'vant';
import 'vant/lib/index.css';
//引入变量css
import '@/assets/static/styles/var.css'
//引入响应式px->rem 前置
import 'amfe-flexible';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(vant);
app.mount('#app');

