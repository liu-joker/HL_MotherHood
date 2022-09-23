<template>
  <div class="compare">
    <!-- <top></top> -->
    <div class="compare_title">
      <h1>Product Comparison</h1>
    </div>

    <div class="compare_list"
         v-if='compareCount.length'>
      <div class="thead_title_td"><strong>Product Details</strong></div>
      <table>
        <thead>
          <!-- <tr class="thead_title"><td class="thead_title_td"><strong>Product Details</strong></td></tr> -->
        </thead>
        <tbody>
          <tr>
            <td class="table_title_td">Product</td>
            <td class="table_product_td"
                v-for="(item,index) in compareCount"
                :key='index'>{{item.name}}</td>
          </tr>
          <tr>
            <td class="table_title_td">Image</td>
            <td class="table_product_td product_img"
                v-for="(item,index) in compareCount"
                :key='index'><img :src="item.photo"
                   alt=""></td>
          </tr>
          <tr>
            <td class="table_title_td">Price</td>
            <td class="table_product_td"
                v-for="(item,index) in compareCount"
                :key='index'>{{item.price}}</td>
          </tr>
          <!-- <tr>
                      <td class="table_title_td">Original Price</td>
                       <td class="table_product_td" v-for="(item,index) in compareCount" :key='index'>{{item.reallPrice}}</td>
                  </tr> -->
          <tr>
            <td class="table_title_td">Availability</td>
            <td class="table_product_td"
                v-for="(item,index) in compareCount"
                :key='index'>In Stock</td>
          </tr>
          <tr>
            <td class="table_title_td">Rating</td>
            <td class="table_product_td"
                v-for="(item,index) in compareCount"
                :key='index'>
              <i class="glyphicon glyphicon-star-empty"
                 v-for="(i,idx) in 5"
                 :key='idx'></i>
              <p>Based on 0 reviews.</p>
            </td>
          </tr>
          <tr>
            <td class="table_title_td">Dimensions (L x W x H)</td>
            <td class="table_product_td"
                v-for="(item,index) in compareCount"
                :key='index'>0.00mm x 0.00mm x 0.00mm</td>
          </tr>
          <tr>
            <td class="table_title_td"></td>
            <td class="table_product_td"
                v-for="(item,index) in compareCount"
                :key='index'>
              <div class="addCart"
                   @click='addCart(item)'>Add to Cart</div>
              <div class="remove"
                   @click='removeProduct(item)'>Remove</div>

            </td>
          </tr>
        </tbody>
      </table>

    </div>
    <p v-else>You have not chosen any products to compare.</p>
  </div>
</template>

<script>
import top from './top.vue'

export default {
  components: {
    top
  },
  data () {
    return {
      compareCount: '',
    }
  },
  methods: {
    addCart (v) {
      let item = v
      item.type = 'cart'
      sessionStorage.setItem('showDialog', JSON.stringify(item))
      let id = item.id
      let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart'))
      let count = 1
      item.count = 1
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
          let price = item.price.split('$')[1]
          item.allPrice = (price * count).toFixed(2)

          goodsCart.push(item)
          sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))

        }


      } else {
        let productArr = []

        let price = item.price.split('$')[1]
        item.allPrice = price
        productArr.push(item)
        sessionStorage.setItem('goodsCart', JSON.stringify(productArr))

      }
      this.backTop()


    },
    removeProduct (v) {
      let compareCount = this.compareCount
      let id = v.id
      compareCount.map((item, index) => {
        if (item.id == id) {
          compareCount.splice(index, 1)

          sessionStorage.setItem('compare', JSON.stringify(compareCount))
        }
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
            console.log('top')
          }
        }, 50)
      } else {
        return
      }
    },
  },
  created () {
    this.compareCount = JSON.parse(sessionStorage.getItem('compare'))
  },
  mounted () {
    window.addEventListener("setCompare", (e) => {

      let compareCount = JSON.parse(e.newValue)
      this.compareCount = compareCount
      console.log('compareCount', compareCount)
      this.$forceUpdate()
    });
    window.addEventListener('scroll', this.scrollBackTop); //监听滚动条
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollBackTop)

  }
}
</script>

<style lang='scss' scoped>
.compare {
  color: #444;
  text-align: left;
  .compare_title {
    margin-top: 30px;
  }
  .compare_list {
    padding: 20px 0;
  }
  table {
    width: 100%;
  }
  .table_title_td {
    border: 1px solid #ddd;
    width: 80px;
    padding: 8px;
    font-size: 12px;
  }
  .thead_title_td {
    width: 100%;
    border: 1px solid #ddd;
    padding: 8px;
  }

  .table_product_td {
    padding: 8px;
    border: 1px solid #ddd;
    font-size: 12px;
  }
  .product_img {
    text-align: center;
    > img {
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 100px;
      height: 100px;
      padding: 5px;
    }
  }
  .addCart {
    width: 100%;
    color: #fff;
    border-radius: 4px;
    background: linear-gradient(to bottom, #23a1d1, #1f90bb);
    border-color: #1f90bb #1f90bb #145e7a;
    padding: 7.5px 12px;
    text-align: center;
    margin-bottom: 8px;
    border: 1px solid #cccccc;
    cursor: pointer;
    &:hover {
      background: #1f90bb;
    }
  }
  .remove {
    color: #fff;
    width: 100%;
    border-radius: 4px;
    background: linear-gradient(to bottom, #ee5f5b, #bd362f);
    border-color: #bd362f #bd362f #802420;
    padding: 7.5px 12px;
    text-align: center;
    border: 1px solid #cccccc;
    cursor: pointer;
    &:hover {
      background: #bd362f;
    }
  }
}
</style>