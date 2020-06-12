<template>
  <div id="proDetail">
    <div class="main">
      <Pheader></Pheader>
      <div class="swipebox">
        <back></back>
        <swipe :list="obj.swipeList" :largePoint="false"></swipe>
      </div>
      <price :detail="obj.price"></price>
      <div class="title">{{ obj.title }}</div>
      <div class="info">{{ obj.info.detail }}</div>
      <div class="infoImg">
        <div class="item" v-for="(item, i) in obj.config">
          <div class="pitem item_top">
            <img :src="item.img" />
          </div>
          <div class="pitem item_cen">{{ item.name }}</div>
          <div class="pitem item_bot">{{ item.info }}</div>
        </div>
      </div>
      <div class="introduce">
        <div class="i-main">
          <div class="i-title">为你推荐</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { api } from "@/common/api";
import swipe from "@/components/index/swipe";
import back from "./components/back";
import price from "./components/price";
import Pheader from "./components/header";
import { mapState } from "vuex";
export default {
  name: "proDetail",
  components: {
    swipe,
    back,
    price,
    Pheader
  },
  data() {
    return {
      obj: {
        id: "c1",
        swipeList: [
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e775ba2bc7941d4f7fcf06375dc7c85e.jpg",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b40616de6b7d021c530d18ea0611d53.jpg",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b419f785a96aee951f0461bc72f51e5b.jpg",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/415ac1f96daf10c7c5ea8244a1c81336.jpg"
        ],
        price: {
          isSeckill: true,
          price: "4999",
          sprice: "5699",
          overTime: "2020-06-26 23:59:59"
        },
        title: 'Air 13.3" 2019款',
        info: {
          import: "小米笔记本520特惠！快来抢购吧！",
          detail:
            "酷睿i5处理器 / 轻薄全金属机身 / MX250独立显卡 / 9.5小时超长续航 / FHD全高清屏幕 / 指纹解锁 / 512GB固态硬盘 / 兼顾办公娱乐与轻薄的高性能笔记本"
        },
        config: [
          {
            img:
              "https://i8.mifile.cn/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
            name: "Intel i5",
            info: "CPU"
          },
          {
            img:
              "https://i8.mifile.cn/b2c-mimall-media/a9298b07c99ef966b063dea874624a71.png",
            name: "独立显卡MX250",
            info: "显卡类型"
          },
          {
            img:
              "https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png",
            name: "大内存",
            info: "8GB"
          },
          {
            img:
              "https://i8.mifile.cn/b2c-mimall-media/768819862203c438b713192f0134ada9.png",
            name: "512GB",
            info: "含固态硬盘"
          },
          {
            img:
              "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
            name: "中等屏幕",
            info: "13.3英寸"
          },
          {
            img:
              "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
            name: "全高清屏",
            info: "屏幕分辨率"
          },
          {
            img:
              "https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png",
            name: "待机时长",
            info: ">8小时"
          }
        ]
      }
    };
  },
  methods: {},
  computed: {
    ...mapState("index", ["proInfo"])
  },
  mounted() {
    this.$axios
      .post(api.proDetail, { proId: this.proInfo.id || "" })
      .then(res => {
        try {
          let data = JSON.parse(res.data[0].proDetail);
          this.obj = data;
        } catch (error) {}
      });
  }
};
</script>
<style lang="" scoped>
#proDetail {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #f7f7f7;
}

.swipebox {
  height: 100%;
  height: 10.986667rem /* 412/37.5 */;
  position: relative;
  background: #fff;
}
.title {
  font-size: 0.586667rem /* 22/37.5 */;
  color: #3c3c3c;
  padding: 0.222213rem /* 8.333/37.5 */ 0.444453rem /* 16.667/37.5 */;
  box-sizing: border-box;
  background: #fff;
}
.info {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.444453rem 0.533333rem /* 20/37.5 */ 0.444453rem /* 16.667/37.5 */;
  word-break: break-all;
  color: rgba(0, 0, 0, 0.54);
  background: #fff;
  font-size: 0.346667rem /* 13/37.5 */;
}
.infoImg {
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  overflow-x: auto;
  color: #3c3c3c;
  white-space: nowrap;
  border-top: 0.026667rem /* 1/37.5 */ solid #ccc;
  background: #fff;
}
.item {
  position: relative;
  min-width: 2.333333rem /* 87.5/37.5 */;
  padding: 0.533333rem 0 /* 20/37.5 */;
  font-size: 0.346667rem /* 13/37.5 */;
  min-height: 1.497067rem /* 56.14/37.5 */;
  color: #3c3c3c;
}
.pitem {
  width: 100%;
  white-space: pre-wrap;
  text-align: center;
}
.item_top {
  width: 100%;
  height: 0.555467rem /* 20.83/37.5 */;
  margin-bottom: 0.106667rem /* 4/37.5 */;
}
.item_top img {
  width: 0.555467rem /* 20.83/37.5 */;
  height: 0.555467rem /* 20.83/37.5 */;
}
.item::after {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0.053333rem /* 2/37.5 */;
  height: 5.333333rem /* 200/37.5 */;
  border-right: 0.053333rem /* 2/37.5 */ solid #d9d9d9;
  transform: scale(0.5);
}
.introduce {
  width: 100%;
  background: #fff;
  margin-top: .533333rem /* 20/37.5 */;
  padding: .444453rem /* 16.667/37.5 */;
  box-sizing: border-box;
}
.i-main{
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  height: 5.3808rem /* 201.78/37.5 */;
  border-radius: 8px;
  border:1px solid #e5e5e5;
  border-right:none;
}
.i-title{
  width:100%;
  height: 41.66px;
  border-bottom:1px solid #e5e5e5;  
  color:#ff6700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
