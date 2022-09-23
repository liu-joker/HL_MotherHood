<template>
  <div class="main">

    <t-header></t-header>
    <div class="content">
      <div class="content_cont">
        <router-view v-if='isRouterAlive'></router-view>
        <!-- <el-backtop :bottom='0'
                    :right='0'>
          <div>up</div>
        </el-backtop> -->
      </div>
    </div>
    <bot-footer></bot-footer>
    <size-chart></size-chart>
  </div>
</template>

<script>
import tTop from "../../components/lTop.vue"
import botFooter from '../../components/footer.vue'
import banner from '../../components/banner.vue'
import top from '../../components/top.vue'
import tHeader from '../../components/header.vue'
import sizeChart from '../../components/sizeChart.vue'
export default {
  name: 'appmain',
  components: {
    // index,
    tTop,
    botFooter,
    top,
    banner,
    tHeader,
    sizeChart
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      let that = this
      this.$nextTick(function () {
        that.isRouterAlive = true
      })
    }
  }
}
</script>

<style >
.main {
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
  font-family: BentonSans-Bold, BentonSans;
  overflow: hidden;
  font: 14px Lao UI;
  margin: 0 auto;
}
</style>