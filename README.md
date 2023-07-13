引入图片用 <img :src="require('')"/>
引入全局默认样式表 main.js import '@/assets/static/styles/reset.css'
引入 vant 组件库 npm i vant
全局注册vant组件库 main.js

//引入vant组件库
import vant from 'vant';
import 'vant/lib/index.css';
createApp(App).use(router).use(vant).mount('#app');

安装响应式插件
npm i postcss-px-to-viewport
npm install postcss-pxtorem -D

安装axios
npm i axios

引入变量css
assets/static/styles/var.css   
->  main.js import '@/assets/static/styles/var.css'

安装 amfe-flexible（postcss-px-to-viewport前置？）
npm i amfe-flexible
//引入响应式px->rem 前置 -> main.js
-> main.js import 'amfe-flexible';