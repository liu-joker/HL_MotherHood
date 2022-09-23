<template>
  <div class='login'>

    <main class="main-content"
          style="margin-top:50px;"
          id="MainContent">
      <div class="globoRecommendationsTop"></div>
      <div class="page-width page-content">
        <div class="grid">

          <div class="grid__item medium-up--one-third medium-up--push-one-third">

            <header class="section-header">
              <h1 class="section-header__title">Login</h1>
            </header>

            <div class="note note--success hide"
                 id="ResetSuccess">
              We've sent you an email with a link to update your password.
            </div>

            <div id="CustomerLoginForm"
                 class="form-vertical">

              <label for="CustomerEmail">Email</label>
              <input type="email"
                     name="customer[email]"
                     id="CustomerEmail"
                     class="input-full"
                     autocorrect="off"
                     autocapitalize="off"
                     autofocus="">

              <label for="CustomerPassword">Password</label>

              <input type="password"
                     value=""
                     name="customer[password]"
                     id="CustomerPassword"
                     class="input-full">
              <p>
                <button type="submit"
                        class="btn btn--full">
                  Sign In
                </button>
              </p>
              <p><a href="#"
                   @click="toRegister"
                   id="customer_register_link">Create Account</a></p>

            </div>

          </div>
        </div>
      </div>

    </main>

  </div>
</template>

<script>
import loginList from '../../components/loginList'
import LoginList from '../../components/loginList.vue'
import top from '../../components/top'
import minxins from '../../minxins/inputAnimation'
export default {
  mixins: [minxins],
  components: {
    loginList,
    top,

  },
  data () {
    return {
      Email: '',
      password: '',
    }
  },
  created () {

  },
  methods: {
    toRegister () {


      this.$router.push('/register')
    },
    login () {
      let that = this
      let Email = this.Email
      let password = this.password
      var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!myreg.test(Email)) {
        this.$message.error('E-Mail Address does not appear to be valid!');
        return
      }
      if (Email && password) {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.$axios({
          url: '/web/login?name=' + Email + '&webName=' + 'bag' + '&password=' + password,
          method: 'get',
          data: {

          },
          //   headers: {
          //     'Content-type': 'application/x-www-form-urlencoded'
          //   }
        }).then(res => {
          loading.close()
          if (res.code == 200) {
            this.$message.success(res.message)
            let userInfo = {
              name: Email,
            }
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
            sessionStorage.setItem('isLogin', true)
            setTimeout(() => {
              that.$router.push('/account')
            }, 2000);
          } else {
            this.$message.error(res.message)
          }
        })
      } else {
        this.$message.error('Please fill in the required fields！');
        return
      }
    },
    // awaken_focus (v) {
    //   this.getFocus(v)
    // }
    // getBlur () {
    //   console.log('login')
    //   this.blurTag = true
    //   this.focusTag = false
    // },
    // getFocus () {
    //   this.blurTag = false
    //   this.focusTag = true
    // }
  }
}
</script>

<style lang='scss' scoped>
@import "../../style/login_register.css";
@import "../../style/common.css";
.login {
  .login_cont {
    font-size: 13px;
    margin: 50px 0;
    color: #667280;
    margin-left: auto;
    margin-right: auto;

    .login_right,
    .login_left {
      text-align: left;
      background: #fff;
      padding: 19px;
    }
    .left_title {
      font-size: 25px;
      margin-bottom: 20px;
      color: $fontBodyColor;
    }
    .left_reg {
      font-size: 13px;
      // font-weight: bold;
      margin-bottom: 20px;
      color: $fontBodyColor;
    }
    .left_info {
      font-size: 13px;
      margin-bottom: 20px;
    }
    .login_input {
      width: 100%;
      position: relative;
      margin-bottom: 20px;

      .input_placeholder {
        color: $fontBodyColor;
        font-size: 14px;
        font-weight: 500;
        padding: 0 5px;
        margin-bottom: 14px;
        // z-index: -1;
        > span {
          color: red;
        }
      }
    }

    .right_btn {
      background: $backgroundColor;
      font-size: 16px;
      display: inline;
      padding: 15px 30px;
      color: #fff;

      cursor: pointer;
      text-transform: uppercase;
      &:hover {
        background: rgb(9, 9, 9);
      }
    }
    /deep/ .el-input__inner {
      width: 100%;
    }
    .lost_pass {
      font-size: 14px;
      color: #222;
      text-align: right;
      cursor: pointer;
      font-weight: 500;
      text-decoration: underline;
      &:hover {
        color: #c32929;
      }
    }
    .creat_account {
      color: #767676;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      > span {
        color: #222;
        cursor: pointer;
        text-decoration: underline;
        &:hover {
          color: #c32929;
        }
      }
    }
  }
}
</style>