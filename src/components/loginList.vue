<template>
  <div class="login_list">
    <!-- <div class="list_title">Account</div> -->
    <div class="list_tab"
         v-if='!isLogin'><a @click="toLogin">Login</a> </div>
    <div class="list_tab"
         v-if='!isLogin'><a @click='toRegister'>Register</a></div>
    <div class="list_tab"><a @click="toLogin(1)">Password</a></div>
    <div class="list_tab"><a @click="toLogin(2)">My Account</a></div>
    <!-- <div class="list_tab"><a @click="toLogin(3)">Address Books</a></div> -->
    <div class="list_tab"><a @click="toLogin(4)">Wish List</a></div>
    <div class="list_tab"><a @click="toLogin(5)">Order History</a></div>
    <div class="list_tab"><a @click="toLogin(6)">Downloads</a></div>
    <div class="list_tab"><a @click="toLogin(7)">Returns</a></div>
    <div class="list_tab"><a @click="toLogin(8)">Transactions</a></div>
    <!-- <div class="list_tab"><a @click="toLogin(9)">Newsletter</a></div> -->
    <div class="list_tab"><a @click="toLogin(10)">Recurring payments</a></div>
    <div class="list_tab"
         v-if='isLogin'><a @click="outLogin">Logout</a></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: false
    }
  },
  created () {
    let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
    this.isLogin = isLogin
  },
  methods: {
    toLogin (v) {
      let currentRoute = this.$route.path
      let isLogin = this.isLogin
      if (isLogin) {
        if (v == 1) { this.$router.push('/password'); return }
        else if (v == 2) { this.$router.push('/account'); return }
        else if (v == 3) { }
        else if (v == 4) { this.$router.push('/wish'); return }
        else if (v == 5) { this.$router.push('/order'); return }
        else if (v == 6) { this.$router.push('/download'); return }
        else if (v == 7) { this.$router.push('/return'); return }
        else if (v == 8) { this.$router.push('/transaction'); return }
        else if (v == 9) { }
        else if (v == 10) { this.$router.push('/recurring'); return }
      } else {
        if (currentRoute == '/login') {
          this.$router.replace('/login')
          location.reload()
        } else {
          this.$router.push('/login')
        }
      }

    },
    outLogin () {
      sessionStorage.setItem('isLogin', false)
      this.$router.push('/index')
    },
    toRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang='scss' scoped>
.login_list {
  text-align: left;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  .list_title {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .list_tab {
    position: relative;
    // padding-left:13px;
    font-size: 13px;
    color: #888;
    cursor: pointer;
    line-height: 1.6;
    padding: 8px 12px;

    &:after {
      content: "";
      height: 1px;
      background: #e3e3e3;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &:last-child {
      &:after {
        content: "";
        height: 0px;
      }
    }
    &:hover {
      background: #f5f5f5;
    }
    // &::before{
    //     content: "";
    //     width: 5px;
    //     height: 5px;
    //     border:1px  solid #4ecdc4;
    //     border-width: 1px 0 0 1px;
    //     transform: translate(-50%, -50%) rotate(135deg);
    //     position: absolute;
    //     left: 3px;
    //     top: 50%;
    // }
  }
}
</style>