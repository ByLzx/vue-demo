import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: resolve => require(["@/views/index/index"], resolve),
      meta:{
        // keepAlive:true
      }
    },
    {
      path: "/login",
      name: "login",
      component: resolve => require(["@/views/login/index"], resolve)
    },
    {
      path: "/user",
      name: "user",
      component: resolve => require(["@/views/user"], resolve)
    },
    {
      path: "/product",
      name: "product",
      component: resolve => require(["@/views/proDetail/proDetail"], resolve),
      meta:{
        requireLogin:'true'
      }
    },
    
    {
      path: "/upload",
      name: "upload",
      component: resolve => require(["@/views/uploadImg"], resolve)
    }
  ]
});
