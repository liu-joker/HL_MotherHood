<template>
  <div class="footer">
    <div class="footer_cont container row">
      <div class="footer_box col-xs-12 col-md-3 content_cont">
        <div class="box_title">Information</div>
        <div class="box_msg"
             @click="toInformation(1)"> <span> About Us</span></div>
        <div class="box_msg"
             @click="toInformation(2)"><span>Delivery Information</span></div>
        <div class="box_msg"
             @click="toInformation(3)"><span>Privacy Policy</span></div>
        <div class="box_msg"
             @click="toInformation(4)"><span>Returns and Exchanges</span></div>
        <div class="box_msg"
             @click="toInformation(5)"><span>Terms of use</span></div>
        <div class="box_msg"
             @click="toInformation(6)"><span>Wholesale Policy</span></div>
      </div>
      <div class="footer_box col-xs-12 col-md-3">
        <div class="box_title">Customer Service</div>
        <div class="box_msg"
             @click="toInformation(7)"><span>Contact Us</span>
        </div>
        <div class="box_msg"
             @click="toInformation(8)"><span>Returns</span></div>
      </div>
      <!-- <div class="footer_box col-xs-12 col-md-3">
            <div class="box_title">Extras</div>
            <div class="box_msg" @click="toInformation(9)">Gift Vouchers</div>
            <div class="box_msg" @click="toLogin">Affiliates</div>
        </div> -->
      <div class="footer_box col-xs-12 col-md-3">
        <div class="box_title">My Account</div>
        <div class="box_msg"
             @click="toLogin(1)"> <span>Order History</span> </div>
        <div class="box_msg"
             @click="toLogin(2)"><span>Wish List</span></div>
        <!-- <div class="box_msg"
             @click="toLogin">Newsletter</div> -->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  inject: ['reload'],
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
    toInformation (v) {
      let currentRoute = this.$route.path

      this.$router.push('/information?type=' + v)
      this.reload()
    },
    toLogin (v) {
      let currentRoute = this.$route.path
      if (this.isLogin) {
        if (v == 1) { this.$router.push('/order'); return }
        else if (v == 2) {
          { this.$router.push('/wish'); return }
        }
      } else {
        this.$router.push('/login')
        this.reload()

      }
    },
    mounted () {
      window.addEventListener("setLogin", (e) => {
        this.isLogin = JSON.parse(e.newValue)
        this.$forceUpdate()
      });
    }
  }
}
</script>

<style lang='scss' scoped>
.footer {
  width: 100%;
  font-size: 14px;
  line-height: 1.6;
  color: #fff;
  // background: #fafafa;
  background: #788693;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: BentonSans-Bold, BentonSans;
  font-weight: 500;
  .footer_cont {
    text-align: left;
    // background: #fff;
  }

  .footer_box {
    // margin-right:60px;
    margin-top: 20px;
    .box_title {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .box_msg {
      margin-bottom: 2px;
      > span {
        position: relative;
        padding: 5px 0;
        text-decoration: none;
        cursor: pointer;
        font-size: 12px;
        &:after {
          content: "";
          width: 80%;
          height: 2px; /*设置伪元素的高度，这里是下划线的粗细*/
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #222; /*当前标签继承的文字颜色，这里让伪元素的背景色与父元素的文字颜色相同*/
          transform: scale(0);
          transition: all 0.35s;
          transform-origin: left;
        }
        &:hover {
          &::after {
            transform: scale(1);
          }
        }
      }
    }
    .box_email {
      display: flex;
      align-items: center;
      margin-top: 20px;
      &:hover {
        color: #fff;
      }
      .email_img {
        width: 35px;
        height: 35px;
        border: 2px solid #fff;
        border-radius: 50%;
        padding: 9px;
        margin-right: 10px;
        color: #fff;
      }
    }
  }
  .bot_ico {
    padding: 20px 0;
    width: 100%;
    text-align: center;
    // justify-content: space-between;

    > img {
      width: auto;
      height: 50px;
    }
  }
  .foot_bottom {
    font-size: 13px;
    background: #111;
    color: #ccc;
    padding: 20px 0;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: center;
  }
}
</style>