import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,//路由
  store,//vuex
  render: h => h(App),//将App挂载到app
}).$mount('#app');
// 入口文件