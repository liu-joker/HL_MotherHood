<template>
  <div class="cart">
    <!-- <top></top> -->

    <div class="pc_title">
      <div class="pc_title_name">Wish List</div>
      <div></div>
    </div>

    <div class="cart_cont"
         v-if="goodsCart.length>0">
      <template>
        <el-table ref="singleTable"
                  :data="goodsCart"
                  highlight-current-row
                  border
                  :cell-style="{'text-align':'left'}"
                  :header-cell-style="{'text-align': 'center','color':'#000','font-size':'16px','font-weight':'600'}"
                  style="width: 100%">

          <el-table-column type="img"
                           label="Image"
                           width="150">
            <template slot-scope="scope">
              <img :src="scope.row.photo"
                   alt=""
                   style="width:120px;">
            </template>
          </el-table-column>
          <el-table-column property="name"
                           label="Product Name"
                           width="320">
          </el-table-column>

          <el-table-column property="200"
                           width=""
                           label="Stock">
            In Stock
          </el-table-column>
          <el-table-column property="price"
                           label="Price"
                           width="">
            <template slot-scope="scope">
              <span style="color:#ed9964;font-size:18px;">{{scope.row.price}}</span>
            </template>
          </el-table-column>
          <el-table-column property=""
                           label="Add to card"
                           width="">
            <template slot-scope="scope">
              <div class="cart_model cart_model_set">

                <div class=" cart_refresh"
                     @click="refresh(scope.row.id)">add to card</div>
                <!-- <div class="glyphicon glyphicon-remove-sign cart_cut"
                     @click="cut(scope.row)"></div> -->
              </div>
            </template>
          </el-table-column>
          <el-table-column property=""
                           label=""
                           width="80">
            <template slot-scope="scope">
              <div class="glyphicon glyphicon-remove cart_cut"
                   @click="cut(scope.row)"></div>
            </template>
          </el-table-column>

        </el-table>
      </template>

      <!-- <div class="bottom_btn">
        <div class="bot_btn "
             @click="toCheckout"> Continue</div>
      </div> -->
    </div>
    <div class="no_cart"
         v-else>Your wish list is empty!</div>
  </div>

</template>

<script>
import top from './top'
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
    let goodsCart = JSON.parse(sessionStorage.getItem('wish')) || []
    this.goodsCart = goodsCart

  },
  methods: {
    refresh (id) {
      this.$router.push('/details?id=' + id)
    },
    cut (item) {
      let items = item
      let goodsCart = this.goodsCart
      goodsCart.map((v, index) => {
        if (v.id == items.id) {
          goodsCart.splice(index, 1)
          sessionStorage.setItem('wish', JSON.stringify(goodsCart))
        }
      })
      items.type = 'cutWish'
      sessionStorage.setItem('showDialog', JSON.stringify(items))
      this.backTop()
    },
    getTotal () {
      let goodsCart = this.goodsCart
      let total = 0
      let allCount = 0
      goodsCart.map((v, index) => {
        let allPrice
        let price = v.price.split('$')[1]
        allCount = allCount + Number(v.count)
        allPrice = v.allPrice ? v.allPrice : price
        total = total + Number(allPrice)
      })
      this.total = total.toFixed(2)
      this.allCount = allCount
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
    toCheckout () {
      this.$router.push('/index')
    },
    toIndex () {
      this.$router.push('/index')
    },

  },
  mounted () {
    window.addEventListener('scroll', this.scrollBackTop); //监听滚动条
  },

  destroyed () {
    window.removeEventListener('scroll', this.scrollBackTop)

  }

}

</script>

<style lang='scss' scoped>
.cart {
  color: #667280;
  text-align: left;
  width: 100%;
  margin-top: 30px;
  padding: 0 50px;
  margin-bottom: 70px;
  .no_cart {
    padding: 20px 0 300px 0;
    text-align: left;
  }

  .pc_title {
    width: 100%;
    //  border-bottom:1px solid #ddd;
    padding-top: 15px;
    text-align: left;

    .pc_title_name {
      position: relative;
      color: #222;
      font-size: 30px;
      z-index: 0;
      display: inline-block;
      padding-bottom: 10px;
      font-weight: bold;
      font-weight: 100;
    }
  }

  .cart_next {
    font-size: 27px;
    padding: 10px 0;
    margin-top: 20px;
    color: #444;
  }

  .cart_text {
    padding: 0 0 10px 0;
    color: #666;
    font-size: 12px;
  }

  .show_next {
    display: flex;
    align-items: center;
    padding: 15px;

    position: relative;
  }
  .show_tetx {
    width: 20%;
  }

  .show_button {
    padding: 7px 18px 4px 18px;
    background: linear-gradient(to bottom, #23a1d1, #1f90bb);
    color: #fff;
    cursor: pointer;
    width: 150px;
    border-radius: 0 4px 4px 0;
    border-color: #1f90bb #1f90bb #145e7a;
  }

  .show_input {
    display: flex;
    flex: 1;
    /deep/ .el-input__inner {
      height: 34px;
      border-radius: 4px 0 0 4px;
      border-right: 0;
    }
    //   margin: 20px 0;

    .input_tetx {
      width: 180px;
    }
  }
  .cart_title {
    color: #000;
    font-size: 22px;
    font-weight: bolder;
    padding-bottom: 10px;
    text-align: left;
  }
  .cart_cont {
    .cart_cont_title,
    .cart_cont_box {
      display: flex;
    }
    /deep/ .el-collapse-item__header {
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-top: 5px;
      padding: 0 10px;
      color: #333;
      font-size: 16px;
    }
    /deep/ .el-collapse {
      border: none;
    }
    /deep/ .el-collapse-item__wrap {
      border: 1px solid #ddd;
      border-radius: 0 0 4px 4px;
      border-top: none;
    }

    .cart_cont_title {
      border-top: 2px solid #ccc;
      border-bottom: 2px solid #ccc;
      color: #333;
      background: #f7f7f7;
      font-size: 12px;
      font-weight: bolder;
      padding: 0 15px;
      text-align: left;
    }

    .cart_model {
      padding: 8px;
      text-align: left;

      &:nth-child(2) {
        width: 720px;
      }

      &:nth-child(4) {
        width: 200px;
      }

      &:nth-child(3) {
        width: 51px;
      }

      &:nth-child(5) {
        width: 71px;
      }
    }

    .cart_model_set {
      display: flex;
      width: 100%;

      .cart_refresh {
        padding: 10px 20px;
        background: $backgroundColor;
        color: #fff;
        cursor: pointer;
        &:hover {
          background: $fontBodyColor;
        }
      }
    }
    .cart_cut {
      &:hover {
        color: $backgroundColor;
      }
    }

    .cart_model_name {
      font-size: 13px;
      font-weight: bolder;
    }

    .cart_model_photo {
      width: 60px;
      padding: 8px;

      > img {
        width: 100%;
      }
    }
  }

  .cart_total {
    // width:100%;
    display: flex;
    justify-content: flex-end;
    padding: 30px 20px;

    .cart_total_cont {
      .table_td {
        width: 150px;
        border: 1px solid #ddd;
        padding: 8px;
        text-align: right;
        color: #666;
        font-size: 12px;
      }
      // width:400px;
      .cart_total_box {
        display: flex;
        // justify-content: space-between;
        // border-top:1px solid #ccc;
        padding: 5px 0;
        color: #ff7b7b;

        .total_title {
          font-weight: bolder;
          margin-right: 20px;
          text-align: right;
          width: 150px;
          color: #667280;
        }
      }
    }
  }

  .bottom_btn {
    // width:100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 15px 70px 15px;
    align-items: center;

    .bot_btn {
      // text-transform: uppercase;
      color: #fff;
      background: linear-gradient(to bottom, #23a1d1, #1f90bb);
      border-radius: 4px;
      padding: 7.5px 12px;
      font-size: 14px;
      cursor: pointer;
      border: 1px solid #cccccc;
      border-color: #1f90bb #1f90bb #145e7a;
      &:hover {
        background: #1f90bb;
      }
    }

    .bot_left {
      color: #777;
      cursor: pointer;
      background: linear-gradient(to bottom, #eeeeee, #dddddd);
      border-color: #dddddd #dddddd #b3b3b3 #b7b7b7;
      border-radius: 4px;
      &:hover {
        background: #dddddd;
      }
    }
  }

  .cart_model_set {
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
    /deep/ .el-input__inner {
      width: 100px;
      // text-align: center;
      // padding:0;
      height: 29px;
      // margin:0 0 -5px 0;
    }

    //   .cart_refresh {
    //     width: 30px;
    //     height: 30px;
    //     padding: 8px;
    //     background: #eee;
    //     border: 1px solid #ddd;
    //     margin-left: 5px;
    //   }
  }
  /deep/ .el-table--border,
  .el-table--group {
    border: none;
    &::after {
      border: none;
      width: 0;
    }
  }
  /deep/ .el-table--border,
  .el-table--border,
  .el-table__body-wrapper,
  .el-table--border.is-scrolling-left,
  .el-table__fixed {
    border-right: none;
    td,
    th {
      border-right: none;
    }
  }
}
</style>
