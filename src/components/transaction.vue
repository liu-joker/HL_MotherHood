<template>
  <div class="register">
    <!-- <top></top> -->
    <div class="register_cont">
      <div class="login_title">
        <div class="title_name">Your Transactions</div>
        <div class="title_line"></div>
      </div>
      <div class="row">
        <div class="col-md-9">
          <div class="input_cont">
            <div class="detalis_title">Your current balance is: $0.00.</div>
          </div>
        </div>
        <div class="col-md-3">
          <login-list></login-list>
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


    }
  },
  created () {

    let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
    if (isLogin) {
      this.isLogin = isLogin
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.register {
  .register_cont {
    width: 100%;
    font-size: 13px;
    color: #667280;
    margin: 50px 0;
    .login_title {
      display: flex;
      align-items: center;
      .title_name {
        font-size: 33px;
        margin-right: 15px;
        color: #444;
      }
      .title_line {
        flex: 1;
        height: 10px;
        background: url("http://www.aerpowm.com/catalog/view/theme/vitalia/img/patterns/heading/01.png");
      }
    }
    .login_info {
      color: #666;
      font-size: 12px;
      > span {
        color: #23a1d1;
        cursor: pointer;
        &:hover {
          color: #666;
        }
      }
    }
    .row {
      //  padding:0;
      margin-top: 20px;
      text-align: left;
      .col-md-9 {
        // padding:0;
      }
      .detalis_title {
        font-size: 18px;
        margin: 20px 0 10px 0;
        color: #333;
        position: relative;
        padding: 7px 0;
        &:after {
          content: "";
          height: 1px;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background: #e3e3e3;
        }
      }
    }
  }
}
</style>