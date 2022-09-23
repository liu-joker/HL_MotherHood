<template>
  <div class="category">

    <div id="react-results-root"
         data-id="186337362056"
         data-name="Tees, Tanks &amp; Tops">
      <main class="app">
        <div class="jss1 jss2"
             id="test"
             @click="backTop"
             v-if="backTop_flag">
          <svg class="MuiSvgIcon-root"
               focusable="false"
               viewBox="0 0 24 24"
               aria-hidden="true">
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
          </svg>
        </div>
        <header>
          <h1 style="text-align:left;">{{category_name}}</h1>
          <h1 style="text-align:right;font-size:12px!important;">{{product.total_results}} <span style="text-transform:lowercase;font-weight:200;"> items</span> </h1>
        </header>

        <div class="removable-tags-custom-container"></div>
        <div class="result-grid"
             style="min-height:400px;">
          <div>
            <div class="grid-0-2-7 grid-d0-0-2-9 fs-product-grid"
                 id="product-grid">
              <div class="product-card-card-0-2-13 jss31 product-card fs-product-card"
                   data-id="69369222595925"
                   v-for="(item,index) in productList"
                   @click.prevent="toDetails(item.id,item.u)"
                   :key='index'>
                <a class="container-0-2-14 product-image-wrapper fs-product-image-container"
                   href="#">
                  <div class="badges-0-2-16 jss34 fs-badges"
                       v-if="item.p_spl ==1">
                    <div class="badge-0-2-67 badge-d0-0-2-68 jss27 fs-badge">NEW</div>
                  </div>
                  <img :alt="item.l"
                       :src="item.t"
                       class="image-0-2-15 product-image fs-product-image"
                       loading="lazy">
                </a>
                <div data-v-6cec097c=""
                     v-if="item.reviews_count"
                     title="90 out of 100"
                     class="stars-0-2-22 fs-product-rating">
                  <div data-v-6cec097c=""
                       data-fill="100"
                       v-for="i in 5"
                       :key='i'
                       class="star-0-2-23 fs-review-star fs-review-star">
                    <svg data-v-6cec097c=""
                         viewBox="0 0 51 48"
                         class="svg-0-2-24">
                      <defs data-v-6cec097c="">
                        <linearGradient data-v-6cec097c=""
                                        id="widgetGrad-4974243643528-1"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="0%">
                          <stop data-v-6cec097c=""
                                offset="0%"
                                class="filled-0-2-25 filled-d0-0-2-27"></stop>
                          <stop data-v-6cec097c=""
                                offset="100%"
                                class="filled-0-2-25 filled-d0-0-2-27"></stop>
                          <stop data-v-6cec097c=""
                                offset="100%"
                                class="empty-0-2-26"></stop>
                          <stop data-v-6cec097c=""
                                offset="100%"
                                class="empty-0-2-26"></stop>
                        </linearGradient>
                      </defs>
                      <path data-v-6cec097c=""
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style="fill: url(&quot;#widgetGrad-4974243643528-1&quot;);"></path>
                    </svg>
                  </div>

                  <span data-v-6cec097c=""
                        class="fs-review-count">({{item.reviews_count}})
                  </span>
                </div>
                <div class="product-info-info-0-2-17 product-info fs-product-info">
                  <!-- <label class="jss38 promo-label"
                         v-if="!item.reviews_count"
                         data-name="a pea in the pod">
                    {{item.v}}
                  </label> -->
                  <a class="label-0-2-18 product-title-wrapper fs-product-title"
                     href="#">
                    <span class="product-title">{{item.l}}</span>
                  </a>
                  <div class="jss30 product-sub-info">
                    <div class="price-0-2-20 fs-product-price-wrapper product-price-wrapper mark-price-exist">
                      <span class="fs-product-price product-price jss39 fs-price money font-bold"
                            style="visibility: visible;">$‌{{item.p_min}}
                      </span>
                      <span class="compare-0-2-21 fs-product-price-compare product-compare-price fs-price money"
                            v-if="Number(item.p_max_c)>0"
                            style="visibility: visible;">$‌{{item.p_max_c}}
                      </span>
                    </div>
                    <label class="jss42"
                           v-if="item.alt">{{item.alt.length}} Colors</label>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="loda_more"
             v-if="product.total_p>product.p"
             @click="load_more">
          LOAD MORE
        </div>
      </main>
    </div>

  </div>
</template>

<script>



import product from '../../utils/product.js'
import $ from 'jquery'
import cataList from '../../utils/cataList.js'
import axios from 'axios'
export default {
  inject: ['reload'],
  components: {


  },
  data () {

    return {
      product: '',
      goodsCart: [],
      productList: [],
      category_name: '',
      backTop_flag: false,
      category_url: '',
    }
  },
  created () {

    this.category_id = this.$route.query.category_id

    console.log('this.$route.query', this.$route.query)

    this.getItem()

    window.addEventListener('popstate', this.goBack, false);
  },
  methods: {


    toCard (v) {
      let item = v
      let id = item.id
      let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart'))
      if (goodsCart) {
        let is_find = goodsCart.findIndex((v, index) => {
          return v.id == id
        })
        if (is_find > -1) {
          console.log('is_find', is_find)
          let mun = Number(goodsCart[is_find].count)
          let price = item.price.split('$')[1]
          price = Number(price)
          goodsCart[is_find].count = 1 + mun
          goodsCart[is_find].allPrice = (goodsCart[is_find].count * price).toFixed(2)
          sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
          this.backTop()
        } else {
          this.$router.push('/details?id=' + item.id)
        }
      } else {
        this.$router.push('/details?id=' + item.id)
      }
    },
    goBack () {
      location.reload()
    },

    getItem () {
      let category_id = this.category_id
      let category_url
      let category_list = [
        {
          category_id: 186236403848,
          category_name: 'shop all bars',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663211822&facets_required=1&category_id=186236403848&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 185059246216,
          category_name: 'clothing> new arrivals',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663211486&facets_required=1&category_id=185059246216&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 266536190088,
          category_name: 'baby clothes',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663211822&facets_required=1&category_id=266536190088&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 272716071048,
          category_name: 'beauty>Best Sellers',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663212445&facets_required=1&category_id=272716071048&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 185218531464,
          category_name: 'dresses sale',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663212865&facets_required=1&category_id=185218531464&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 186337362056,
          category_name: 'shop all tops',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663225159&facets_required=1&category_id=186337362056&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 260587716744,
          category_name: 'shop all bottoms',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663225159&facets_required=1&category_id=260587716744&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 272866803848,
          category_name: 'Baby Swaddles & Loveys',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663225159&facets_required=1&category_id=272866803848&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 266536321160,
          category_name: 'Baby Skincare',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663225159&facets_required=1&category_id=266536321160&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 261774311560,
          category_name: 'Shop All Beauty & Gifts',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663226678&facets_required=1&category_id=261774311560&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 272717774984,
          category_name: 'Postpartum Skin&Recovery ',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663226974&facets_required=1&category_id=272717774984&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 186235093128,
          category_name: 'Tops Sale',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663226974&facets_required=1&category_id=186235093128&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 261770051720,
          category_name: 'Shorts, Jeans & Pants Sale',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663226974&facets_required=1&category_id=261770051720&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 185219022984,
          category_name: 'Swim Sale',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663226974&facets_required=1&category_id=185219022984&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 185274564744,
          category_name: 'Plus Size Sale',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663226974&facets_required=1&category_id=185274564744&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 185269256328,
          category_name: 'Nursing & Postpartum Sale',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663226974&facets_required=1&category_id=185269256328&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 261693243528,
          category_name: 'ntimates & Sleep Sale',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663226974&facets_required=1&category_id=261693243528&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 185218891912,
          category_name: 'Jackets & Coats Sale',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663226974&facets_required=1&category_id=185218891912&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 185274466440,
          category_name: 'Shop All Sale',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663226974&facets_required=1&category_id=185274466440&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 266536288392,
          category_name: 'Baby Feeding',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663228445&facets_required=1&category_id=266536288392&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 189433544840,
          category_name: 'Top Bundles',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663228445&facets_required=1&category_id=189433544840&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 184987877512,
          category_name: 'Hoodies & Sweatshirts',
          category_url: '	https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663228445&facets_required=1&category_id=184987877512&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 185060786312,
          category_name: 'Graphic Tees',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663228445&facets_required=1&category_id=185060786312&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 186296238216,
          category_name: 'panties',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663829350&facets_required=1&category_id=186296238216&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 185061703816,
          category_name: 'denim',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663830124&facets_required=1&category_id=185061703816&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 186225590408,
          category_name: 'jackets & coats',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663830436&facets_required=1&category_id=186225590408&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 273059381384,
          category_name: 'Branch & Twig',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663831451&facets_required=1&category_id=273059381384&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 185789907080,
          category_name: 'Dresses',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663832090&facets_required=1&category_id=185789907080&page_num=1&with_product_attributes=true'
        },
        {
          category_id: 270371225736,
          category_name: 'ESTAS Beauty',
          category_url: 'https://api.instantsearchplus.com/categories_navigation?UUID=5cb4105c-7d2e-4e3b-b5e3-aa992e9c9533&store_id=31580356744&cdn_cache_key=1663832548&facets_required=1&category_id=270371225736&page_num=1&with_product_attributes=true'
        },
      ]
      category_list.map(v => {
        if (v.category_id == category_id) {
          category_url = v.category_url
          this.category_url = v.category_url
          return
        }
      })
      this.get_category()

    },


    get_category () {
      let category_url = this.category_url
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      axios({
        url: category_url,
        method: 'get',
        data: {

        },
        // headers: {
        //  'Content-type':'application/x-www-form-urlencoded'
        // }
      }).then(res => {
        loading.close();
        if (res.status == 200) {

          this.product = res.data
          this.productList = this.productList.concat(res.data.items)
          this.category_name = res.data.category_name

        }
        else {
          this.$message({
            message: res.statusText,
            type: 'error'
          })
        }
      }).catch(e => {
        loading.close();
      })
    },
    load_more () {
      let num = Number(this.product.p)
      let total_mun = Number(this.product.total_p)
      if (num == total_mun) return
      let category_url = this.category_url.replace('page_num=' + num, 'page_num=' + (num + 1))
      this.category_url = category_url
      console.log('category_url', category_url)
      this.get_category()
    },
    toDetails (id, u) {
      console.log('id', id)
      this.$router.push('/details?u=' + u + '&id=' + id)
    },
    toCompare (v) {
      let item = v
      let compare = JSON.parse(sessionStorage.getItem('compare')) || []
      let is_find = compare.findIndex((c, index) => {
        return c.id == item.id
      })
      if (is_find > -1) { } else {
        if (compare.length == 4) {
          compare.splice(0, 1)
        }
        compare.push(item)
        sessionStorage.setItem('compare', JSON.stringify(compare))
      }
      item.type = 'compare'
      sessionStorage.setItem('showDialog', JSON.stringify(item))
      this.backTop()
    },
    toCompareView () {
      this.$router.push('/compare')
    },
    toWish (v) {
      let item = v
      let wish = JSON.parse(sessionStorage.getItem('wish')) || []
      let is_find = wish.findIndex((c, index) => {
        return c.id == item.id
      })
      if (is_find > -1) { } else {
        wish.push(item)
        sessionStorage.setItem('wish', JSON.stringify(wish))
      }
      item.type = 'wish'
      sessionStorage.setItem('showDialog', JSON.stringify(item))
      // this.backTop()
      this.$confirm('Product added', '', {
        center: true,
        showClose: false,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: 'show_dialog_box',
      })
    },

    getTotal () {
      let goodsCart = this.goodsCart
      let total = 0
      goodsCart.map((v, index) => {
        let allPrice
        let price = v.price.split('$')[1]
        allPrice = v.allPrice ? v.allPrice : price
        total = total + Number(allPrice)
      })
      this.total = total.toFixed(2)
      this.allTotal = (total + 5).toFixed(2)
    },
    scrollBackTop () {
      const that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (scrollTop >= 500) {
        that.backTop_flag = true
      } else {
        that.backTop_flag = false
      }
    },
    backTop () {
      const that = this
      if (that.scrollTop > 0) {
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
          if (that.scrollTop <= 0) {
            clearInterval(timer);
          }
        }, 50)
      } else {
        return
      }
    },
  },
  mounted () {
    let that = this
    window.addEventListener('scroll', this.scrollBackTop); //监听滚动条
    window.addEventListener("setCompare", (e) => {
      let compareCount = JSON.parse(e.newValue)
      this.compareCount = compareCount
      console.log('compareCount', compareCount)
      this.$forceUpdate()
    });

  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollBackTop)
    window.removeEventListener('popstate', this.goBack, false);
  }
}
</script>
<style lang='scss' scoped>
@import "../../style/category.css";
.loda_more {
  width: 160px;
  height: 34px;
  font-weight: 600;
  font-size: 16px;
  margin: 0 auto;
  text-align: center;
  line-height: 34px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.3);
  &:hover {
    background: rgba(0, 0, 0, 0.6);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
}
</style>
