<template>
  <div id="proDetail">
    <div class="main">
      <Pheader></Pheader>
      <div class="swipebox" id="product">
        <back :needMounting="true" :opcity="opcity"></back>
        <swipe
          :list="obj.swipeList"
          :largePoint="false"
          :hasOption="true"
        ></swipe>
      </div>
      <price :detail="obj.price"></price>
      <div class="title">{{ obj.title }}</div>
      <div class="info">{{ obj.info ? obj.info.detail : "" }}</div>
      <div class="infoImg">
        <div class="item" v-for="(item, i) in obj.config">
          <div class="pitem item_top">
            <img :src="item.img" />
          </div>
          <div class="pitem item_cen">{{ item.name }}</div>
          <div class="pitem item_bot">{{ item.info }}</div>
        </div>
      </div>
      <div class="introduce" id="remarks">
        <div class="i-main">
          <div class="i-title">为你推荐</div>
          <div class="i-pro">
            <div class="proitem" v-for="(item, i) in _intro" :key="i">
              <div class="proimg"><img :src="item.img" /></div>
              <div class="proname">{{ item.name }}</div>
              <div class="proprice">￥{{ item.price }}起</div>
            </div>
          </div>
        </div>
      </div>
      <div class="details" id="details">
        <div class="title">详情</div>
        <div class="imgs">
          <img v-for="(item, i) in imgList" :key="i" :src="item" />
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>
<script>
import { api } from "@/common/api";
import imgList from "@/common/imgList";
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
      introList: [],
      compareHeight: 0,
      opcity: 0,
      obj: {},
      imgList
    };
  },
  methods: {
    getIntro() {
      this.$axios.post(api.proList, {}).then(res => {
        if (res.data.length > 0) {
          this.introList = JSON.parse(res.data);
          console.log(this.introList);
          let dom1 = document.getElementById("swipe");
          let dom2 = document.getElementById("price");
          let height =
            parseInt(dom1.clientHeight) + parseInt(dom2.clientHeight);
          this.compareHeight = height;
          window.scrollTo(0, 0);
        }
      });
    },
    handlerScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let reduce =
        (
          (parseInt(this.compareHeight) - scrollTop) /
          parseInt(this.compareHeight)
        ).toFixed(2) * 100;
      this.opcity = reduce;
    }
  },
  computed: {
    ...mapState("index", ["proInfo"]),
    _intro() {
      try {
        return [...this.introList[0].products, ...this.introList[1].products];
      } catch (error) {
        return [];
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handlerScroll);
    this.$axios
      .post(api.proDetail, { proId: this.proInfo.id || "" })
      .then(res => {
        try {
          let data = JSON.parse(res.data[0].proDetail);
          this.obj = data;
        } catch (error) {}
      });
    this.getIntro();
    console.log(imgList, "imglist_______________");
  }
};
</script>
<style lang="" scoped>
#proDetail {
  box-sizing: border-box;
  padding: 0 0 50px 0;
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
  padding-top: 10px;
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
  margin-top: 0.533333rem /* 20/37.5 */;
  padding: 0.444453rem /* 16.667/37.5 */;
  box-sizing: border-box;
}
.i-main {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  height: 5.3808rem /* 201.78/37.5 */;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  border-right: none;
}
.i-title {
  width: 100%;
  height: 41.66px;
  border-bottom: 1px solid #e5e5e5;
  color: #ff6700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.i-pro {
  width: 100%;
  overflow-x: auto;
  padding: 16.667px;
  font-size: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.proitem {
  width: 93.75px;
  box-sizing: border-box;
  text-align: center;
  margin-right: 8.33px;
}
.proimg {
  width: 85.41px;
  height: 85.41px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.proimg img {
  width: 97%;
  height: 97%;
}
.proname {
  margin-top: 10.417px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.proprice {
  color: #ff6700;
}
.details img {
  width: 100%;
}
</style>
