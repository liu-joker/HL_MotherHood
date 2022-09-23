<template>
  <div>
    <!-- mobile -->
    <header id="header"
            class="mobile_nav-fixed--true">
      <div class="top-bar">
        <a class="mobile_nav mobile_nav_button"
           ref="mobile_nav">
          <div> <span></span> <span></span> <span></span> <span></span></div>
          <span class="menu_title">Menu</span>
        </a>
        <a href="#"
           title="Motherhood Maternity"
           class="mobile_logo logo">
          <img src="//cdn.shopify.com/s/files/1/0315/8035/6744/files/MH_Logo_2022_100x50-01_410x.png?v=1646929613"
               alt="Motherhood Maternity"
               @click="toIndex()"
               class=" ls-is-cached lazyloaded"></a>
        <div class="top-bar--right">
          <a href="#"
             class=" showinmobile icon-search dropdown_link"
             title="Search"
             data-dropdown-rel="search"
             data-no-instant="true">
          </a>
          <div class="hideinmobile">
            <div class="search-container"
                 data-autocomplete-true="">
              <div class="search__form"> <input type="hidden"
                       name="type"
                       value="product"> <span class="icon-search search-submit"></span> <input type="text"
                       name="q"
                       placeholder="Search"
                       value="">
                <div class="search__results-wrapper"
                     style="display: none;">
                  <ul class="search__results"></ul>
                </div>
              </div>
              <div class="search-link">
                <a href="#"
                   class="icon-search dropdown_link"
                   title="Search"
                   data-dropdown-rel="search"
                   data-no-instant="true"></a>
              </div>
            </div>
          </div>
          <div class="cart-container">
            <a href="#"
               @click.prevent="cart_drawer=!cart_drawer"
               class="icon-bag mini_cart dropdown_link"
               title="Cart"
               data-no-instant="true"> <span class="cart_count">{{cartGoods_length}}</span>
            </a>
            <div class="tos_warning cart_content animated fadeIn"
                 v-if="cart_drawer">

              <div class="js-empty-cart__message"
                   v-if="cartGoods.length<1">
                <p class="empty_cart">Your Cart is Empty</p>
              </div>
              <form method="post"
                    v-else-if="cartGoods.length>0"
                    class="js-no-empty-cart"
                    data-total-discount="0"
                    data-shop-currency="USD"
                    data-shop-name="Motherhood Maternity"
                    data-cart-form="mini-cart"> <a class="cart_content__continue-shopping secondary_button">
                  Continue Shopping</a>
                <ul class="cart_items js-cart_items">
                  <li class="mini-cart__item clearfix"
                      v-for="(item,index) in cartGoods"
                      :key="index"
                      data-cart-item=""
                      data-line-id="1"
                      data-variant-id="34054452543624">
                    <a href="#">
                      <div class="cart_image">
                        <img :src="item.image"
                             alt="Essential Stretch Secret Fit Belly Maternity Leggings - Black / XS">
                      </div>
                    </a>
                    <div class="mini-cart__item--content">
                      <div class="mini-cart__item__title">
                        <div class="item_title">
                          <a href="#">{{item.title}} - {{item.color}} / {{item.size}}</a>
                        </div>
                        <strong class="right price">
                          <span class="money sale"
                                style="visibility: visible;"
                                data-currency="USD">USD${{(item.price/100).toFixed(2)}}
                          </span>
                          <span class="money was_price"
                                v-if="item.compare_at_price>0"
                                style="visibility: visible;"
                                data-currency="USD">USD${{(item.compare_at_price/100).toFixed(2)}}
                          </span>
                        </strong>
                        <div class="left product-quantity-box">
                          <span class="ss-icon product-minus js-change-quantity"
                                @click="cutItem(item,index)"
                                data-func="minus">
                            <span class="icon-minus"></span>
                          </span>
                          <input type="number"
                                 @blur="upDate(item,index)"
                                 min="0"
                                 class="quantity"
                                 name="updates[]"
                                 id="updates_34054452543624"
                                 v-model="item.count"
                                 data-cart-quantity-input="mini-cart">
                          <span class="ss-icon product-plus js-change-quantity"
                                @click="addItem(item,index)"
                                data-func="plus">
                            <span class="icon-plus"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <a href="#"
                       @click.prevent="deleteItem(item,index)"
                       class="js-cart-remove-btn cart__remove-btn"
                       data-line-id="1"
                       data-remove-item="mini-cart">
                      <span class="remove-icon"></span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li class="cart_discounts js-cart_discounts sale"></li>
                  <li class="cart_subtotal js-cart_subtotal">
                    <span class="right">
                      <span class="money"
                            style="visibility: visible;"
                            data-currency="USD">USD$ {{total}}
                      </span>
                    </span>
                    <span>Subtotal</span>
                  </li>
                  <li class="cart_savings sale js-cart_savings">
                    <span class="right">
                      <span class="money"
                            style="visibility: visible;"
                            data-currency="USD">USD$ {{total_savings}}
                      </span>
                    </span>
                    <span>Total Savings</span>
                  </li>
                  <li>
                    <button type="submit"
                            class="action_button add_to_cart">Go to cart
                    </button>
                  </li>
                </ul>
                <input type="hidden"
                       name="discount"
                       value="">
                <input type="hidden"
                       name="clear_discount"
                       value="1">
              </form>
            </div>
          </div>

        </div>
      </div>
      <div class="dropdown_container center"
           data-dropdown="search"
           style="display: none;">
        <div class="dropdown">
          <form action="/search"
                class="header_search_form"> <input type="hidden"
                   name="type"
                   value="product"> <span class="icon-search search-submit"></span> <input type="text"
                   name="q"
                   placeholder="Search"
                   autocapitalize="none"
                   autocomplete="off"
                   autocorrect="off"
                   class="search-terms"></form>
        </div>
      </div>
      <div class="dropdown_container mobile-menu-wrapper"
           ref="mobile_menu_wrapper"
           style="display: none;">
        <div class="dropdown">
          <ul class="menu"
              id="mobile_menu">
            <li data-mobile-dropdown-rel="bras-intimates"
                class="mobile-mega-menu-parent sublink">
              <a data-no-instant="true"
                 href="#"
                 @click.prevent="toCategory('186236403848')"
                 class="parent-link--true">
                Bras &amp; Intimates </a>
            </li>
            <li data-mobile-dropdown-rel="clothing"
                class="mobile-mega-menu-parent sublink">
              <a data-no-instant="true"
                 href="#"
                 @click.prevent="toCategory('186337362056')"
                 class="parent-link--false">
                Clothing </a>
            </li>
            <li data-mobile-dropdown-rel="baby"
                class="mobile-mega-menu-parent sublink">
              <a data-no-instant="true"
                 href="#"
                 @click.prevent="toCategory('266536190088')"
                 class="parent-link--false">
                Baby </a>
            </li>
            <li data-mobile-dropdown-rel="beauty-wellness"
                class="mobile-mega-menu-parent sublink">
              <a data-no-instant="true"
                 href="#"
                 @click.prevent="toCategory('261774311560')"
                 class="parent-link--false">
                Beauty &amp; Wellness </a>
            </li>
            <li data-mobile-dropdown-rel="brands-we-love"
                class="mobile-mega-menu-parent sublink">
              <a data-no-instant="true"
                 href="#"
                 @click.prevent="toCategory('185218531464')"
                 class="parent-link--false">
                Dresses </a>

            </li>

          </ul>
        </div>
      </div>
    </header>
    <!-- pc -->
    <header class="search-enabled--true">
      <div class="header  header-fixed--true header-background--solid">
        <div class="top-bar">
          <ul class="social_icons">
            <!-- <li><a href="https://www.facebook.com/motherhoodmaternity"
                 title="Motherhood Maternity on Facebook"
                 rel="me"
                 target="_blank"
                 class="icon-facebook"></a></li> -->
            <!-- <li><a href="https://www.pinterest.com/motherhoodmat/"
                 title="Motherhood Maternity on Pinterest"
                 rel="me"
                 target="_blank"
                 class="icon-pinterest"></a></li> -->
            <!-- <li><a href="https://www.instagram.com/motherhoodmaternity/"
                 title="Motherhood Maternity on Instagram"
                 rel="me"
                 target="_blank"
                 class="icon-instagram"></a></li> <a href="https://www.motherhood.com/pages/store-locator"
               class="store-locator-link">STORE LOCATOR</a> -->
          </ul>
          <ul class="menu"></ul>
          <div class="top-bar--right-menu">
            <ul class="menu">
              <li data-mobile-dropdown-rel="join-perks"> <a data-no-instant=""
                   href="#"
                   @click.prevent="toLogin"
                   class="parent-link--true">Join Perks</a></li>
              <li> <a href="#"
                   @click.prevent="toLogin"
                   class="icon-user"
                   title="My Account "> <span>Login</span></a></li>
            </ul>
            <!-- show cart -->
            <div class="cart-container main-nav-cart">
              <a href="#"
                 class="icon-bag mini_cart dropdown_link"
                 data-no-instant="true">
                <span class="cart_count">{{cartGoods_length}}</span>
              </a>
              <div class="tos_warning cart_content animated fadeIn"
                   v-if="cart_drawer">
                <div class="js-empty-cart__message "
                     v-if="cartGoods.length<1">
                  <p class="empty_cart">Your Cart is Empty</p>
                </div>
                <form v-else-if="cartGoods.length>0"
                      class="js-no-empty-cart"
                      data-total-discount="0"
                      data-shop-currency="USD"
                      data-shop-name="Motherhood Maternity"
                      data-cart-form="mini-cart">

                  <ul class="cart_items js-cart_items">
                    <li class="mini-cart__item clearfix"
                        v-for="(item,index) in cartGoods"
                        :key="index"
                        data-cart-item=""
                        data-line-id="1"
                        data-variant-id="34054452543624">
                      <a href="#">
                        <div class="cart_image">
                          <img :src="item.image"
                               alt="Essential Stretch Secret Fit Belly Maternity Leggings - Black / XS">
                        </div>
                      </a>
                      <div class="mini-cart__item--content">
                        <div class="mini-cart__item__title">
                          <div class="item_title">
                            <a href="#">{{item.title}} - {{item.color}} / {{item.size}}</a>
                          </div>
                          <strong class="right price">
                            <span class="money sale"
                                  style="visibility: visible;"
                                  data-currency="USD">USD$ {{(item.price/100).toFixed(2)}}
                            </span>
                            <span class="money was_price"
                                  v-if="item.compare_at_price>0"
                                  style="visibility: visible;"
                                  data-currency="USD">USD$ {{(item.compare_at_price/100).toFixed(2)}}
                            </span>
                          </strong>
                          <div class="left product-quantity-box">
                            <span class="ss-icon product-minus js-change-quantity"
                                  @click="cutItem(item,index)"
                                  data-func="minus">
                              <span class="icon-minus"></span>

                            </span>
                            <input type="number"
                                   @blur="upDate(item,index)"
                                   min="0"
                                   class="quantity"
                                   name="updates[]"
                                   id="updates_34054452543624"
                                   v-model="item.count"
                                   data-cart-quantity-input="mini-cart">
                            <span class="ss-icon product-plus js-change-quantity"
                                  @click="addItem(item,index)"
                                  data-func="plus">
                              <span class="icon-plus"></span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <a href="#"
                         @click.prevent="deleteItem(item,index)"
                         class="js-cart-remove-btn cart__remove-btn"
                         data-line-id="1"
                         data-remove-item="mini-cart">
                        <span class="remove-icon"></span>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li class="cart_discounts js-cart_discounts sale"></li>
                    <li class="cart_subtotal js-cart_subtotal">
                      <span class="right">
                        <span class="money"
                              style="visibility: visible;"
                              data-currency="USD">USD$ {{total}}
                        </span>
                      </span>
                      <span>Subtotal</span>
                    </li>
                    <li class="cart_savings sale js-cart_savings">
                      <span class="right">
                        <span class="money"
                              style="visibility: visible;"
                              data-currency="USD">USD$ {{total_savings}}
                        </span>
                      </span>
                      <span>Total Savings</span>
                    </li>
                    <li>
                      <button @click.prevent="toCart"
                              class="action_button add_to_cart">Go to cart</button>
                    </li>
                  </ul>

                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- 导航 -->
        <div class="main-nav__wrapper">
          <div class="main-nav menu-position--block logo-alignment--center logo-position--center search-enabled--true">
            <div class="header__logo logo--image"> <a href="#"
                 title="Motherhood Maternity"> <img src="//cdn.shopify.com/s/files/1/0315/8035/6744/files/MH_Logo_2022_400x200-01_410x.png?v=1646929606"
                     class="primary_logo ls-is-cached lazyloaded"
                     alt="Motherhood Maternity"></a></div>
            <div class="nav nav--combined nav--center">
              <ul class="menu center">
                <li><a href="#"
                     @click.prevent="toCategory('186236403848')"
                     class="mega-menu-parent dropdown_link"
                     data-dropdown-rel="bras-intimates"
                     data-no-instant="true">Bras &amp; Intimates </a></li>
                <li><a href="#"
                     @click.prevent="toCategory('186337362056')"
                     class="url-deadlink mega-menu-parent dropdown_link"
                     data-dropdown-rel="clothing"
                     data-no-instant="true">Clothing </a></li>
                <li><a href="#"
                     @click.prevent="toCategory('266536190088')"
                     class="url-deadlink mega-menu-parent dropdown_link"
                     data-dropdown-rel="baby"
                     data-no-instant="true">Baby </a></li>
                <li><a href="#"
                     @click.prevent="toCategory('261774311560')"
                     class="url-deadlink mega-menu-parent dropdown_link"
                     data-dropdown-rel="beauty-wellness"
                     data-no-instant="true">Beauty &amp; Wellness </a></li>
                <li><a href="#"
                     @click.prevent="toCategory('185218531464')"
                     class="url-deadlink mega-menu-parent dropdown_link"
                     data-dropdown-rel="brands-we-love"
                     data-no-instant="true">Dresses </a></li>

              </ul>
              <div class="search-container"
                   data-autocomplete-true="">
                <form action="/search"
                      class="search__form"> <input type="hidden"
                         name="type"
                         value="product"> <span class="icon-search search-submit"></span> <input type="text"
                         name="q"
                         placeholder="Search"
                         value=""
                         autocapitalize="none"
                         autocomplete="off"
                         autocorrect="off">
                  <div class="search__results-wrapper">
                    <ul class="search__results"></ul>
                  </div>
                </form>
                <div class="search-link"> <a href="/search"
                     class="icon-search dropdown_link"
                     title="Search"
                     data-dropdown-rel="search"
                     data-no-instant="true"></a></div>
              </div>
            </div>
            <div class="dropdown_container center"
                 data-dropdown="search"
                 style="display: none;">
              <!-- <div class="dropdown" data-autocomplete-true> -->
              <div class="header_search_form"> <input type="hidden"
                       name="type"
                       value="product"> <span class="icon-search search-submit"></span> <input type="text"
                       name="q"
                       placeholder="Search"
                       class="search-terms"></div>
              <!--</div> -->
            </div>

          </div>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
import $ from "jquery";
export default {
  inject: ['reload'],
  data () {
    return {
      cart_drawer: false,
      cartGoods_length: 0,
      total: 0,
      total_savings: 0,
      choose_item: '',
      choose_item_from: '',
      size_index: 0,
      color_index: 0,
      cartGoods: [],

    };
  },
  created () {
    let cartGoods = JSON.parse(sessionStorage.getItem('goodsCart')) || []
    this.cartGoods = cartGoods
    this.getItem()
  },
  methods: {
    chooseSize (item, index, type) {
      // this.choose_item_from = JSON.parse(JSON.stringify(this.choose_item))
      if (type == 'color') {
        this.choose_item_from.color = item.color
        console.log('his.choose_item_from.color', this.choose_item_from.color, this.choose_item_from.size)
        return

      }
      if (type == 'size') {
        this.choose_item_from.size = item
        console.log('his.choose_item_from.color', this.choose_item_from.color, this.choose_item_from.size)
        return
      }

    },
    toCategory (cateId) {
      this.$router.push('/category?category_id=' + cateId)
      this.reload()
    },
    upDate (v, index) {


      if (v.count == 0) {
        this.cartGoods.splice(index, 1)
      } else {
        v.allPrice = (v.count * Number(v.price)).toFixed(2)
      }
      sessionStorage.setItem('goodsCart', JSON.stringify(this.cartGoods))

      this.getItem()
      this.getAllPrice()
    },
    addItem (v, index) {
      v.count = v.count + 1
      v.allPrice = (v.count * Number(v.price)).toFixed(2)
      sessionStorage.setItem('goodsCart', JSON.stringify(this.cartGoods))
      // this.$store.commit('getCartGoods', JSON.stringify(this.cartGoods))
      this.getItem()
      this.getAllPrice()
    },
    cutItem (v, index) {
      v.count = v.count - 1
      if (v.count == 0) {
        this.cartGoods.splice(index, 1)
      } else {
        v.allPrice = (v.count * Number(v.price)).toFixed(2)
      }
      sessionStorage.setItem('goodsCart', JSON.stringify(this.cartGoods))

      this.getItem()
      this.getAllPrice()
    },
    deleteItem (item, index) {
      this.cartGoods.splice(index, 1)
      sessionStorage.setItem('goodsCart', JSON.stringify(this.cartGoods))

      this.getItem()
      this.getAllPrice()
    },
    hiadeCartAlert () {
      let that = this
      setTimeout(() => {
        that.cart_drawer = false
        that.$store.commit('getCart_drawer', false)
      }, 3000);
    },
    getAllPrice () {
      let cartGoods = this.cartGoods
      let total = 0
      let total_savings = 0
      cartGoods.map(v => {
        total = Number(v.allPrice) + total
        total_savings = ((Number(v.compare_at_price) - Number(v.price)) * v.count) + total_savings
      })
      this.total = (Number(total) / 100).toFixed(2)
      this.total_savings = (total_savings / 100).toFixed(2)
    },
    getItem () {
      let cartGoods = this.cartGoods
      console.log('getitem cartGoods', cartGoods)
      let count = 0
      cartGoods.map(v => {
        count = Number(v.count + count)
      })
      if (cartGoods) {
        this.$store.commit('getCartGoods_length', count)
      }
    },

    toIndex () {

      this.$router.push('/')
    },
    toCheckOut () {
      this.$router.push('/checkout')
    },
    toLogin () {
      this.$router.push('/login')
    },
    toCart () {
      this.cart_drawer = false
      this.$router.push('/cart')
    }
  },
  mounted () {

    // cart 显示
    let that = this
    $('.js-drawer-open-cart').click(function () {
      that.cart_drawer = !that.cart_drawer
    })

    // mobile menu click
    // $(".mobile_nav").click(function () {
    //   if ($("#header").hasClass('showmenu')) {
    //     $("#header").removeClass('showmenu')
    //   } else {
    //     $("#header").addClass('showmenu')
    //   }
    // })
    document.addEventListener('mouseup', (e) => {
      let tree = this.$refs.mobile_menu_wrapper
      let menu = this.$refs.mobile_nav
      if (tree) {
        if (menu) {
          $(".mobile_nav").click(function () {
            if ($("#header").hasClass('showmenu')) {
              $("#header").removeClass('showmenu')
            } else {
              $("#header").addClass('showmenu')
            }
          })
        }
        // 判断鼠标点击的区域是否在tree里面，否则关闭弹窗
        if (!tree.contains(e.target)) {
          $("#header").removeClass('showmenu')
        }
      }
    })

    // cart show and hide
    $('.cart-container').mouseenter(function () {
      that.cart_drawer = true
      // $('.cart-container').addClass('active_link')
    });
    $('.cart-container').mouseleave(function () {
      // $('.cart-container').removeClass('active_link')
      that.cart_drawer = false
    });

    this.getAllPrice()

  },
  watch: {
    "$store.state.cartGoods_length": {
      deep: true,//深度监听设置为 true
      handler: function (newVal, oldVal) {
        //修改数据时，能看到输出结果
        this.cartGoods_length = newVal
        this.cartGoods = JSON.parse(sessionStorage.getItem('goodsCart'))

        console.log("数据发生变化啦", newVal, this.cartGoods, this.cart_drawer)
      }
    },
    "$store.state.cart_drawer": {
      deep: true,
      handler: function (nV, oV) {
        this.cart_drawer = nV
        this.getAllPrice()
        this.hiadeCartAlert()
      }
    }
  },
  computed: {

  }


};
</script>

<style>
ul.dropdown_title li a {
  font-weight: bold !important;
}
.dropdown_column .dropdown_item:first-child li a {
  font-weight: bold !important;
}
.mini-cart__item .final_sale {
  padding: 0 !important;
  text-align: left;
}
.cart-container .mini_cart:before {
  font-size: 16px !important;
}
.top-bar .top-bar--right .icon-search:before {
  font-size: 18px !important;
}
/* MAGDA */
.final_sale_mini_cart {
  margin: 10px 0px;
  text-align: left;
  font-size: 12px;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  color: #000000;
  line-height: 13px;
}
/* END MAGDA */

/* MS */
.logo-position--left .header__logo {
  padding-bottom: 4px;
}
.sticky_nav .logo-position--left .header__logo {
  padding: 12px 0 15px 0;
}
/* added to account for move of mini cart --MS */
.mini_cart,
.nav a.mini_cart {
  background-color: unset;
  color: #f4f4f4;
  font-size: 12px;
  letter-spacing: 1px;
  align-items: center;
  margin-right: 0;
  vertical-align: middle;
}

/* updated values to account for removal of top bar --MS */
.cart_content {
  top: 100%;
}
.icon-bag:before {
  font-size: 20px;
  margin-right: 0;
  vertical-align: middle;
}
.icon-user:before {
  font-size: 12px;
}
/* .customer-account span, .icon-user, .icon-user:before {   
    color:#fff;
  } */

/* fixes width of ReCaptcha 'Submit' button on mobile --MS */
@media only screen and (max-width: 798px) {
  .shopify-challenge__container .shopify-challenge__button {
    width: 90%;
  }
}

/* updates navbar to hamburger breakpoint --MS */
@media only screen and (max-width: 1024px) {
  #header {
    display: block;
  }
  .header {
    display: none;
  }
  #header .top-bar a.mobile_logo {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-size: 18px;
    line-height: 34px;
    z-index: 5;
    width: 50%;
    height: auto;
    color: #fff;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  #header a.mobile_logo img {
    width: auto;
    max-width: 150px;
    max-height: 60px;
  }
}
/* END MS */
div.header__logo,
div.header__logo img,
div.header__logo span,
.sticky_nav .menu-position--block .header__logo {
  max-width: 200px;
}
</style>