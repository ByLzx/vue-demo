import cookie from '@/untils/cookie'
const user={
    namespaced:true,
    state:{
        userInfo:{
            account:'',
            name:'',
        },
        token:cookie.getCookie('token')||''
    },
    mutations:{
        updateUserInfo(state,data){
            state.userInfo=Object.assign(state.userInfo,data)
        }
    },
}
export default user