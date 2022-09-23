<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import topTitle from './components/topTitle.vue'
import $ from 'jquery'
export default {
  name: 'App',

  data () {
    return {
      menu: false,
      hasMenu: false,
      isRouterAlive: true,
      bannerShow: false,
      detailsTag: false
    }
  },
  watch: {
    '$route' (to, from) {
      let name = to.name
      if (name == 'index') {
        this.bannerShow = true
      } else {
        this.bannerShow = false
        if (name == 'category') {
          // location.reload()
        }
      }


    }
  },
  methods: {

  },
  mounted () {
    //阻止a标签默认事件
    $(function () {
      $('a').bind('click', function () {
        event.preventDefault()

        return false;
      })
    })

  }

}
</script>

<style lang='scss'>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  font-family: "open sans,helvetica neue,Helvetica,Arial,sans-serif";
  // overflow: hidden;

  font: 14px Lao UI;
}
</style>
<style lang='scss'>
@import "./style/global.scss";
@import "./style/globalColor.scss";
@import "./style/theme.scss";
@import "./style/style.css";
</style>
