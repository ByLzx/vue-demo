<template>
  <div>
    <app-head></app-head>
      <div class="page">
        <swipe></swipe>
        <cells></cells>
      </div>
  </div>
</template>
<script>
  import appHead from '@/components/index/appHead'
  import swipe from '@/components/index/swipe'
  import cells from '@/components/index/cells'
export default {
  name: "",
  components:{
    appHead,swipe,cells
  },
  data() {
    return {
      current:0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
      console.log(this.current,'current')
    },
  },
  mounted() {}
};
</script>
<style lang="" scoped>
  .page{
    width:100%;
    height: 100%;
    padding:1.966667rem /* 73.75/37.5 */ 0 1.386667rem /* 52/37.5 */ 0;
    background-color: rgb(245, 245, 245);
    overflow: hidden;
  }
  
</style>
