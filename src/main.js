// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import axios from "axios";
import Vuex from "vuex";
import store from "./store/index.js";
import cookie from "@/untils/cookie.js";
Vue.use(Vant, Vuex);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
//请求拦截
axios.interceptors.request.use(
  config => {
    config.headers.sessionToken = cookie.getCookie("token") || "";
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  resp => {
    let res = resp.data;
    if (resp.status === 200) {
      switch (res.retcode) {
        case 1001:
          removeCookie("token");
          router.push("/login");
      }
    }
    return Promise.resolve(resp);
  },
  err => {
    return Promise.reject(err);
  }
);

//该路由是否需要登录及未登录跳转
router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    next();
  } else {
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
