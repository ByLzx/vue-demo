<template>
  <div>
    <div class="pro">
      <div class="img">
        <img :src="products.img" :style="{ height: imgHeight }" />
      </div>
      <div class="info">
        <div class="name">{{ products.name }}</div>
        <div class="dec">{{ products.dec }}</div>
        <div class="price">
          <span class="viewprice">¥{{ products.price }}</span>
          <span class="point">起</span>
          <s class="unprice" v-if="products.unprice">¥{{ products.unprice }}</s>
        </div>
      </div>
      <div class="btn" v-if="btnShow">立即购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    imgHeight: {
      type: String,
      default: "145.83px"
    },
    btnShow: {
      type: Boolean,
      default: true
    },
    products: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="" scoped>
.pro {
  width: 100%;
  height: 100%;
  padding-bottom: 10.417px;
}
.pro .img img {
  width: 100%;
}
.pro .info {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* padding: 10.417px 14.06px; */
}
.pro .info div {
  width: 100%;
  box-sizing: border-box;
  padding:0 14.06px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14.5px;
}
.pro .info .dec {
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
}
.pro .info .price {
  margin: 2px 0;
}
.pro .info .price .point{
    font-size: 12px;
  color: #ea625b;
/* margin-left: 2px; */
}
.pro .info .viewprice {
  color: #ea625b;
}
.pro .info .unprice {
  /* display: inline-block; */
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  margin: 0 2px;
}
.pro .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  width: 104.1px;
  height: 14px;
  background: #ea625b;
  color: #fff;
  padding: 8.33px 0;
  border-radius: 4px;
  margin: 0 auto;
}
</style>
