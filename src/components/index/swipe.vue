<template>
  <div>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      @change="onChange"
    >
      <van-swipe-item><img src="@/assets/swipe_1.jpg"/></van-swipe-item>
      <van-swipe-item><img src="@/assets/swipe_2.jpg"/></van-swipe-item>
      <van-swipe-item><img src="@/assets/swipe_3.jpg"/></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "swipe",
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
  height: 5rem /* 187.5/37.5 */;
  line-height: 5rem /* 187.5/37.5 */;
  text-align: center;
  background-color:#ccc;
}
.my-swipe .van-swipe-item img{
    width:100%;
    height: 100%;
}
/deep/ .my-swipe .van-swipe__indicator{
    width:.213333rem /* 8/37.5 */;
    height: .213333rem /* 8/37.5 */;
}
</style>
