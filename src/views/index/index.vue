<template>
  <div id="index">
    <app-head></app-head>
    <div class="page">
      <div class="swipebox">
        <swipe :list="swipeList"></swipe>
      </div>
      <cells></cells>
      <products
        style="margin-top:8.33px"
        @choosePro="choosePro"
        v-for="(item, i) in listData"
        :key="i"
        :products="item"
      ></products>
    </div>
  </div>
</template>
<script>
import { api } from "@/common/api";

//头部
import appHead from "@/components/index/appHead";
//轮播组件
import swipe from "@/components/index/swipe";
//导航
import cells from "@/components/index/cells";
//商品列表
import products from "@/components/index/products";
//轮播图
import swipe1 from "@/assets/swipe_1.jpg";
import swipe2 from "@/assets/swipe_2.jpg";
import swipe3 from "@/assets/swipe_3.jpg";
//商品图
import titleImg from "@/assets/titleImg2.jpg";
import product1 from "@/assets/computer1.jpg";
import product2 from "@/assets/computer2.jpg";
import product3 from "@/assets/computer3.jpg";
import product4 from "@/assets/computer4.jpg";
export default {
  name: "",
  components: {
    appHead,
    swipe,
    cells,
    products
  },
  data() {
    return {
      current: 0,
      swipeList: [swipe1, swipe2, swipe3],
      listData: []
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
      console.log(this.current, "current");
    },
    //选择商品，进去详情页
    choosePro(item) {
      console.log(item, "item");
      this.$store.commit("index/setProInfo", item);
      this.$router.push({ path: "/product" });
    }
  },
  mounted() {
    this.$axios.post(api.proList, {}).then(res => {
      if (res.data.length > 0) {
        this.listData = JSON.parse(res.data);
        console.log(this.listData);
      }
    });
  }
};
</script>
<style lang="" scoped>
.page {
  width: 100%;
  height: 100%;
  padding: 1.966667rem /* 73.75/37.5 */ 0 1.386667rem /* 52/37.5 */ 0;
  background-color: rgb(245, 245, 245);
  overflow: hidden;
}
.swipebox {
  height: 5rem /* 187.5/37.5 */;
}
</style>
