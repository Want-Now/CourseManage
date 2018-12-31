// The Vue build version to load with the `import` command

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
// import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import axios from './util/request'
import store from './vuex/store'




Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(VueAxios, axios)
Vue.use(VueRouter)
// Vue.prototype.$axios = axios
/* eslint-disable no-new */
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  store,
  created () {
    // this.$axios.defaults.withCredentials=true;
    // // this.$axios.defaults.baseURL='';
    // this.$axios.defaults.baseURL='http://ghctcourse.natapp1.cc';
    // this.$axios.interceptors.response.use(function (response) {
    //   return response;
    // }, function (error) {
    //   return Promise.reject(error);
    // });
  },

  components: { App },
  template: '<App/>'
})
