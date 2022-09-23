<template>
  <div class="register">
    <!-- <top></top> -->
    <div class="register_cont">
      <div class="login_title">
        <div class="title_name">Change Password</div>
        <div class="title_line"></div>
      </div>
      <div class="row">
        <div class="col-md-9">
          <div class="input_cont">
            <div class="detalis_title">YOUR PASSWORD</div>
            <div class="input_box">
              <div class="input_name"
                   style='width:150px;'><i style="color:red;">*</i> Password:</div>
              <div class="input_label">
                <el-input v-model='password'
                          type="password"></el-input>
              </div>
            </div>
            <div class="input_box">
              <div class="input_name"
                   style='width:150px;'><i style="color:red;">*</i> Password Confirm:</div>
              <div class="input_label">
                <el-input v-model='confirm'
                          type="password"></el-input>
              </div>
            </div>
          </div>
          <div class="bottom_cont">
            <div class="bottom_btn"
                 @click='back'>Back</div>
            <div class="bottom_btn">CONTINUE</div>
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
      password: '',
      confirm: ''

    }
  },
  created () {

    let isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
    if (isLogin) {
      this.isLogin = isLogin
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
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
    .bottom_cont {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      .bottom_btn {
        background: #229ac8;
        padding: 7.5px 12px;
        font-size: 12px;

        color: #fff;
        border-radius: 4px;

        margin: 0 20px;
        cursor: pointer;
        border: 1px solid #ccc;
        box-shadow: inset 0 0px 0 rgba(255, 255, 255, 20%),
          0 1px 3px rgba(0, 0, 0, 5%);
        border-color: #1f90bb #1f90bb #145e7a #145e7a;
        &:hover {
          background: #428bca;
        }
      }
    }
  }
}
</style>