<template>
  <div id="">
    <div class="back" v-if="opcity > 68&&needMounting">
      <div class="icon left" v-if="opcity > 88" @click="goBack">
        <van-icon name="arrow-left" />
      </div>
      <div class="icon right" v-if="opcity > 88">
        <van-icon name="cluster-o" />
      </div>
    </div>
    <div class="back" :class="{ mounting: needMounting }">
      <div class="icon_1" @click="goBack"><van-icon name="arrow-left" /></div>
      <div class="nav">
        <a v-for="(item,i) in nav" v-if="opcity < 88" :key="i" :href="item.href" @click="chooseNav(i)" :class="{'onNav':current===i}">{{item.name}}</a>
      </div>
      <div class="icon_1"><van-icon name="cluster-o" /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "back",
  props: {
    index: {
      type: Number,
      default: -1
    },
    needMounting: {
      type: Boolean,
      default: false
    },
    opcity: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      nav: [{name:'商品',href:'#product'},{name:'评价',href:'#remarks'},{name:'详情',href:'#details'}],
      current:0,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    chooseNav(i){
      this.current=i
    }
  },
  computed: {},
  watch: {
    opcity: {
      handler(val) {
        let opcity = 100 - val;
        console.log(opcity);
        if (this.needMounting) {
          document.getElementsByClassName("mounting")[0].style.opacity =
            opcity + "%";
        }
      }
    }
  },

  mounted() {}
};
</script>
<style lang="" scoped>
.back {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: 0 10.4px;
  height: 46.88px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.back .icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 29px;
  height: 29px;
  border-radius: 50%;
  font-size: 17px;
  color: #ddd;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5 !important;
}
.back .icon_1 {
  width: 41.66px;
  height: 41.66px;
  font-size: 23px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 99999;
}
.icon_1 .van-icon {
  font-weight: bold;
}
.back .nav {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}
.back .onNav{
  color:#ff5934 !important;
  font-weight: bold;
  position: relative;
}
.back .onNav::after{
  content:'';
  position: absolute;
  bottom:-6px;
  left:6px;
  right:6px;
  border-bottom:3px solid #ff5934;
  border-radius: 28%;
}
.back .nav a {
  display: inline-block;
  margin: 0 8.333px;
  outline: none;
  color: black;
}
.back .left {
  left: 14.4px;
}
.back .right {
  right: 14.4px;
}
.mounting {
  background: white;
  opacity: 0;
}
.mounting div {
  /* background-color: #fff; */
}
</style>
