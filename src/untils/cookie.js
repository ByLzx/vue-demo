import cookie from 'js-cookie'
function setCookie(name,value){
    return cookie.set(name,value)
}
function getCookie(name){
    return cookie.get(name)
}
function removeCookie(name){
    return cookie.remove(name)
}
export default{
    setCookie,
    getCookie,
    removeCookie
}