import Vue from 'vue'
import App from './App'
import router from './router/index'
import "animate.css"
import 'element-ui/lib/theme-chalk/display.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/index'

// import 'bootstrap/dist/js/bootstrap.min'
import './utils/rootRem'
Vue.config.productionTip = false
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
import VueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueSwiper)
import api from './utils/request'
Vue.prototype.$axios = api

import jquery from 'jquery'
Vue.prototype.$ = jquery;
import ElementResizeDetectorMaker from "element-resize-detector"
Vue.prototype.$erd = ElementResizeDetectorMaker()
var orignalSetItem = sessionStorage.setItem;
sessionStorage.setItem = function (key, newValue) {
  // 要监听的key为styleList
  if (key === "goodsCart") {
    let setItemEvent = new Event("setItemEvent");
    setItemEvent.newValue = newValue;
    window.dispatchEvent(setItemEvent);
    orignalSetItem.apply(this, arguments);
  }
  if (key === 'showDialog') {
    let setItemEvent = new Event("setDialogEvent");
    setItemEvent.newValue = newValue;
    window.dispatchEvent(setItemEvent);
    orignalSetItem.apply(this, arguments);
  }
  if (key === 'compare') {
    let setItemEvent = new Event("setCompare");
    setItemEvent.newValue = newValue;
    window.dispatchEvent(setItemEvent);
    orignalSetItem.apply(this, arguments);
  }
  if (key === 'wish') {
    let setItemEvent = new Event("setWish");
    setItemEvent.newValue = newValue;
    window.dispatchEvent(setItemEvent);
    orignalSetItem.apply(this, arguments);
  }
  if (key === "isLogin") {
    var setItemEvent = new Event("setLogin");
    setItemEvent.newValue = newValue;
    window.dispatchEvent(setItemEvent);
    orignalSetItem.apply(this, arguments);
  }
  if (key === "seenProducts") {
    var setItemEvent = new Event("setSeen");
    setItemEvent.newValue = newValue;
    window.dispatchEvent(setItemEvent);
    orignalSetItem.apply(this, arguments);
  }
  if (key === "userInfo") {
    var setItemEvent = new Event("setUser");
    setItemEvent.newValue = newValue;
    window.dispatchEvent(setItemEvent);
    orignalSetItem.apply(this, arguments);
  }
}
new Vue({

  router,
  store,

  render: h => h(App),

}).$mount('#app')
