// 引入第三方js模块
import $ from 'jquery'
// 引入自定义js模块
import {cube} from './js/math'
// 引入css模块
//import './assets/css/test1.css'
// 引入less模块
import './assets/css/test2.less'
// 引入json模块
import lessions from './assets/json/lessons.json'

console.log(cube(3)) // 27

$(function () {
  const $app = $('#app')

  // 根据lessions生成一个列表显示到app中
  const $ul = $('<ul>')

  $app.append($ul)

  lessions.forEach(lession => {
    $ul.append(`<li>课程名: <span class="lesson-name">${lession.name}</span>, 时间: ${lession.days}天</li>`)
  })
})



