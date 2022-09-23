<template>
  <div>
    <div id="d-main"
         style="margin-top:20px;">
      <div class="d-container">
        <div class="p-banner center">
          <h3>CHECK-IN TO GET D POINTS</h3>
          <ul class="days clr">
            <li id="li1">
              <div class="yellow-bg">
                <p>+1</p>
              </div>
              <div class="day-text">1st Day</div>
            </li>
            <li id="li2">
              <div class="yellow-bg">
                <p>+2</p>
              </div>
              <div class="day-text">2nd Day</div>
            </li>
            <li id="li3">
              <div class="yellow-bg">
                <p>+3</p>
              </div>
              <div class="day-text">3rd Day</div>
            </li>
            <li id="li4">
              <div class="yellow-bg">
                <p>+4</p>
              </div>
              <div class="day-text">4th Day</div>
            </li>
            <li id="li5">
              <div class="yellow-bg">
                <p>+5</p>
              </div>
              <div class="day-text">5th Day</div>
            </li>
            <li id="li6">
              <div class="yellow-bg">
                <p>+6</p>
              </div>
              <div class="day-text">6th Day</div>
            </li>
            <li id="li7">
              <div class="yellow-bg">
                <p>+7</p>
              </div>
              <div class="day-text">7th Day</div>
            </li>

          </ul>
          <hr>
        </div>

        <div id="point-center"
             class="check-now center">
          <div class="a-check-now"><a href="javascript:void(0)"
               onclick="signIn()">SIGN IN</a></div>

          <div class="link-rules mt-10"><a href="javascript:void(0)"
               onclick="$('.point-rules').show();">Rules</a></div>
        </div>

        <div class="point-coupon">
          <h3>Points to Redeem Coupons</h3>
          <div class="coupon-list clr">
            <div class="c-item"
                 onclick="pointsCoupon('11203BO5F37CYSSJ4O');"
                 style=" cursor: pointer;">
              <div class="off">5.00% OFF </div>
              <div class="text">500 Points to Redeem</div>
            </div>
            <div class="c-item"
                 onclick="pointsCoupon('1121WXX9CQ4JM8P1PX');"
                 style=" cursor: pointer;">
              <div class="off">8.00% OFF </div>
              <div class="text">800 Points to Redeem</div>
            </div>
            <div class="c-item"
                 onclick="pointsCoupon('11229ADVCETKHIIJZD');"
                 style=" cursor: pointer;">
              <div class="off">US $ 8.00 OFF </div>
              <div class="text">1000 Points to Redeem</div>
            </div>
            <div class="c-item"
                 onclick="pointsCoupon('112333E5ECAXSCWW0C');"
                 style=" cursor: pointer;">
              <div class="off">US $ 10.00 OFF </div>
              <div class="text">1200 Points to Redeem</div>
            </div>
            <div class="c-item"
                 onclick="pointsCoupon('11242Y8KXZTML4Q4BT');"
                 style=" cursor: pointer;">
              <div class="off">10.00% OFF </div>
              <div class="text">1500 Points to Redeem</div>
            </div>
            <div class="c-item"
                 onclick="pointsCoupon('1125MC1Y5MU5T6Z257');"
                 style=" cursor: pointer;">
              <div class="off">15.00% OFF </div>
              <div class="text">2000 Points to Redeem</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.p-banner {
  background: url(../assets/image/point-redeem-banner.png) no-repeat;
  padding: 80px 0;
  position: relative;
}
.p-banner h3 {
  font-size: 48px;
  color: #fff;
  margin-bottom: 50px;
}
.p-banner .days {
  display: inline-block;
  position: relative;
  z-index: 3;
}
.p-banner .days li {
  width: 100px;
  float: left;
  margin-right: 70px;
}
.p-banner .days li .yellow-bg {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: #fff;
  color: #333;
  padding-top: 20px;
  margin-bottom: 10px;
}

.p-banner .days li .yellow-bg:before {
  content: "";
  display: inline-block;
  width: 35px;
  height: 35px;
  background: url(../assets/image/point-redeem-banner-icon.png) no-repeat;
}
.p-banner .days li .yellow-bg p {
  font-size: 20px;
}
.p-banner .days li .day-text {
  font-size: 16px;
  color: #fff;
}
.p-banner .days li:last-child {
  margin-right: 0;
}
.p-banner .days li.act .yellow-bg {
  background: #f7a900;
}
.p-banner .days li.act .yellow-bg p {
  color: #fff;
}
.p-banner .days li.act .yellow-bg:before {
  background-position: -35px 0;
}
.p-banner hr {
  width: 1000px;
  border: 1px dashed #6b6b6b;
  z-index: 2;
  position: absolute;
  left: 50%;
  bottom: 150px;
  margin-left: -500px;
}

.check-now {
  background: #f8f8f8;
  padding: 60px 0;
}
.check-now .total {
  width: 850px;
  margin: 0 auto;
}
.check-now .total .to,
.check-now .total .check-in {
  width: 393px;
  float: left;
  background: #fff;
  border: 1px solid #e5e5e5;
  padding: 39px 0;
}
.check-now .total .check-in {
  float: right;
}
.check-now .total .to .left {
  border-right: 1px solid #e5e5e5;
  text-align: left;
  padding-left: 58px;
}
.check-now .total .to .left,
.check-now .total .to .right {
  float: left;
  width: 50%;
  font-size: 30px;
  line-height: 1.2;
}
.check-now .total .to .right {
  padding-top: 10px;
}
.check-now .total .to .right b {
  font-weight: bold;
  color: #f7a900;
  font-size: 30px;
}
.check-now .total .check-in .left,
.check-now .total .check-in .right {
  float: left;
  font-size: 30px;
  line-height: 1.2;
}
.check-now .total .check-in .left {
  width: 70%;
  border-right: 1px solid #e5e5e5;
}
.check-now .total .check-in .right {
  width: 30%;
  font-size: 18px;
}
.check-now .total .check-in .right span {
  font-size: 36px;
  color: #f7a900;
  font-weight: bold;
  line-height: 1.2;
}

.a-check-now {
  margin-top: 60px;
}
.a-check-now a {
  display: block;
  width: 220px;
  height: 50px;
  text-align: center;
  border: 1px solid #333;
  color: #333;
  line-height: 50px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
}
.link-rules {
  font-size: 16px;
  text-decoration: underline;
}

.point-coupon {
  padding: 60px 0 30px 0;
}
.point-coupon h3 {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
}
.point-coupon .coupon-list .c-item {
  width: 580px;
  float: left;
  height: 240px;
  border: 10px solid #f1f1f1;
  border-radius: 26px;
  margin-top: 60px;
  background: #666666;
}
.point-coupon .coupon-list .c-item:nth-child(odd) {
  margin-right: 40px;
}
.point-coupon .coupon-list .c-item .off {
  width: 41%;
  float: left;
  background: url(../assets/image/point-coupon-bg.png) no-repeat;
  height: 220px;
  border-radius: 15px 0 0 15px;
  font-size: 27px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 220px;
}
.point-coupon .coupon-list .c-item .text {
  width: 59%;
  float: left;
  height: 220px;
  color: #fff;
  text-align: center;
  font-size: 26px;
  line-height: 220px;
  border-radius: 0 15px 15px 0;
}

.point-rules h3 {
  font-size: 24px;
  font-weight: normal;
}
.point-rules p {
  font-size: 16px;
  margin-top: 10px;
}

.point-already-sign h3 {
  font-size: 36px;
  font-weight: bold;
}
.point-already-sign p {
  font-size: 24px;
  margin: 10px 0 5px 0;
  color: #333;
}

.point-success h3,
.point-error h3 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
  line-height: 1;
}
.point-success p,
.point-error p {
  font-size: 24px;
  margin: 10px 0 25px 0;
  color: #333;
}
.point-success .close-a a {
  display: inline;
  padding: 10px 20px;
  font-size: 18px;
  margin-right: 20px;
}

.point-error p {
  margin-bottom: 10px;
}
.point-error .close-a1 a {
  color: #f7a900;
  font-size: 18px;
  text-decoration: underline;
  background: none;
}
</style>