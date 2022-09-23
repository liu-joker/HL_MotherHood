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
              <h1 class="section-header__title">Create Account</h1>
            </header>

            <div class="form-vertical">

              <label for="FirstName">First Name</label>
              <input type="text"
                     name="customer[first_name]"
                     id="FirstName"
                     class="input-full"
                     autocapitalize="words"
                     autofocus="">

              <label for="LastName">Last Name</label>
              <input type="text"
                     name="customer[last_name]"
                     id="LastName"
                     class="input-full"
                     autocapitalize="words">

              <label for="Email">Email</label>
              <input type="email"
                     name="customer[email]"
                     id="Email"
                     class="input-full"
                     autocorrect="off"
                     autocapitalize="off">

              <label for="CreatePassword">Password</label>
              <input type="password"
                     name="customer[password]"
                     id="CreatePassword"
                     class="input-full">

              <p>
                <input type="submit"
                       value="Create"
                       class="btn btn--full">
              </p>

            </div>

          </div>

        </div>
      </div>

    </main>
    <!-- <div class="login_cont">
      <div class="login_right">
        <div class="left_title">PERSONAL INFORMATION</div>
        <div class="input_box ">
          <div class=" login_input"
               style='margin-right:30px;'>
            <div class="input_placeholder">first name<span>*</span> </div>
            <el-input v-model='name1'></el-input>
          </div>
          <div class=" login_input"
               style='margin-left:30px;'>
            <div class="input_placeholder">last name<span>*</span> </div>
            <el-input v-model='name2'></el-input>
          </div>
        </div>
        <div class="login_input">
          <div class="input_placeholder">Email address<span>*</span> </div>
          <el-input v-model='Email'></el-input>
        </div>
        <div class="left_title">LOGIN INFORMATION</div>
        <div class="input_box ">
          <div class=" login_input"
               style='margin-right:30px;'>
            <div class="input_placeholder">password<span>*</span> </div>
            <el-input v-model='password1'
                      type='password'></el-input>
          </div>
          <div class=" login_input"
               style='margin-left:30px;'>
            <div class="input_placeholder">confirm password<span>*</span> </div>
            <el-input v-model='password2'
                      type='password'></el-input>
          </div>
        </div>
        <br>
        <div class="right_btn"
             @click=login>submit</div>

      </div>
    </div> -->
  </div>
</template>

<script>
import loginList from '../../components/loginList'
import $ from 'jquery'
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
      name1: '',
      name2: '',
      Email: '',
      password1: '',
      password2: '',
    }
  },
  created () {

  },
  methods: {
    toLogin () {
      // let currentName = this.$route.name
      // if (currentName == 'register') {
      //   this.$router.push('/login')
      // } else {
      //   this.$emit('getAccountStatus', true)
      // }
      this.$router.push('/login')
    },
    login () {
      let that = this
      let Email = this.Email
      let password = this.password1
      let name1 = this.name1
      let name2 = this.name2
      let password2 = this.password2
      var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!myreg.test(Email)) {
        this.$message.error('E-Mail Address does not appear to be valid!');
        return
      }

      if (Email && password && name1 && name2 && password2) {
        if (password2 !== password) {
          this.$message.error('Different passwords twice！');
          return
        }
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.$axios({
          url: '/web/register?name=' + Email + '&webName=' + 'bag' + '&password=' + password,
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
            sessionStorage.setItem('isLogin', true)
            let userInfo = {
              name: Email,
            }
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
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

  },
  mounted () {
    //注册表单验证
    $('#register_form .submit-btn').click(function () {
      var tag = true;
      var username = $('#register_form #userName').val();
      var email = $('#register_form #email').val();
      var pwd = $('#register_form #password').val();
      var repwd = $('#register_form #rePassword').val();
      var code = $('#register_form #code').val();
      if (checkNull(username) != true) {
        $('#register_form #userName').addClass('err');
        $('#register_form #userName').parent().parent().find(".validate-error").text(message_en.userName_required).fadeIn();
        return;
      } else if (!checkval(username)) {
        $('#register_form #userName').addClass('err');
        $('#register_form #userName').parent().parent().find(".validate-error").text(message_en.userName_required).fadeIn();
        return;
      }
      else {
        $('#register_form #userName').removeClass('err');
        $('#register_form #userName').parent().parent().find('.validate-error').empty().fadeOut();
        tag = true;
      }
      if (checkNull(email) != true) {
        $('#register_form #email').addClass('err');
        $('#register_form #email').parent().parent().find(".validate-error").text(message_en.email_required).fadeIn();
        return;
      } else if (checkEmail(email) != true) {
        $('#r_form #email').addClass('err');
        $('#r_form #email').parent().parent().find(".validate-error").text(message_en.email_required).fadeIn();
        return;
      } else {
        $('#register_form #email').removeClass('err');
        $('#register_form #email').parent().parent().find('.validate-error').empty().fadeOut();
        tag = true;
      }
      if (checkNull(pwd) != true) {
        $('#register_form #password').addClass('err');
        $('#register_form #password').parent().parent().find(".validate-error").text(message_en.password_required).fadeIn();
        return;
      } else if (checkPwdLen(pwd) == "6") {
        $('#register_form #password').addClass('err');
        $('#register_form #password').parent().parent().find(".validate-error").text(message_en.enter_at_least_6).fadeIn();
        return;
      } else if (checkPwdLen(pwd) == "15") {
        $('#register_form #password').addClass('err');
        $('#register_form #password').parent().parent().find(".validate-error").text(message_en.enter_maximum_of_15).fadeIn();
        return;
      } else {
        $('#register_form #password').removeClass('err');
        $('#register_form #password').parent().parent().find('.validate-error').empty().fadeOut();
        tag = true;
      }

      if (checkNull(repwd) != true) {
        $('#register_form #rePassword').addClass('err');
        $('#register_form #rePassword').parent().parent().find(".validate-error").text(message_en.re_passsword_required).fadeIn();
        return;
      } else if (pwd != repwd) {
        $('#register_form #rePassword').addClass('err');
        $('#register_form #rePassword').parent().parent().find(".validate-error").text(message_en.password_not_same).fadeIn();
        return;
      } else {
        $('#register_form #rePassword').removeClass('err');
        $('#register_form #rePassword').parent().parent().find('.validate-error').empty().fadeOut();
        tag = true;
      }
      if (checkNull(code) != true) {
        $('#register_form #code').addClass('err');
        $('#register_form #code').parent().parent().find(".validate-error").text(message_en.verification_code_required).fadeIn();
        tag = false;
      } else {
        $('#register_form #code').removeClass('err');
        $('#register_form #code').parent().parent().find('.validate-error').empty().fadeOut();
        tag = true;
      }
      if ($("#checkAgree").hasClass("cur")) {
        $('.checkbox-icon').removeClass('err');
        $('.checkbox-icon').parent().parent().find('.validate-error').empty().fadeOut();
        tag = true;
      } else {
        $('.checkbox-icon').addClass('err');
        $('.checkbox-icon').parent().parent().find(".validate-error").text(message_en.agree_required).fadeIn();
        return;
      }
      if (tag) {
        if (vailMember($("#userName").val(), $("#email").val())) {
          if (validate_rotecaptcha()) {
            $("#token").val(new Date().getTime());
            $("#register_form").submit();
          } else {
            $('#codeError').text(message_en.verification_code_required).fadeIn();
            return;
          }
        }
      }

    });
  },
}
</script>

<style lang='scss' scoped>
@import "../../style/common.css";
@import "../../style/login_register.css";
.login {
  .login_cont {
    width: 100%;
    font-size: 13px;
    margin: 50px 0;
    color: #667280;
    margin-left: auto;
    margin-right: auto;

    .login_right {
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
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #222;
    }
    .left_info {
      font-size: 13px;
      margin-bottom: 20px;
    }
    .input_box {
      display: flex;
      justify-content: space-between;
    }
    .login_input {
      width: 100%;
      position: relative;
      margin-bottom: 20px;

      .input_placeholder {
        text-transform: uppercase;
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