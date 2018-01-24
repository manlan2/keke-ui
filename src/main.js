import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './routers/routerConfig.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vcharts from 't-charts' //全局引入
import App from './App'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vcharts);

const router = new VueRouter(RouterConfig);
new Vue({
  el:"#app",
  components: { App },
  template: '<App/>',
  router,
})
