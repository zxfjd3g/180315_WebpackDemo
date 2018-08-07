<template>
  <div>
    <ul>
      <li v-for="(lesson, index) in lessons" :key="index">
        课程名: <span class="lesson-name">{{lesson.name}}</span>, 时间: {{lesson.days}}天
      </li>
    </ul>
    <hr>
    <button @click="go">去尚硅谷</button>
  </div>
</template>

<script>
  import lessons from './assets/json/lessons.json'
  export default {
    data () {
      return {
        lessons
      }
    },
    methods: {
      go () {
        import('./js/atguigu').then(atguigu => {
          if(atguigu.studyConfirm()) {
            atguigu.goAtguigu()
          }
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $color = red

  .lesson-name
    color $color
    font-size 25px
</style>