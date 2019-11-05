import Vue from 'vue/dist/vue.esm'
//import Home from 'C:\\Users\\acarmona\\Desktop\\Vue\\vueapp\\app\\javascript\\home.vue'
//import Vue from 'vue'

import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
    //Vue.component('app-servers-status', Home);

    var app2 = new Vue({
        el: '#app2',
        data: {
            message: 'Hello Vue again!'
        }
    });
})


