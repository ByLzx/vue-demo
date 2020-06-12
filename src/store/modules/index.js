// import Vue from 'vue'
const pro = {
  namespaced: true,
  state: {
    proInfo: {}
  },
  mutations: {
    setProInfo(state, data) {
      state.proInfo = data;
    }
  }
};
export default pro;
