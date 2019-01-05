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

import moment from 'moment'

//全局过滤器
Vue.filter('dateFmt', (input, formatString = "YYYY-MM-DD") => {
  //es5函数参数设置默认值
  //const lastFormatString = formatString || ''

  // moment(input) 把时间字符串转成时间对象
  // format(formatString) 把时间对象，按照指定格式，格式化成符合条件的字符串
  return moment(input).format(formatString)
})

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(VueAxios, axios)
Vue.use(VueRouter)
// Vue.prototype.$axios = axios
/* eslint-disable no-new */
Vue.prototype.$axios = axios


Vue.prototype.back=function () {
  this.$router.go(-1);
}
Vue.prototype.chosecourse=function () {
  this.$router.push('/coursePagePC');
}
Vue.prototype.stuSeminar=function () {
  this.$router.push('/StudentSeminar');
}
Vue.prototype.stuCenter=function () {
  this.$router.push('/StuPersonalCenter');
}
Vue.prototype.teaSeminar=function () {
  this.$router.push('/TeacherSeminar');
}
Vue.prototype.teaCenter=function () {
  this.$router.push('/TeaPersonCenter');
}
Vue.prototype.backlogPage=function () {
  this.$router.push('/BacklogPage');
}
Vue.prototype.loginOutPC=function () {
  this.$router.push('/PC');
}


new Vue({
  el: '#app',
  router,
  store,
  // created () {
  //   this.$axios.defaults.withCredentials=true;
  //   // this.$axios.defaults.baseURL='';
  //   this.$axios.defaults.baseURL='http://ghctcourse.natapp1.cc';
  //   this.$axios.interceptors.response.use(function (response) {
  //     return response;
  //   }, function (error) {
  //     return Promise.reject(error);
  //   });
  // },
  components: { App },
  template: '<App/>'
})
