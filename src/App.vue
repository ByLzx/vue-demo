<template>
  <div id="app">
    <div class="header">
      <div class="header-bar">
        <div class="logo"><img src="./assets/logo.png" /></div>
        <div class="search">
          <van-icon name="search" size="17px" color="#c1bbbb" />
          <span>搜索商品名称</span>
        </div>
        <div class="admin">
          <van-icon name="contact" size="22px" color="#8c7c7c" />
        </div>
      </div>
      <div class="header-filter">
        <div class="nav-wrapper">
          <div
            class="nav"
            v-for="(item, i) in nav"
            :key="i"
            @click="chooseNav(i)"
          >
            <span :class="{ navon: index === i }">{{ item }}</span>
          </div>
        </div>
        <div class="arrowBox">
          <van-icon name="arrow-down" size="16px" color="#c3bcbc" />
        </div>
      </div>
      <div></div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      nav: ["推荐", "手机", "智能", "电视", "笔记本", "家电", "生活周边"],
      index: 0
    };
  },
  methods: {
    chooseNav(i) {
      this.index = i;
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
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #f2f2f2;
}
.header .header-bar {
  height: 43.75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .header-bar div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31.25px;
  padding: 0 10.5px;
}
.logo img {
  width: 80%;
}
.header .header-bar .search {
  flex: 1;
  height: 31.25px;
  justify-content: unset;
  font-size: 15.5px;
  padding-left: 6px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.3);
}
.header .header-bar .search span {
  margin-left: 5px;
}
.header .header-filter {
  position: relative;
  width: 100%;
}
.header .header-filter .nav-wrapper::-webkit-scrollbar {
  display: none;
}
.header .header-filter .nav-wrapper {
  /* width:100%; */
  height: 30px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow-x: auto;
}
.header .header-filter .nav {
  width: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #747474;
  padding: 0 13.5px;
}
.header .header-filter .nav span {
}
.navon {
  position: relative;
  color: #ed5b00;
}
.navon::after{
  content:'';
  position: absolute;
  left:0;
  right:0;
  bottom:-6px;
  width:100%;
  border-bottom: 2px solid #ed5b00;
  
}
.arrowBox {
  width: 35.5px;
  height: 29px;
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
  box-shadow: -25px 0 15px 0 #f2f2f2;
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: #f2f2f2;
}
.header .header-filter i {
}
</style>
