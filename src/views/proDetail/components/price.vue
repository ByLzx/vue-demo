<template>
  <div id="price">
    <div class="pricebox">
      <div class="price" v-show="!detail.isSeckill">
        <span class="show point">¥</span>
        <span class="show">1699</span>
        <s class="unshow" v-show="detail.sprice">¥1899</s>
      </div>
      <div class="seckillPrice" v-show="detail.isSeckill">
        <div class="left">
          <div class="le top">
            <span class="ptitle">秒杀价</span>
            <span style="font-size:15px;font-weight:bold;margin-right:2px;"
              >¥</span
            >
            <span class="dprice">{{ detail.price }}</span>
          </div>
          <div class="le bottom">
            <span class="ptitle">市场价</span>
            <s class="sprice">¥{{ detail.sprice }}</s>
          </div>
        </div>
        <div class="right">
          <span style="margin-right: 2px;">距结束</span>
          <div>{{ hour }}</div>
          <span class="point">:</span>
          <div>{{ mint }}</div>
          <span class="point">:</span>
          <div>{{ sec }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    detail: {
      type: Object,
      default: () => {
        return {
          isSeckill: true,
          price: "4999",
          sprice: "5699",
          overTime: "2020-05-21 23:59:59"
        };
      }
    }
  },
  data() {
    return {
      hour: "0",
      mint: "0",
      sec: "0",
      timer:null
    };
  },
  methods: {
    dowtime() {
      let nowDate = new Date().getTime();
      let overTime = new Date(this.detail.overTime).getTime();
      let time = overTime - nowDate;
      if(time<0||!time){
        return
      }
      let nd = 1000 * 24 * 60 * 60;
      let nh = 1000 * 60 * 60;
      let nm = 1000 * 60;
      let ns = 1000;
      let day = Math.floor(time / nd);
      let hour =
        day > 0
          ? Math.floor((time % nd) / nh) + day * 24
          : Math.floor((time % nd) / nh);
      let mint = Math.floor(((time % nd) % nh) / nm);
      let sec = Math.floor((((time % nd) % nh) % nm) / ns);
      this.hour = hour < 10 ? "0" + hour : hour;
      this.mint = mint < 10 ? "0" + mint : mint;
      this.sec = sec < 10 ? "0" + sec : sec;
    }
  },
  computed: {},
  mounted() {
    if (this.detail.isSeckill) {
      this.dowtime();
      this.timer=setInterval(() => {
        this.dowtime();
      }, 1000);
    }
  },
  watch:{
      'detail.isSeckill':{
          handler(val){
              if(!val){
                  clearInterval(this.timer)
              }
          },
      }
  }
};
</script>
<style lang="" scoped>
.pricebox {
  width: 100%;
  height: 47.91px;
  box-sizing: border-box;
}
.price {
  display: flex;
  align-items: center;
  padding: 16.667px 16.667px 8.333px 16.667px;
}
.price .show {
  color: #ff6700;
  font-size: 25px;
}
.price .point {
  display: inline-block;
  margin-right: 3px;
  font-size: 20px;
}
.price .unshow {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 8px;
  margin-left: 10px;
}
.seckillPrice {
  width: 100%;
  height: 47.91px;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #ff6004, #ff2914);
  color: #fff;
  box-sizing: border-box;
}
.seckillPrice .left,
.right {
  flex: 1;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 10px;
}
.le {
  display: flex;
  align-items: center;
}
.top {
  width: 100%;
  height: 22px;
  margin-top: 5px;
}
.bottom {
  height: 14px;
  margin-bottom: 5px;
}
.seckillPrice .ptitle {
  font-size: 13px;
  margin-right: 5px;
}
.dprice {
  font-size: 22px;
  font-weight: bold;
}
.sprice {
  font-size: 13px;
  margin-top: 2px;
}
.seckillPrice .right {
  color: #fff;
  font-size: 12px;
  justify-content: flex-end;
}
.right div {
  font-size: 13px;
  font-weight: bold;
  background: #c20000;
  border-radius: 2px;
  padding: 0 2px;
}
.right .point {
  font-weight: bold;
  margin: 0 1px;
}
</style>
