<template>
  <div class=top_title>
    <div class="top_title_cont">
      <!-- <div class="top_title_left"></div> -->
      <div class="login_tab"
           @mouseenter="showTab"
           @mouseleave="hideTab">
        <div class="sign">Sign in</div>|
        <div class="sign">Register</div>
        <div class="sign_showTab"
             v-show="tabShow">
          <div class="sign_tab_sign">Sign in</div>
          <div class="sign_tab_register">Register</div>
          <div class="sing_tab">My Orders</div>
          <div class="sing_tab">My Coupons</div>
          <div class="sing_tab">My Messages</div>
        </div>
      </div>
      <div class="top_title_right">
        <!-- <a class='el-icon-search'
           @click='getShowSearch'></a> -->
        <!-- <a @click="toLogin"
           ref='selectTag'
           class="el-icon-user">My Account
        </a> -->

        <a @click="toWish"
           class="el-icon-star-off">
          <div class="count_tab">{{wishProduct_length}}</div>
          <!-- <span>My WishList</span> -->
          <!-- <el-badge :value="wishProduct_length"
                    class="item">
          </el-badge> -->
        </a>
        <a class="el-icon-coin">
        </a>

      </div>
    </div>
    <!-- <el-dialog :close-on-click-modal='false'
               :visible.sync="dialogVisible"
               width="500px"
               v-if='!isLogin'
               custom-class="animate__animated animate__zoomIn">
      <login v-if='isAccount'
             @getAccountStatus='getAccountStatus'></login>
      <register v-else
                @getAccountStatus='getAccountStatus'></register>
    </el-dialog> -->
  </div>

</template>

<script>
import login from '../view/index/login.vue'
import register from '../view/index/register.vue'
export default {
  components: {
    login,
    register
  },
  data () {
    return {
      selectTag: false,
      showCartTag: false,
      wishProduct: '',
      isLogin: false,
      wishProduct_length: 0,
      cartLength: 0,
      dialogVisible: false,
      isAccount: true,
      show_search: false,
      tabShow: false
    }
  },
  created () {
    let wish = JSON.parse(sessionStorage.getItem('wish')) || []
    this.wishProduct = wish
    this.wishProduct_length = wish.length
    let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
    this.isLogin = isLogin
    let productCart = JSON.parse(sessionStorage.getItem('goodsCart')) || []
    this.cartLength = productCart.length
  },
  methods: {
    toAccount () {
      let isLogin = this.isLogin
      if (isLogin) {
        this.$router.push('account')
      } else {
        this.dialogVisible = true
      }
    },
    showTab () {
      this.tabShow = true
    },
    hideTab () {
      this.tabShow = false
    },
    getAccountStatus (e) {
      this.isAccount = e
    },
    toHome () {
      this.$router.push('/home')
    },
    showCart () {
      this.showCartTag = true
      this.$emit('getShowcart', true)
    },
    getShowSearch () {
      this.show_search = !this.show_search
      this.$emit('getShowSearch', true)
    },
    toLogin () {
      let isLogin = this.isLogin
      if (isLogin) {
        this.$router.push('/account')
      } else {
        this.$router.push('/login')
      }
    },
    toWish () {
      let isLogin = this.isLogin
      if (isLogin) {
        this.$router.push('/wish')
      } else {
        this.$router.push('/login')
      }
    },
    toCheckout () {
      this.$router.push('/checkout')
    },
    // otherCloseSelect (e) {
    //   if (!this.$refs.selectTag.contains(e.target)) {
    //     this.selectTag = false
    //   } else {
    //     return
    //   }
    // }
  },
  mounted () {
    window.addEventListener('click', this.otherCloseSelect)
    window.addEventListener("setLogin", (e) => {
      this.isLogin = JSON.parse(e.newValue)
      this.dialogVisible = false
      this.$forceUpdate()
    });
    window.addEventListener("setWish", (e) => {
      this.wishProduct = JSON.parse(e.newValue)
      this.wishProduct_length = this.wishProduct.length
      this.$forceUpdate()
    });
    window.addEventListener("setItemEvent", (e) => {
      let goodsCart = JSON.parse(e.newValue)
      this.cartLength = goodsCart.length
      this.$forceUpdate()
    });

  },
  beforeDestroy () {
    /* 组件销毁的时候要移除侦听器 */
    window.removeEventListener('click', this.otherCloseSelect)
  },
}
</script>

<style lang='scss' scoped>
.top_title {
  // margin-top: 20px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .top_title_cont {
    display: flex;
    justify-content: space-between;
    .login_tab {
      font-size: 16px;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      position: relative;
      .sign {
        padding: 0 10px;
        cursor: pointer;
        &:hover {
          color: #f7a900;
        }
      }
      .sign_showTab {
        position: absolute;
        width: 200px;
        left: 0;
        top: 30px;
        background: #fff;
        padding: 10px;
        z-index: 99999;
        > div {
          padding: 10px 0;
          color: #444;
          cursor: pointer;
          font-size: 14px;
          margin: 5px 0;
        }
        .sign_tab_sign {
          background: #f7a900;
          color: #fff;
          &:hover {
            background: #f78600;
          }
        }
        .sign_tab_register {
          border: 1px solid #000;
          &:hover {
            background: #f7a900;
            border: 1px solid #f7a900;
            color: #fff;
          }
        }
        .sing_tab {
          &:hover {
            color: #f7a900;
          }
        }
      }
    }
    .top_title_right {
      .el-icon-star-off,
      .el-icon-coin {
        font-size: 28px;
      }

      > a {
        padding: 0 7px;
        position: relative;
        color: #aaa;
        font-weight: 500;
        // margin-left: 10px;

        cursor: pointer;

        &:hover {
          color: #aaa !important;
          // background: $backgroundColor !important;
        }
        /deep/ .el-badge__content {
          background: #b9a16b;
          position: absolute;
          right: -12px;
          bottom: -10px;
        }
        > i {
          width: 10px;
          height: 10px;
          margin-right: 5px;
        }
        .count_tab {
          font-size: 14px;
          display: inline;
          margin-left: 5px;
          margin-top: 5px;
        }
        .down {
          position: absolute;
          top: 8px;
          right: -12px;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #888;
        }
        .select_ico {
          position: absolute;
          top: 20px;
          background: #fff;
          border: 1px solid #888;
          border-radius: 5px;
          padding: 10px;
          z-index: 999;
          width: 150px;
          font-size: 14px;
          text-align: left;
          right: 0;
          > a {
            display: block;
          }
        }
      }
    }
  }
}
</style>