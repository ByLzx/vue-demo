<template>
  <div>
    <div class="footer">
      <div
        class="tab"
        v-for="(item, i) in footer"
        :key="i"
        @click="chooseTab(i)"
      >
        <div class="tabImg">
          <img :src="index === i ? item.url_1 : item.url" />
        </div>
        <div class="text" :class="{ on: index === i }">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import home from "@/assets/home.png";
import home_1 from "@/assets/home_1.png";
import items from "@/assets/items.png";
import items_1 from "@/assets/items_1.png";
import plant from "@/assets/plant.png";
import plant_1 from "@/assets/plant_2.png";
import car from "@/assets/car.png";
import car_1 from "@/assets/car_1.png";
import mine from "@/assets/mine.png";
import mine_1 from "@/assets/mine_1.png";

export default {
  name: "appFooter",
  props: {},
  data() {
    return {
      footer: [
        { name: "首页", url: home, url_1: home_1 },
        { name: "分类", url: items, url_1: items_1 },
        { name: "星球", url: plant, url_1: plant_1 },
        { name: "购物车", url: car, url_1: car_1 },
        { name: "我的", url: mine, url_1: mine_1 }
      ],
      index: 0
    };
  },
  methods: {
    chooseTab(i) {
      this.index = i;
    }
  },
  mounted() {}
};
</script>
<style lang="" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
  height: 1.386667rem /* 52/37.5 */;
  display: flex;
  align-items: center;
  box-shadow: 0 .08rem /* 3/37.5 */ .373333rem /* 14/37.5 */ .053333rem /* 2/37.5 */ rgba(0, 0, 0, 0.12);
}
.footer .tab {
  color: #999;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.tab div {
  width: 100%;
  text-align: center;
  font-size: .32rem /* 12/37.5 */;
  line-height: .346667rem /* 13/37.5 */;
}
.tab img {
  width: .746667rem /* 28/37.5 */;
  height: .746667rem /* 28/37.5 */;
}
.tab:nth-child(2) img,.tab:nth-child(5) img {
  width: .533333rem /* 20/37.5 */;
  height: .533333rem /* 20/37.5 */;
  margin-top: .106667rem /* 4/37.5 */;
}
.tab:nth-child(2) .text,.tab:nth-child(5) .text {
  display: inline-block;
  margin-top:.08rem /* 3/37.5 */;
}
.footer .tab i {
  display: inline-block;
  line-height: .746667rem /* 28/37.5 */;
  margin-bottom: .213333rem /* 8/37.5 */;
  margin-top: 0rem /* 0/37.5 */;
}
.on {
  color: #ff6700;
}
</style>
