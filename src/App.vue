<template>
  <div id="app">
    <div class="header">
      <div class="header-bar">123</div>
      <div class="header-filter"></div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
  .header{
    position: fixed;
    top:0;
    left: 0;
    right: 0;

    background: #f2f2f2;
  }
  .header .header-bar{
    height:2.333333rem /* 87.5/37.5 */;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
