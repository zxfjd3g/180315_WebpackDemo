import Vue from 'vue'
import $ from 'jquery'
import {cube} from "./js/math"
import App from './App.vue'

// import './assets/css/test1.css'
import './assets/css/test2.styl'

console.log(cube(3))

new Vue({
  el: '#app',
  render: h => h(App)
})




