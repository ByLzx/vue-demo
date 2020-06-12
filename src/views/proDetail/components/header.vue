<template>
  <div class="header">
      <div class="icon left">
        <van-icon name="arrow-left"/>
      </div>
      <div class="icon right">
          <img></img>
      </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="" scoped>
.header{
    position: fixed;
    top: 0;
    left:0;
    right:0;
    width:100%;
    height: 1.250133rem /* 46.88/37.5 */;
    padding:0 .277787rem /* 10.417/37.5 */;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
}
.icon{
    display: flex;
    align-items: center;
    justify-content: center;
}
.left{
    width:1.1192rem /* 41.97/37.5 */;
}
.right{
    widows: 1.110933rem /* 41.66/37.5 */;
}
</style>
