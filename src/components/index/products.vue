<template>
  <div>
    <div class="content">
      <div class="titleImg">
        <img :src="products.titleImg" />
      </div>
      <div class="proBox">
        <div class="pro" v-for="(item, i) in products.products" :key="i" @click="choosePro(item)">
          <product :products="item"></product>
        </div>
      </div>
      <div class="morePro">{{products.moreTitle}}</div>
    </div>
  </div>
</template>
<script>
import titleImg from "@/assets/titleImg.jpg";
import product from "@/components/index/product";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
export default {
  name: "products",
  components: {
    product
  },
  props: {
    products: {
      type: Object,
      default: () => {
        return {
          titleImg,
          moreTitle:'更多小米手机产品 >',
          products: [
            {
              img: product1,
              name: "小米10 Pro",
              dec: "骁龙865 / 50倍变焦",
              price: "4999",
              unprice: "5666"
            },
            {
              img: product2,
              name: "小米10",
              dec: "骁龙865/一亿像素相机",
              price: "3999",
              unprice: ""
            },
            {
              img: product3,
              name: "Redmi Note 8 Pro",
              dec: "6400万全场景四摄",
              price: "1199",
              unprice: "1399"
            },
            {
              img: product1,
              name: "Redmi K30 5G",
              dec: "双模5G，120Hz流速屏",
              price: "1899",
              unprice: ""
            }
          ]
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    choosePro(item){
      this.$emit('choosePro',item)
    }
  },
  mounted() {
    
  }
};
</script>
<style lang="" scoped>
.content {
  width: 100%;
  height: 100%;
  background: #fff;
}
.titleImg {
  width: 100%;
  height: 229.16px;
}
.titleImg img {
  width: 100%;
  height: 100%;
}
.proBox {
  width: 100%;
  height: 100%;
  padding: 3.5px 6.25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
}

.pro {
  width: 49.1%;
}
.morePro{
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top:1px solid #ccc;
    color: rgba(0,0,0,.6);
    font-size: 15px;
    
}
</style>
