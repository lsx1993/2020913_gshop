/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'


new Vue({
    el:'#app',
    //components:{App},用下方箭头函数替代
    //template:'<App/>'
    render: h =>h(App),
   
    router

})