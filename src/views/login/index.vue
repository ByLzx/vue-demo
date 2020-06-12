<template>
  <div id="login">
    <div class="input">
      <input v-model="name" placeholder="用户名" />
      <input v-model="account" placeholder="账户" />
      <input v-model="password" placeholder="密码" />
    </div>
    <div class="btn">
      <button @click="login">登录</button>
      <button @click="register">注册</button>
    </div>
  </div>
</template>
<script>
import { api } from "@/common/api";
import cookie from '@/untils/cookie'
import { service } from "@/common/service.js";
import {mapState} from 'vuex'
export default {
  name: "login",
  data() {
    return {
      name: "",
      account: "",
      password: ""
    };
  },
  methods: {
    login() {
      let data = {
        name: this.name,
        account: this.account,
        password: this.password
      };
      this.$axios.post(api.login, data).then(res => {
        if(res.data.retcode===200&&res.data.msg==='登录成功'){
          cookie.setCookie('token',res.data.token)
          this.$store.commit('user/updateUserInfo',res.data)
        }
      });
    },
    register() {
      let data={
        name:this.name,
        account:this.account,
        password:this.password
      }
      this.$axios.post(api.register,data).then(res=>{
        console.log(res,'ress')
      })
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  mounted() {
    
  }
};
</script>
<style lang="" scoped>
#login {
  padding: 0 /* 73.75/37.5 */ 0 1.386667rem /* 52/37.5 */ 0;
  box-sizing: border-box;
}
.input {
  width: 100%;
  text-align: center;
}
.input input {
  width: 200px;
  font-size: 14px;
}
.btn {
  width: 100%;
  text-align: center;
}
.btn button {
  width: 150px;
  height: 40px;
  font-size: 14px;
}
</style>
