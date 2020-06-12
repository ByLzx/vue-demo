<template>
<div id="">
    <div class="back">
        <div class="left" @click="goBack">
          <van-icon name="arrow-left"/>
        </div>
        <div class="right">
          <van-icon name="cluster-o" />
        </div>
      </div>
</div>
</template>
<script>
export default {
name: 'back',
props:{
    index:{
        type:Number,
        default:-1
    }
},
data() {
return {
}
},
methods: {
    goBack(){
        this.$router.go(-1)
    }
},
mounted() {
}
}
</script>
<style lang='' scoped>
    .back{
  position: absolute;
  top: 10.4px;
  z-index: 1;
  width:100%;
  padding:0 10.4px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.back div{
  width:31.25px;
  height: 31.25px;
  border-radius: 50%;
  font-size: 17px;
  color: #ddd;
  background: rgba(0,0,0,.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>