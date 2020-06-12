<template>
  <div>
    <input type="file" class="inputstyle" name="file" @change="PreviewImage" />
    <img :src="imageUrl" alt="" class="fileImg" />
  </div>
</template>
<script>
import { api } from "@/common/api";
import Cryptojs from "crypto-js";
export default {
  name: "",
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    PreviewImage(event) {
      this.$axios.get(api.qiniuToken).then(res => {
        let token = res.data.data.token;
        console.log(res, "res", token, "token");
        let add = "http://qapqy50ok.bkt.clouddn.com/";
        var file = event.target.files[0];
        var formData = new FormData();
        formData.append("file", file);
        formData.append("token", token);
        this.$axios.post("http://upload-z2.qiniu.com/", formData).then(ress => {
          console.log(ress, "ress????");
          let hash = ress.data.hash;
          let key = ress.data.key;
          let timestamp = new Date().getTime() + 1000 * 60 * 60;
          let imageUrl = add + key + "?e=" + timestamp;
          imageUrl = Cryptojs.HmacSHA256(
            imageUrl,
            "P7yoa0mleoJKCMHXjB_eoJGr9Z5x63sn1uL5saHm"
          ).toString();
          let Base64 = require("js-base64").Base64;
          console.log(Base64,"??6")
          imageUrl = Base64.encode(imageUrl);
          console.log(imageUrl,'????????')
          let token = `P7yoa0mleoJKCMHXjB_eoJGr9Z5x63sn1uL5saHm:${imageUrl}`;
          this.imageUrl = add + key + "?e=" + timestamp + "&token=" + imageUrl;
        });
      });
    }
  },
  mounted() {
    console.log(this.$axios, "axios");
  }
};
</script>
<style lang="" scoped>
.fileImg {
  width: 100px;
  height: 100px;
}
</style>
