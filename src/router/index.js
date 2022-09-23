import Vue from 'vue'
import Router from 'vue-router'
import appMain from '../view/index/appMian.vue'

//开启debug模式
Vue.config.debug = true;

Vue.use(Router);
const router = new Router({
  routes: [{
      path: '*',
      redirect: '/appMain',
    },

    {
      path: '/',
      name: 'appmain',
      title: '首页',
      component: appMain,
      // redirect: () => import('@/view/index/index.vue'),
      children: [{
          path: '/',
          name: 'index',

          component: () => import('@/view/index/index.vue'),
        },
        {
          path: '/index',
          name: 'index',

          component: () => import('@/view/index/index.vue'),
        },
        {
          path: '/details',
          name: 'details',
          title: '详情',
          component: () => import('../components/details.vue')
        },

        {
          path: '/category',
          name: 'category',
          title: '種類',
          component: () => import('../view/index/category.vue')
        },
        {
          path: '/information',
          name: 'information',
          title: '信息',
          component: () => import('../components/information.vue')
        },
        {
          path: '/compare',
          name: 'compare',
          title: '对比',
          component: () => import('../components/compare.vue')
        },
        {
          path: '/wish',
          name: 'wish',
          title: '愿望',
          component: () => import('../components/wish.vue')
        },
        {
          path: '/account',
          name: 'account',
          title: '账户',
          component: () => import('../components/account.vue')
        },
        {
          path: '/order',
          name: 'order',
          title: '订单',
          component: () => import('../components/order.vue')
        },
        {
          path: '/download',
          name: 'download',
          title: '下载',
          component: () => import('../components/download.vue')
        },
        {
          path: '/password',
          name: 'password',
          title: '下载',
          component: () => import('../components/password.vue')
        },
        {
          path: '/recurring',
          name: 'recurring',
          title: '定期付款',
          component: () => import('../components/recurring.vue')
        },
        {
          path: '/return',
          name: 'return',
          title: '下载',
          component: () => import('../components/return.vue')
        },
        {
          path: '/flash',
          name: 'flash',
          title: '抢购',
          component: () => import('../components/flash.vue')
        },
        {
          path: '/daily',
          name: 'daily',
          title: '折扣',
          component: () => import('../components/daily.vue')
        },
        {
          path: '/points',
          name: 'points',
          title: '积分',
          component: () => import('../components/points.vue')
        },
        {
          path: '/login',
          name: 'login',
          title: '登陆',
          component: () => import('../view/index/login.vue')
        },
        {
          path: '/register',
          name: 'register',
          title: '注册',
          component: () => import('../view/index/register.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          title: '購物車',
          component: () => import('../view/index/cart.vue')
        },


      ]

    },

    {
      path: '/checkout',
      name: 'checkout',
      title: '結賬',
      component: () => import('../view/index/checkout.vue')
    },


  ]
})
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})


export default router
