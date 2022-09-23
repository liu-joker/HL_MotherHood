<template>
  <div class="register">
    <!-- <top></top> -->
    <div class="register_cont">
      <div class="login_title">
        <div class="title_name">DASHBOARD</div>

      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="input_cont">
            <!-- <div class="detalis_title">MY ORDERS</div>
             -->
            <div class="account_tab "><a class="current_tab"
                 @click="toMyAccount(1)">DASHBOARD</a> </div>
            <!-- <div class="account_tab"><a @click="toMyAccount(2)">Change your password</a> </div> -->
            <!-- <div style=' cursor: pointer;padding:5px 0;'><a @click="toMyAccount(3)">Modify your address book entries</a></div> -->
            <div class="account_tab"><a @click="toMyAccount(4)">WISH LIST</a></div>
            <div class="account_tab"><a @click="toMyAccount(5)">ORDERS</a> </div>
            <div class="account_tab"><a @click="toMyAccount(6)">DOWNLOADS</a> </div>
            <!-- <div class="account_tab"><a @click="toMyAccount(7)">Your Transactions</a></div> -->
            <div class="account_tab"><a @click="toMyAccount(8)">PAYMENT METHOD</a></div>
            <!-- <div class="account_tab"><a @click="toMyAccount(9)">View your return requests</a></div> -->
            <div class="account_tab"><a @click="toMyAccount(10)">LOGOUT</a></div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="account_content">
            <div class="content_msg">
              <strong>{{firstName}}</strong>'s, Hello ( <strong>{{firstName}}</strong> If this is not the Mr. <span @click='logOut'>log out</span> , please)
            </div>
            <div class="content_msg">
              In the account dashboard, your recent order confirmation, management of billing address and shipping address , edit passwords and account details can be done, such as.
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LoginList from './loginList.vue'
import top from './top'

export default {
  components: {
    top,
    LoginList,
  },
  data () {
    return {
      checked: false,
      radio: '2',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      fax: '',
      company: '',
      companyId: '',
      address1: '',
      address2: '',
      city: '',
      code: '',
      country: '',
      state: '',
      password: '',
      confirm: '',
      path: 1,
      optionCountry: [],
      optionRegion: [],
      countryCodes: '',
      realPassword: '',
      isLogin: false,
      firstName: '',

    }
  },
  created () {
    this.isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
    if (!this.isLogin) {
      this.$router.push('index')
    }
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    let firstName = userInfo.name.split('@')[0]
    this.firstName = firstName

  },
  methods: {
    toMyAccount (v) {
      if (this.isLogin) {
        //  this.$router.push('/wish')
        if (v == 1) {
        }
        else if (v == 2) { this.$router.push('/password'); return }
        else if (v == 3) { }
        else if (v == 4) { this.$router.push('/wish'); return }
        else if (v == 5) { this.$router.push('/order'); return }
        else if (v == 6) { this.$router.push('/download'); return }
        else if (v == 7) { this.$router.push('/transaction'); return }
        else if (v == 8) { this.$router.push('/recurring'); return }
        else if (v == 9) { this.$router.push('/return'); return }
        else if (v == 10) { sessionStorage.setItem('isLogin', false); this.$router.push('/index'); return }
      } else {
        this.toLogin()
      }
    },

    toLogin () {
      this.$router.push('/login')
    },
    logOut () {
      sessionStorage.setItem('isLogin', false); this.$router.push('/index');
    }

  }
}
</script>

<style lang='scss' scoped>
.register {
  padding: 0 50px;
  .register_cont {
    width: 100%;
    font-size: 13px;
    color: #222;
    margin: 50px 0;
    .login_title {
      display: flex;
      align-items: center;
      .title_name {
        margin-left: 15px;
        font-size: 35px;
        margin-right: 15px;
        margin-bottom: 40px;
        color: #222;
        font-weight: bold;
      }
    }
    .input_cont {
      text-align: left;
      .account_tab {
        color: #767676;
        margin-bottom: 20px;
        height: 27px;
        padding-bottom: 3px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        > a {
          position: relative;
          padding-bottom: 5px;
          &:hover {
            color: #c32929 !important;
            &::after {
              transform: scale(1);
            }
          }
          &:after {
            content: "";
            width: 80%;
            height: 2px; /*设置伪元素的高度，这里是下划线的粗细*/
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #c32929; /*当前标签继承的文字颜色，这里让伪元素的背景色与父元素的文字颜色相同*/
            transform: scale(0);
            transition: all 0.35s;
            transform-origin: left;
          }
        }
      }
      .current_tab {
        position: relative;
        color: #c32929 !important;
        &::before {
          content: "";
          width: 80%;
          height: 2px; /*设置伪元素的高度，这里是下划线的粗细*/
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #c32929; /*当前标签继承的文字颜色，这里让伪元素的背景色与父元素的文字颜色相同*/
          // transform: scale(0);
          // transition: all 0.35s;
          // transform-origin: left;
        }
      }
    }
    .account_content {
      text-align: left;
      color: #767676;
      font-size: 14px;
      .content_msg {
        margin-bottom: 30px;
        > span {
          cursor: pointer;
          color: #222;
          &:hover {
            color: #c32929;
          }
        }
      }
    }
  }
}
</style>