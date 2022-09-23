<template>
  <div class="index">
    <template>
      <banner></banner>
    </template>

    <div class="page-width t_container">
      <div class="t_title">Deals You <em class="title_em">Can't Miss</em> </div>
      <div class="size_container">
        <div class="category_list row">
          <div class="category_list_thumb col-sm-3 col-xs-6"
               @click="toCategory('185218531464')">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F7ae3ca1d16c540a9b95287c60667c2b1%2F3028302d82094eea8a2b77b65bef1ec8"
                 alt=""
                 class="">
            <div class="category_list_tab">SHOP DRESSES</div>
          </div>
          <div class="category_list_thumb col-sm-3 col-xs-6"
               @click="toCategory('185061703816')">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F7ae3ca1d16c540a9b95287c60667c2b1%2F40f33beb15014a478886c49dea57cf71"
                 alt=""
                 class=" ">
            <div class="category_list_tab">SHOP DENIM</div>
          </div>
          <div class="category_list_thumb col-sm-3 col-xs-6"
               @click="toCategory('186236403848')">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F7ae3ca1d16c540a9b95287c60667c2b1%2F8802698116ee4b4c98151bfefd1f9bff"
                 alt=""
                 class=" ">
            <div class="category_list_tab">SHOP BRAS</div>
          </div>
          <div class="category_list_thumb col-sm-3 col-xs-6"
               @click="toCategory('186296238216')">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F7ae3ca1d16c540a9b95287c60667c2b1%2Fd885687d28f8446e9b80942a21937821"
                 alt=""
                 class="">
            <div class="category_list_tab">SHOP PANTIES</div>
          </div>

        </div>

      </div>
    </div>
    <!-- <div class="page-width t_container">
      <div class="t_outlet"><img src="https://cdn.shopify.com/s/files/1/0315/8035/6744/files/outlet-banner_0d5a7c29-e6a3-400d-ad8c-ae11ba8c94ed_480x.jpg?v=1658935320"
             alt=""></div>

    </div> -->
    <!-- justIn swiper -->

    <!-- Shop By Category -->
    <div class="page-width t_container">
      <em class="title_em"
          style="font-size:200%;">Get the Latest</em>
      <div class="t_title">Our trendy, need-right now styles</div>
      <div class="size_container">
        <div class="category_list row">
          <div class="select_thumb col-sm-4 col-xs-12"
               @click="toCategory('186225590408')">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F7ae3ca1d16c540a9b95287c60667c2b1%2Feb08517c021e4b318b500f5c7224e961"
                 alt=""
                 class="">
            <div class="select_msg">
              <div class="select_msg_title">Outerwear</div>
              <div class="select_msg_tab">SHOP NOW</div>
            </div>
          </div>
          <div class="select_thumb col-sm-4 col-xs-12"
               @click="toCategory('273059381384')">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F7ae3ca1d16c540a9b95287c60667c2b1%2Fe89881a2bda643b0951a9b90b607efe3"
                 alt=""
                 class="">
            <div class="select_msg">
              <div class="select_msg_title">Branch & Twig</div>
              <!-- <div class="select_msg_p">Leggings made for AM to PM comfort.</div> -->
              <div class="select_msg_tab">SHOP NOW</div>
            </div>
          </div>

          <div class="select_thumb col-sm-4 col-xs-12"
               @click="toCategory('185789907080')">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F7ae3ca1d16c540a9b95287c60667c2b1%2Ff0462edfa970406ab0a385ced3e0beb7"
                 alt=""
                 class="">
            <div class="select_msg">
              <div class="select_msg_title">Dress to Layer</div>
              <!-- <div class="select_msg_p">The wear-now fits to round out your summer.</div> -->
              <div class="select_msg_tab">SHOP NOW</div>
            </div>
          </div>

        </div>

      </div>
    </div>
    <!--about us  -->
    <div class="page-width t_container">
      <div class="t_title">Products We Love <img src="https://cdn.shopify.com/s/files/1/0315/8035/6744/files/mini-heart_34x.jpg?v=1656604689"
             style="max-width: 34px"></div>
      <div class="about_container">
        <div class="about_list"
             @click="toCategory('266536288392')">
          <div class="list_tab">
            <img src="https://cdn.shopify.com/s/files/1/0315/8035/6744/files/marketplace-lavie_600x.jpg?v=1658935555"
                 alt="">
          </div>
          <div class="lsit_tab_msg ">
            <div class="list_tab_container">
              <div class="list_tab_text">
                <div class="list_tab_text_title">LaVie</div>
                <p class="list_tab_text_info">
                  Nursing & pumping essentials to help you through the feeding journey.
                </p>
              </div>
              <div class="list_tab_butten">SHOP LAVIE</div>
            </div>
          </div>
        </div>
        <div class="about_list"
             @click="toCategory('270371225736')">
          <div class="list_tab">
            <img src="https://cdn.shopify.com/s/files/1/0315/8035/6744/files/estas_600x.jpg?v=1659104727"
                 alt="">
          </div>
          <div class="lsit_tab_msg ">
            <div class="list_tab_container">
              <div class="list_tab_text">
                <div class="list_tab_text_title">ESTAS Beauty</div>
                <p class="list_tab_text_info">
                  It's time to upgrade your beauty routine with the luxury skincase essentials from ESTAS Beauty. Made specifically for scars
                </p>
              </div>
              <div class="list_tab_butten">SHOP ESTAS BEAUTY</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="page-width t_container">
      <div class="text_introduce">
        <div class="introduce_top">
          <div class="introduce_title">Welcome to Motherhood</div>
          <div class="introduce_main">When it comes to stylish and comfortable maternity clothes, Motherhood is the destination for maternity and pospartum wear. Choose from our selection of fashionable maternity tops, the best maternity nursing bra solutions for your breastfeeding journey, fashion-forward maternity dresses and more! From our newest arrivals to our maternity clothing sale, shop your favorite styles today.</div>

        </div>
        <!-- <div class="introduce_bot">
          <div class="introduce_back">We're back!</div>
          <div class="introduce_p">Shop your favorite Motherhood styles at A Pea in the Pod stores.</div>
          <div class="introduce_p">Now open in Chicago & New York city!</div>
          <div class="introduce_tap"> <a href="#">Find a store</a> </div>
          <div class="introduce_tap"><a href="#">Stay in the know</a></div>
        </div> -->
      </div>

    </div>
  </div>
</template>

<script>
import banner from '../../components/banner.vue'
import goodsCon from '../../components/goodsCon.vue'
import productDetails from '../../components/details.vue'
import product from '../../utils/product'
import top from '../../components/top'
import $ from 'jquery'
export default {
  name: 'index',
  components: {
    banner,
    goodsCon,
    productDetails,
    top,
  },
  data () {
    return {
      dialogVisible: false,
      id: '',
      tpArr: [],
      mouseId: 0,
      leaveId: 0,

    }
  },
  methods: {
    getProductId (e) {
      this.id = e
      this.dialogVisible = true
      console.log('eeee', e)
    },
    tabMouseIn (id) {
      this.mouseId = id
    },

    mouse_in () {
      this.$refs.trans_t.classList.add('t_mi_item')
      console.log('ref', this.$refs.trans_t.className)
    },
    initSwiper () {
      this.$nextTick(() => {
        new Swiper('.swiper-container2', {
          loop: true,
          speed: 300,
          noSwiping: true,
          noSwipingClass: 'stop-swiping',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
        })
      })

    },
    toDetails (e) {
      this.$router.push('/details?id=' + e)
    },
    toCategory (e) {
      this.$router.push('/category?category_id=' + e)
    }
  },
  mounted () {

    $('.product-slide-leftbtn').click(function () {
      let ispeed = $('.blc-scrollbar').scrollLeft()
      if (ispeed == 0) {
        return
      } else {
        $('.blc-scrollbar').animate({ scrollLeft: 0 }, 400)
        $('.blc-scrollbar').scrollLeft(ispeed_l / 2)
        let timer = setInterval(() => {
          let ispeed_l = $('.blc-scrollbar').scrollLeft()
          console.log('ispeed_l', ispeed_l,)
          $('.blc-scrollbar').scrollLeft(ispeed_l / 2)
          if (ispeed_l <= 0) {
            clearInterval(timer);
          }
        }, 50)
      }
    })
    $('.product-slide-rightbtn').click(function () {
      $('.blc-scrollbar').animate({ scrollLeft: $('.blc-scrollbar').outerWidth() }, 400)

    })
  },
  created () {
    this.productItems = product.data.slice(0, 10)
    let cardNumber = '4288373874489079'
    let a = 'ACH5118105613ACHeNDPuBGyj5MDaTZ8IuM%2BOKvMpgraCWTNFi%2BEI%2Fw6hRdvqzHQ%2BYW1%2Byup5xpLTSWcl9rLXTUv5%2BIBk5jCe8fAsQ%3D%3D'
    let t = decodeURIComponent(a)
    console.log(t)

  }
}
</script>
<style lang='scss' scoped>
.index {
  .t_container {
    img {
      &:hover {
        opacity: 0.9;
      }
    }
    width: 100%;
    margin-top: 48px;
    .category_list_thumb {
      margin-bottom: 20px;
      .category_list_tab {
        display: inline-block;
        cursor: pointer;
        margin-top: 10px;
        font-weight: 600;
        font-size: 110%;
        border-bottom: 2px solid #151515;
      }
    }
    .t_title {
      font-size: 300%;
      color: #000;
      margin-bottom: 32px;
      margin-top: 8px;
      font-weight: 600;
      text-align: center;
      font-family: "Playfair Display";
    }
    .title_em {
      color: #db937c;
      font-family: "Playfair Display", serif;
      text-transform: none;
      font-size: 100%;
    }
    .t_outlet {
      background: #dba9a4;
      padding: 20px 0;
    }

    .about_container {
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
      justify-content: space-between;
      .about_list {
        height: auto;
        background: #f6f5f3;
        display: flex;
        max-width: 49%;
        justify-content: space-between;
        // &:first-child {
        //   margin-right: 20px;
        // }
        .list_tab {
          width: 50%;
          max-width: 295px;
          height: 100%;
          &:last-child {
            width: 100%;
          }
          > img {
            width: 100%;
            height: 100%;
          }
        }
        .col-sm-6 {
          padding: 0;
        }

        .lsit_tab_msg {
          // height: 100%;
          background: #f3e8e4;
          flex: 1;
          display: table;
          .list_tab_container {
            padding: 0 15px;
            text-align: center;
            display: table-cell;
            vertical-align: middle;
            height: 100%;
            .list_tab_text_title {
              // margin-bottom: 15px;
              font-family: "Playfair Display", serif;
              font-size: 170%;
              padding: 7px 0;
            }
            .list_tab_text_info {
              font-size: 126%;
              line-height: 1.1;
            }

            .list_tab_butten {
              line-height: 1.2;
              margin-top: 8px;
              color: #151515;
              padding: 0.5em 0;
              font-size: 110%;
              font-weight: 600;
              display: inline-block;
              cursor: pointer;
              background: linear-gradient(#151515, #151515) no-repeat;
              background-size: 100% 2px;
              background-position: 0 1.8em;
              text-shadow: 0.05em 0 #fff, -0.05em 0 #fff;
            }
          }
        }
      }
    }

    .select_thumb {
      display: flex;
      flex-direction: column;
      .select_msg {
        width: 100%;
        .select_msg_title {
          font-family: "Playfair Display", serif;
          text-transform: none;
          font-size: 200%;
          margin: 20px 0 0 0;
          padding: 0 0 12px;
          line-height: 1.3;
        }
        .select_msg_p {
          padding: 0 5%;
          font-size: 130%;
          line-height: 1.1;
        }
        .select_msg_tab {
          line-height: 1.2;
          margin-top: 8px;
          color: #151515;
          padding: 0.5em 0;
          font-size: 110%;
          font-weight: 600;
          display: inline-block;
          cursor: pointer;
          background: linear-gradient(#151515, #151515) no-repeat;
          background-size: 100% 2px;
          background-position: 0 1.8em;
        }
      }
    }
    .text_introduce {
      width: 100%;

      .introduce_top {
        max-width: 1200px;
        margin: 0 auto;
        border-top: 1px solid #151515;
        padding-top: 10px;
        text-align: left;
        color: #151515;

        .introduce_title {
          font-family: "Playfair Display", serif;
          font-size: 130%;

          padding: 0 10px 15px;
        }
        .introduce_main {
          font-size: 110%;
          line-height: 1.2;
          padding: 0 15px;
        }
      }
      .introduce_bot {
        width: 100%;
        background: #63656b;
        color: #fff;
        padding: 5% 0;
        margin-top: 50px;
        .introduce_back {
          font-size: 300%;
          margin-bottom: 5px;
          font-family: "Playfair Display";
        }
        .introduce_p {
          font-size: 126%;
          line-height: 1.1;
          margin-bottom: 15px;
        }
        .introduce_tap {
          line-height: 1.2;
          margin-top: 8px;

          padding: 0.5em 0;
          font-size: 110%;
          font-weight: 600;
          position: relative;

          cursor: pointer;
          > a {
            color: #fff;
            border-bottom: 2px solid #000;
          }

          // text-shadow: 0.05em 0 #fff, -0.05em 0 #fff;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .about_container {
      display: flex;
      flex-direction: column;
      padding: 0 !important;
      .about_list {
        max-width: 100% !important;
        &:first-child {
          margin-right: 0 !important;
          margin-bottom: 30px;
        }
        &:last-child {
          flex-direction: row-reverse;
        }
      }
    }

    .select_tab {
      // padding: 0 32px;
      cursor: pointer;
      width: 50%;
      margin: 0 0 32px !important;
    }
  }
  img {
    vertical-align: middle;
    border: none;
    max-width: 100%;
  }
}
</style>
<style scoped>
div[data-section-id="1644894213e36fd064"]::after {
  margin-bottom: -15px;
  display: block;
  content: "";
  clear: both;
}

div[data-section-id="1644894213e36fd064"] .section-header {
  margin-top: px;
  margin-bottom: px;
}

@media only screen and (min-width: 768px) {
  div[data-section-id="1644894213e36fd064"] .section-header {
    margin-top: px;
    margin-bottom: px;
  }
}
div.section_title[id="1644894213e36fd064"] {
  overflow: hidden;
  clear: both;
  position: relative;
  font-size: 30px;
  font-weight: 600;
  color: #000000;
  text-align: left;
  margin-top: 8px;
  margin-bottom: 32px;
  padding-left: 0px;
  padding-right: 0px;
  line-height: 1.2;
}

div.section_title[id="1644894213e36fd064"] > .section_title__more {
  font-size: 14px;
  font-weight: 500;
  color: #666666;
}

@media only screen and (max-width: 768px) {
  div.section_title[id="1644894213e36fd064"] {
    font-size: 20px;
    margin-top: 24px;
    margin-bottom: 20px;
    padding-left: 0px;
    padding-right: 0px;
  }

  div.section_title[id="1644894213e36fd064"] > .section_title__more {
    font-size: 14px;
  }
}
.grid-product-new-tag {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 16px;
  width: 32px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  line-height: normal;
}
.grid-product__colors--7407981527210 {
  display: none !important;
}
.grid-product__colors--7407995912362 {
  display: none !important;
}
.grid-product__colors--7407982936234 {
  display: none !important;
}
.grid-product__colors--7407720464554 {
  display: none !important;
}
.grid-product__colors--7408044605610 {
  display: none !important;
}
.grid-product__colors--7407721709738 {
  display: none !important;
}
.grid-product__colors--7407982379178 {
  display: none !important;
}
.grid-product__colors--7407679373482 {
  display: none !important;
}
.grid-product__colors--7407959638186 {
  display: none !important;
}
.grid-product__colors--7407983657130 {
  display: none !important;
}
.grid-product__colors--7407734161578 {
  display: none !important;
}
</style>