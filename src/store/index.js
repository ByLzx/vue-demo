import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import index from './modules/index'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        user,
        index,  
    },
    strict:false
})