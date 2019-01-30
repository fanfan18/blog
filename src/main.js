// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' 
import BScroll from 'better-scroll'
// import Resource from 'vue-resource'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(Resource) 
Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.baseURL='https://wd6425158212xaccax.wilddogio.com'
// axios.defaults.headers.common[Authorization]=''
Vue.prototype.$http = axios;
 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
