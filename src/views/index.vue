<template>
  <div id="index">
    <app-head></app-head>
    <div class="page">
      <swipe></swipe>
      <cells></cells>
      <products style="margin-top:8.33px"></products>
      <products style="margin-top:8.33px" :products='listData'></products>
    </div>
  </div>
</template>
<script>
import appHead from "@/components/index/appHead";
import swipe from "@/components/index/swipe";
import cells from "@/components/index/cells";
import titleImg from '@/assets/titleImg2.jpg'
import products from "@/components/index/products";
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
      listData: {
        titleImg,
        moreTitle: "更多小米笔记本产品 >",
        products: [
          {
            img: product1,
            name: 'Air 13.3" 2019款',
            dec: "新一代独立显卡",
            price: "4999",
            unprice: "5699"
          },
          {
            img: product2,
            name: '小米笔记本15.6" MX110 独显版',
            dec: "全面均衡的国民轻薄本",
            price: "3899	",
            unprice: "4299"
          },
          {
            img: product3,
            name: ' "小米游戏本"',
            dec: "6400万全场景四摄",
            price: "8999",
            unprice: ""
          },
          {
            img: product4,
            name: 'Pro 15.6" GTX显卡',
            dec: "更强悍的专业笔记本",
            price: "7999",
            unprice: ""
          }
        ]
      }
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
      console.log(this.current, "current");
    }
  },
  mounted() {}
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
</style>
