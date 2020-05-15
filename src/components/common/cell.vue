<template>
  <div>
    <div
      class="cell"
      :style="{ height: height, width: width }"
      @click="chooseCell"
    >
      <div class="cellImg">
        <img :src="obj.url"/>
      </div>
      <div class="text">{{ obj.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    height: {
      type: String,
      default: ".8rem /* 30/37.5 */"
    },
    width: {
      type: String,
      default: ".8rem /* 30/37.5 */"
    },

    obj: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    chooseCell() {
      console.log("click cell");
    }
  },
  mounted() {}
};
</script>
<style lang="" scoped>
.cell {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.cellImg {
  width: 100%;
  height: 100%;
  text-align: center;
}
.cellImg img {
  width: 100%;
  height: 100%;
}
</style>
