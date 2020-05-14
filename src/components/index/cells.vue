<template>
  <div>
    <div class="cells">
      <cell
        v-for="(item, i) in list"
        :key="i"
        :width="cellWidth"
        :height="cellHeight"
        :obj="item"
      ></cell>
    </div>
  </div>
</template>
<script>
import cell from "@/components/common/cell";
import cell1 from "@/assets/cell1.png";
import cell2 from "@/assets/cell2.png";
import cell3 from "@/assets/cell3.png";
import cell4 from "@/assets/cell4.png";
import cell5 from "@/assets/cell5.png";
import cell6 from "@/assets/cell6.png";
import cell7 from "@/assets/cell7.png";
import cell8 from "@/assets/cell8.png";
import cell9 from "@/assets/cell9.png";
import cell10 from "@/assets/cell10.png";
export default {
  components: {
    cell
  },
  name: "cells",
  props: {
    list: {
      type: Array,
      default: () => {
        return [
          { name: "", url: cell1 },
          { name: "", url: cell2 },
          { name: "", url: cell3 },
          { name: "", url: cell4 },
          { name: "", url: cell5 },
          { name: "", url: cell6 },
          { name: "", url: cell7 },
          { name: "", url: cell8 },
          { name: "", url: cell9 },
          { name: "", url: cell10 }
        ];
      }
    },
    cellsWidth: {
      type: String,
      default: "100%"
    },
    cellsHeight: {
      type: String,
      default: "100%"
    },
    cellWidth: {
      type: String,
      default: "2rem /* 75/37.5 */"
    },
    cellHeight: {
      type: String,
      default: "2.004267rem /* 75.16/37.5 */"
    }
  },
  data() {
    return {};
  },
  methods: {
    chooseCell(i) {
      console.log(i);
    }
  },
  mounted() {}
};
</script>
<style lang="" scoped>
.cells {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
