<template>
  <div class="cart">
    <section class="section">
      <div class="container content">
        <div class="one-whole column"> <a name="pagecontent"
             id="pagecontent"></a>
          <h1>Shopping Cart</h1>

        </div>
        <div class="three-eighths columns medium-down--one-whole offset-by-five is-hidden-offset-mobile-only hidden js-empty-cart__message">
          <p class="quote">There are no items in your cart.</p>
          <a href="#"
             class="action_button continue-button add_to_cart">Continue Shopping</a>
        </div> <br>
        <form action="/cart"
              method="post"
              id="cart_form"
              data-cart-form="cart-template"
              data-total-discount="4000">
          <div class="cart__wrapper is-flex is-flex-wrap">
            <div class="two-thirds columns medium-down--one-whole">
              <div class="cart__item"
                   v-for="(item,index) in goodsCart"
                   :key="index">
                <div class="one-third column medium-down--one-whole cart__item--image">
                  <a href="#"
                     title="Essential Stretch Secret Fit Belly Maternity Leggings - Navy / S"
                     class="cart_page_image">
                    <div class="image-element__wrap"
                         style=" max-width: 1523px;">
                      <img alt="Essential Stretch Secret Fit Belly Maternity Leggings - Navy / S"
                           :src="item.image"
                           :data-src="item.image"
                           data-sizes="auto"
                           data-aspectratio="1523/1999"
                           :data-srcset="item.image+' 200w'"
                           style=";"
                           class="transition--blur-up lazyautosizes lazyloaded"
                           :srcset="item.image+' 200w'"
                           sizes="240px"
                           width="1523"
                           height="1999">
                    </div>

                    <noscript> <img :src="item.image"
                           alt="Essential Stretch Secret Fit Belly Maternity Leggings - Navy / S"
                           class=" noscript">
                    </noscript>
                  </a>
                </div>
                <div class="two-thirds columns medium-down--one-whole cart_content_info cart__item--content">
                  <h3 class="cart__item--title"
                      style="margin-bottom:15px;">
                    <a href="#">Essential Stretch Secret Fit Belly Maternity Leggings
                      <span class="saso-cart-item-discount-notes"
                            data-key="40341901967496:227c752c57762bad12f3273104e617ba"></span>
                      <span class="saso-cart-item-upsell-notes"
                            data-key="40341901967496:227c752c57762bad12f3273104e617ba"></span></a>
                  </h3>
                  <p class="meta"
                     style="margin-bottom:10px;">
                    <span class="label">Color:</span> <span>{{item.color}}</span><br>
                    <span class="label">Size:</span> <span>{{item.size}}</span><br>
                  </p>
                  <p style="height:10px;"></p>

                  <p class="modal_price">
                    <span class="money sale"
                          style="visibility: visible;">USD${{(item.price/100).toFixed(2)}}‌</span>
                    <span class="money was_price"
                          style="visibility: visible;">USD${{(item.compare_at_price/100).toFixed(2)}}</span>
                  </p>

                  <div class="product-quantity-box left">
                    <span class="ss-icon product-minus js-change-quantity"
                          @click="cutCount(item)"
                          data-func="minus"> <span class="icon-minus"></span></span>
                    <input type="number"
                           min="0"
                           size="2"
                           class="quantity"
                           name="updates[]"
                           id="updates_40341901967496"
                           v-model="item.count"
                           data-cart-quantity-input="cart-template">
                    <span class="ss-icon product-plus js-change-quantity"
                          @click="addCount(item)"
                          data-func="plus"> <span class="icon-plus"></span></span>
                  </div>
                  <p class="price_total">
                    <strong>Total:</strong> <span class="">
                      <span class="saso-cart-item-line-price">
                        USD${{(Number(item.allPrice)/100).toFixed(2)}}
                      </span></span>
                    <!-- <span class="money was_price"
                          style="visibility: visible;">CN¥‌875.00</span> -->
                  </p>
                  <a href="#"
                     @click.prevent="deleteItem(item,index)"
                     class="cart__remove-btn"
                     data-line-id="1"
                     data-remove-item="cart-template"><span class="remove-text">Remove</span> <span class="remove-icon"></span></a>
                </div>
              </div>
            </div>
            <div class="one-third column medium-down--one-whole">
              <div class="subtotal">
                <p class="cart_subtotal js-cart_subtotal"> <span class="right"> <span class="">
                      <!-- <span class="saso-cart-original-total"
                            style="visibility: visible;">

                        CN¥‌875.00
                      </span> -->
                      <span class="saso-cart-total"
                            style="visibility: visible;">USD${{(Number(total)/100).toFixed(2)}}</span>
                    </span></span> <span>Subtotal</span></p>

                <!-- <p class="cart_savings js-cart_savings sale"> <span class="right"> <span class=""
                          ge-data-original-price="180"
                          ge-data-converted-price="1600"
                          ge-data-converted-full-price="CN¥‌1,600.00">

                      CN¥‌1,600.00
                    </span></span> <span>Total Savings</span></p> -->
                <p style="margin-top:20px;"> <small>Orders will be processed in USD.</small></p>

                <div id="sg-customer-direct-donation">
                  <div id="shopify-section-customer-direct-donation"
                       class="shopify-section">

                  </div>
                </div>
                <!-- <script src="https://cdn.shoppinggives.com/cc-utilities/shopify-cart.js?store-id=0027f760-cd0a-4fca-a456-7226e0905b0a&amp;template-type=0"
                        id="4690437"></script> -->

                <div ge-data-checkout-button-handled="">
                  <a class="action_button add_to_cart"
                     @click.prevent="toCheckout"
                     style="color:#fff;margin:20px 0;">Checkout</a>
                </div>

                <a href="#"
                   @click.prevent="toIndex"
                   style="margin-top:20px;"
                   class="continue-shopping">Continue Shopping</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>

  </div>

</template>

<script>
import top from '../../components/top'
export default {
  components: {
    top,
  },
  data () {
    return {
      goodsCart: [],
      total: 0,
      code: '',
      giftCode: '',
      country: '',
      state: '',
      postCode: '',
      radio: 0,
      allCount: 0,
      activeNames: '',

    }
  },
  created () {

    this.getTotal()
  },
  methods: {
    refresh () {
      let goodsCart = this.goodsCart
      goodsCart.map((v, index) => {

        if (v.count > 0) {
          let price = v.price
          v.allPrice = ((Number(v.count) * Number(price))).toFixed(2)

        } else if (v.count == 0) {
          goodsCart.splice(index, 1)

        }

      })

      sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
      this.getTotal()
    },
    emptyCart () {
      this.goodsCart = []
      sessionStorage.setItem('goodsCart', JSON.stringify(this.goodsCart))
    },
    deleteItem (item, index) {
      let goodsCart = this.goodsCart
      goodsCart.splice(index, 1)
      sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
      this.getTotal()

    },
    cutCount (v) {
      if (v.count == 0) {
        return
      } else {
        v.count--
      }
      this.refresh()
    },
    addCount (v) {
      v.count = v.count + 1

      this.refresh()
    },
    getTotal () {
      let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart')) || []
      this.goodsCart = goodsCart

      let total = 0
      let allCount = 0
      goodsCart.map((v, index) => {

        let allPrice
        let price = v.price
        allCount = allCount + Number(v.count)
        allPrice = v.allPrice
        total = total + Number(allPrice)
      })
      this.total = total
      this.allCount = allCount
    },
    toCheckout () {

      this.$router.push('/checkout')
    },
    toIndex () {
      this.$router.push('/index')
    },

  },

}

</script>

<style lang='scss' scoped>
@import "../../style/cart.css";
.cart {
  text-align: left;
}
</style>
