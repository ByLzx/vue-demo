<template>
    <div>
      <div class="nav_header">
        <div class="nav_header-bar">
          <div class="logo"><img src="../../assets/logo.png" /></div>
          <div class="search">
            <van-icon name="search" size=".453333rem /* 17/37.5 */" color="#c1bbbb" />
            <span>搜索商品名称</span>
          </div>
          <div class="admin">
            <van-icon name="contact" size=".586667rem /* 22/37.5 */" color="#8c7c7c" />
          </div>
        </div>
        <div class="nav_header-filter">
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
          <div class="arrowBox" @click="navmask = !navmask">
            <van-icon
              :class="{ down: navmask }"
              name="arrow-down"
              size=".426667rem /* 16/37.5 */"
              color="#c3bcbc"
            />
          </div>
        </div>
        <div class="mask" v-show="navmask" @click="navmask = false"></div>
        <div class="main" :class="{ mainon: navmask }">
          <div class="title">全部</div>
          <div class="navbox">
            <div
              class="nav"
              :class="{ nav_on: index === i }"
              v-for="(item, i) in nav"
              :key="i"
              @click="chooseNav(i)"
            >
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "appHead",
    data() {
      return {
        nav: ["推荐", "手机", "智能", "电视", "笔记本", "家电", "生活周边"], //头部导航
        index: 0, //头部导航选中下标
        navmask: false, //是否显示筛选蒙层
        actNav: null
      };
    },
    methods: {
      chooseNav(i) {
        this.index = i;
      }
    },
    mounted() {},
    watch: {
      index(val) {
        setTimeout(() => {
          let ele = document.getElementsByClassName("navon")[0].offsetLeft;
          let scrollEle = document.getElementsByClassName("nav-wrapper")[0];
          if (ele > 173) {
            scrollEle.scrollLeft = 350;
          } else {
            scrollEle.scrollLeft = 0;
          }
        }, 0);
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    /* box-sizing: border-box; */
    margin: 0;
    padding: 0;
    scrollbar-width: none; /*Firefox*/
    -ms-overflow-style: none; /*IE10+*/
  }
  .nav_header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #f2f2f2;
    height: 1.966667rem /* 73.75/37.5 */;
    z-index: 9;
  }
  .nav_header .nav_header-bar {
    height: 1.166667rem /* 43.75/37.5 */;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav_header .nav_header-bar div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: .833333rem /* 31.25/37.5 */;
    padding: 0 .28rem /* 10.5/37.5 */;
  }
  .logo img {
    width: 80%;
  }
  .nav_header .nav_header-bar .search {
    flex: 1;
    height: .833333rem /* 31.25/37.5 */;
    justify-content: unset;
    font-size: .413333rem /* 15.5/37.5 */;
    padding-left: .16rem /* 6/37.5 */;
    border: .026667rem /* 1/37.5 */ solid #e5e5e5;
    background-color: #fff;
    border-radius: .053333rem /* 2/37.5 */;
    color: rgba(0, 0, 0, 0.3);
  }
  .nav_header .nav_header-bar .search span {
    margin-left: .133333rem /* 5/37.5 */;
  }
  .nav_header .nav_header-filter {
    position: relative;
    width: 100%;
  }
  .nav_header .nav_header-filter .nav-wrapper::-webkit-scrollbar {
    display: none;
  }
  .nav_header .nav_header-filter .nav-wrapper {
    /* width:100%; */
    height: .8rem /* 30/37.5 */;
    margin-right: .933333rem /* 35/37.5 */;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow-x: auto;
  }
  .nav_header .nav_header-filter .nav {
    width: 120%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .346667rem /* 13/37.5 */;
    color: #747474;
    padding: 0 .36rem /* 13.5/37.5 */;
  }
  .nav_header .nav_header-filter .nav span {
  }
  .navon {
    position: relative;
    color: #ed5b00;
  }
  .navon::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -.16rem /* 6/37.5 */;
    width: 100%;
    border-bottom: .053333rem /* 2/37.5 */ solid #ed5b00;
  }
  
  .arrowBox {
    width: .946667rem /* 35.5/37.5 */;
    height: .773333rem /* 29/37.5 */;
    position: absolute;
    top: 50%;
    right: -.266667rem /* 10/37.5 */;
    transform: translateY(-50%);
    box-shadow: -.48rem /* 18/37.5 */ 0 .4rem /* 15/37.5 */ 0 #f2f2f2;
    display: flex;
    align-items: center;
    z-index: 11;
    background-color: #f2f2f2;
  }
  .nav_header .nav_header-filter i {
    transition: all 0.2s;
  }
  .nav_header .nav_header-filter .down {
    transform: rotate(180deg);
  }
  .mask {
    position: fixed;
    top: 1.166667rem /* 43.75/37.5 */;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background: rgba(0, 0, 0, 0.3);
  }
  .main {
    position: fixed;
    top: 1.166667rem /* 43.75/37.5 */;
    transition: all 0.3s;
    width: 100%;
    height: 0rem /* 0/37.5 */;
    padding: 0 .346667rem /* 13/37.5 */;
    overflow: hidden;
    background: #f2f2f2;
    z-index: 10;
  }
  .mainon {
    height: 3.466667rem /* 130/37.5 */;
  }
  .title {
    height: 1.2rem /* 45/37.5 */;
    display: flex;
    align-items: center;
    font-size: .4rem /* 15/37.5 */;
  }
  .main .navbox {
    display: flex;
    flex-wrap: wrap;
    margin: 0 .277333rem /* 10.4/37.5 */ .333333rem /* 12.5/37.5 */ 0;
  }
  .main .navbox .nav {
    display: flex;
    width: 2.053333rem /* 77/37.5 */;
    height: .746667rem /* 28/37.5 */;
    font-size: .346667rem /* 13/37.5 */;
    align-items: center;
    justify-content: center;
    border: .026667rem /* 1/37.5 */ solid #e5e5e5;
    border-radius: .106667rem /* 4/37.5 */;
    background: #fff;
    margin: 0 .28rem /* 10.5/37.5 */ .333333rem /* 12.5/37.5 */ 0;
  }
  .main .navbox .nav_on {
    background-color: #fde0d5;
    border-color: #ff6700;
    color: #ff6700;
  }
  </style>
  