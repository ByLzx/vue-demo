<template>
  <div id="swipe">
    <van-swipe
      class="my-swipe"
      :class="{'on':largePoint}"
      :autoplay="3000"
      indicator-color="white"
      @change="onChange"
    >
      <van-swipe-item v-for="(item,i) in list" :key="i"><img :src="item"/></van-swipe-item>
    </van-swipe>
    <div class="swipeOption" v-if="hasOption">
      <span>{{current+1}}</span>
      <span>/</span>
      <span>{{list.length}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "swipe",
  props:{
    largePoint:{
      type:Boolean,
      default:true
    },
    list:{
      type:Array,
      default:()=>{
        return []
      }
    },
    hasOption:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return { current: 0 };
  },
  methods: {
    onChange(i) {
      this.current = i;
    }
  },
  mounted() {}
};
</script>
<style lang="" scoped>
  #swipe{
    position: relative;
  }
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: .533333rem /* 20/37.5 */;
  height: 100%;
  text-align: center;
}
.my-swipe .van-swipe-item img{
    width:100%;
    height: 100%;
}
.swipeOption{
  position: absolute;
  bottom:20px;
  right:20px;
  z-index: 999;
  width:43.84px;
  height: 23.41px;
  background: rgba(0,0,0,.5);
  color: #fff;
  border-radius: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/deep/ .on .van-swipe__indicator{
    width:.213333rem /* 8/37.5 */;
    height: .213333rem /* 8/37.5 */;
}
</style>
