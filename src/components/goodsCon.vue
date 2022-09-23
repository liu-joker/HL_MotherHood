<template>
  <div class="goods_con">
    <div class="pc_title"
         v-if='goodsTitle'>
      <div class="pc_title_name">{{goodsTitle}}</div>
      <div></div>
    </div>

    <div class="product_thumb row ">
      <div class=' col-sm-12 col-xs-12'
           :class="goodsClass"
           v-for="(item,index) in goodsOption"
           :key='index'>
        <div class="product_box">
          <div class='product_photo'
               @click='toDetails(item.id)'>

            <el-image :src="item.photo"
                      alt=""
                      fit="cover"
                      style='width:100%;height:100%;'></el-image>
          </div>
          <div class="product_msg">
            <!-- <div class="product_wish"
                 @click='toWish(item)'><i class="glyphicon glyphicon-heart"></i> Add to wishlist</div> -->
            <div class="product_name"
                 @click='toDetails(item.id)'>
              <a>{{item.name}}</a>

              <div class="product_info">{{item.price}}
                <!-- <div class="product_reallPrice">{{item.reallPrice}}</div> -->
              </div>
            </div>

          </div>
          <!-- <div class="product_bottom">
            <div class="toCard"
                 @click='toCard(item)'>
              <i class="glyphicon glyphicon-shopping-cart"></i>
              ADD TO CARD
            </div>
            <div class="toWish glyphicon glyphicon-heart"
                 @click='toWish(item)'
                 @mouseenter="isWish = item.id"
                 @mouseleave="isWish = 0">
              <div class="show_toast"
                   v-if='isWish == item.id'>Add to wish list</div>
            </div>
            <div class="toCompare glyphicon glyphicon-transfer"
                 @click='toCompare(item)'
                 @mouseenter="isCompare = item.id"
                 @mouseleave="isCompare = 0">
              <div class="show_toast"
                   v-if='isCompare == item.id'>compare this product</div>
            </div>
          </div> -->
        </div>
      </div>
      <!-- </div> -->
    </div>
    <!-- </el-row> -->
    <template>
      <el-dialog :visible.sync="dialogVisible"
                 :modal-append-to-body='false'
                 top='45vh'
                 width="40%">
        <span>{{dialogText}}</span>
      </el-dialog>
    </template>
    <template>
      <el-dialog :visible.sync="dialogVisible2"
                 :modal-append-to-body='false'
                 top='45vh'
                 width="40%">
        <span>{{dialogText}}</span>
      </el-dialog>
    </template>
  </div>
</template>

<script>

export default {
  props: {
    goodsOption: {
      type: Array,
    },
    goodsTitle: {
      type: String,
    },
    goodsView: {
      type: Number,
      default: 4
    },
    goodsClass: {
      type: String,
    },

  },
  data () {
    return {
      activeName: '1',
      dialogVisible: false,
      dialogVisible2: false,
      dialogText: '',
      isActive: false,
      isActiveId: '',
      scrollTop: '',
      isWish: 0,
      isCompare: 0,
      watch: [],
      image_fadeIn: false,
      image_fadeOut: false,
      image_id: 0,
    }
  },
  methods: {
    mouseIn (id) {
      this.isActive = true
      this.isActiveId = id
    },
    mouseOut () {
      this.isActive = false
      this.isActiveId = 0
    },
    fadeIn (id) {
      this.image_id = id
      this.image_fadeIn = true
      this.image_fadeOut = false
    },
    fadeOut (id) {
      this.image_id = id
      this.image_fadeIn = false
      this.image_fadeOut = true
    },
    toCard (v) {
      let item = v
      item.type = 'cart'
      sessionStorage.setItem('showDialog', JSON.stringify(item))
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
    showCard (v) {
      let id = v
      this.$emit('getProductId', id)
    },
    meanOptions () {
      let goodsOption = this.goodsOption
      let meanLengeh = Math.ceil(goodsOption.length / 4)
      let allOptions = []
      for (let i = 1; i <= meanLengeh; i++) {
        let meanOption
        meanOption = goodsOption.splice(0, 4)
        allOptions.push(meanOption)
      }
      this.allOptions = allOptions
      console.log('allOptions', allOptions)
    },
    toDetails (id) {
      this.$router.push('/details?id=' + id)
    },
    toCompare (v) {
      let item = v
      let compare = JSON.parse(sessionStorage.getItem('compare')) || []
      let is_find = compare.findIndex((c, index) => {
        return c.id == item.id
      })
      console.log('is_find', is_find)
      if (is_find > -1) {
      } else {
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
    scrollBackTop () {
      const that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
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

    // initSwiper () {
    //   let _self = this
    //   let goodsView = _self.goodsView
    //   let goodsClass = _self.goodsClass
    //   console.log('goodsView', goodsView)
    //   this.$nextTick(() => {
    //     new Swiper('.' + goodsClass, {
    //       //    loop:true,
    //       slidesPerView: 3,
    //       spaceBetween: 30,
    //       pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //       },
    //       nextButton: '.swiper-button-next',
    //       prevButton: '.swiper-button-prev',
    //     })
    //   })

    // },

  },
  mounted () {
    // this.initSwiper()
    window.addEventListener('scroll', this.scrollBackTop); //监听滚动条
  },

  destroyed () {
    window.removeEventListener('scroll', this.scrollBackTop)
  }

}

</script>

<style lang='scss' scoped>
.goods_con {
  .pc_title {
    width: 100%;
    background: $backgroundColor;
    padding: 10px 0;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    .pc_title_name {
      position: relative;
      color: #fff;
      font-size: 15px;
      z-index: 0;
      display: inline-block;
      font-weight: 400;
    }
  }
  .swiper_container1 {
    overflow: hidden;
    z-index: 99;
    padding: 70px 100px 60px;
  }
  .product_thumb {
    // margin: 0 -15px;
    padding: 20px 0;
    .col-lg-3,
    .col-md-3 {
      padding: 0 4px;
    }
    .product_box {
      margin-bottom: 20px;
      position: relative;
      &:hover {
        background: rgb(241, 242, 243);
      }
      .product_photo {
        position: relative;
        height: 200px;
        .product_photo_out {
          display: none;
          // z-index: -1;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }
        .product_photo_in {
          display: block;
        }
      }
      .product_msg {
        // padding: 0 25px;
        text-align: left;

        .product_wish {
          width: 100%;
          text-align: right;
          margin-top: 10px;
          color: #222;
          font-size: 13px;
          text-transform: uppercase;
          font-weight: 500;
          cursor: pointer;
        }
        .product_name {
          width: 100%;
          padding: 0 15px;

          a {
            color: $fontBodyColor !important;
            font-weight: 400;
            font-size: 13px;
            cursor: pointer;
            display: flex;
            line-height: 1.5;
            flex-direction: column;
            overflow: hidden; //超出文本隐藏
            margin-bottom: 15px;
            text-overflow: ellipsis; //溢出省略号显示
            display: -webkit-box; //将对象作为弹性伸缩盒子
            -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式-从上到下垂直排列
            -webkit-line-clamp: 2; //这个属性不是css的规范属性，需要组合上面两个属性，数组代表显示的行数,如2,3,4....

            &:hover {
              text-decoration: underline !important;
            }
          }
          margin: 10px 0;
        }
      }
      .product_info {
        display: inline-block;
        color: $fontColor2;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
        .product_reallPrice {
          text-decoration: line-through;
          display: inline;
          margin-left: 10px;
          color: #999;
        }
      }
      .product_bottom {
        position: absolute;
        bottom: 0;
        display: flex;
        width: 100%;
        background: #eee;
        height: 40px;
        color: #888;
        font-size: 12px;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #ddd;
        cursor: pointer;
        font-size: 14px;
        text-align: center;
        line-height: 40px;

        .toCard {
          flex: 1;
          border-right: 1px solid #ddd;
          height: 40px;
          line-height: 40px;
          font-weight: bold;
          &:hover {
            background: #e3e3e3;
            color: #000;
          }
        }
        .toWish {
          border-right: 1px solid #ddd;
        }
        .toWish,
        .toCompare {
          height: 40px;
          width: 50px;
          line-height: 40px;
          position: relative;

          &:hover {
            background: #e3e3e3;
            color: #000;
          }
          .show_toast {
            background: #000;
            color: #fff;
            font-size: 10px;
            font-weight: 100;
            width: 140px;
            height: 25px;
            // padding:0px 10px;
            position: absolute;
            top: -35px;
            border-radius: 4px;
            line-height: 25px;
            left: -50px;
            z-index: 999999;
            &::after {
              position: absolute;
              bottom: -6px;
              left: 55px;
              display: inline-block;
              border-right: 6px solid transparent;
              border-top: 6px solid #000;
              border-left: 6px solid transparent;
              border-bottom-color: #000;
              content: "";
              z-index: 999999;
            }
          }
        }
      }
    }
  }
}
</style>