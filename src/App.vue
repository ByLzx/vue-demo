<template>
  <div id="app">
    <app-footer v-show="!(path === '/product')" :index="index"></app-footer>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
import appFooter from "@/components/appFooter";
export default {
  name: "App",
  components: { appFooter },
  data() {
    return {
      path: "",
      index: 0
    };
  },
  methods: {},
  mounted() {
    this.path = this.$route.path;
  },
  watch: {
    $route(to, from) {
      switch (to.path) {
        case "/":
          this.index = 0;
          break;
        case "/type":
          this.index = 1;
          break;
        case "/product":
          this.index = 2;
          break;
        case "/login":
          this.index = 3;
          break;
        case "/user":
          this.index = 4;
          break;
      }
      this.path=to.path
    }
  }
};
</script>

<style>
* {
  /* box-sizing: border-box; */
  margin: 0;
  padding: 0;
  scrollbar-width: none; /*Firefox*/
  -ms-overflow-style: none; /*IE10+*/
  font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular,
    Hiragino Sans GB, Microsoft Yahei, sans-serif;
}
</style>
