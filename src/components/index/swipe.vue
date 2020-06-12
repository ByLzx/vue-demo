<template>
  <div>
    <van-swipe
      class="my-swipe"
      :class="{'on':largePoint}"
      :autoplay="3000"
      indicator-color="white"
      @change="onChange"
    >
      <van-swipe-item v-for="(item,i) in list" :key="i"><img :src="item"/></van-swipe-item>
    </van-swipe>
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
/deep/ .on .van-swipe__indicator{
    width:.213333rem /* 8/37.5 */;
    height: .213333rem /* 8/37.5 */;
}
</style>
