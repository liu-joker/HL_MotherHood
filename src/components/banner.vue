<template>
  <div class="banner row">
    <!-- <div class="swiper-container swiper-container1 hidden-xs-only"
         style='height:auto;margin-top:40px;'>
      <div class="swiper-wrapper ">
        <div class="swiper-slide"
             v-for="(item,index) in bannerOption_h"
             :key="index">
          <img class="banner_img "
               :src="item.banner"
               alt="">
        </div>
      </div>
    </div> -->
    <video poster="https://cdn.builder.io/api/v1/image/assets%2F7ae3ca1d16c540a9b95287c60667c2b1%2Fec21064571554cceacb1a9cd6f5fad4e"
           autoplay="true"
           loop=""
           class="builder-video css-1pien73"
           muted="true"
           playsinline="true">
      <source type="video/mp4"
              src="https://cdn.builder.io/o/assets%2F7ae3ca1d16c540a9b95287c60667c2b1%2Fe6739b552f2f4f5a84e7d791e6c2f96e%2Fcompressed?apiKey=7ae3ca1d16c540a9b95287c60667c2b1&amp;token=e6739b552f2f4f5a84e7d791e6c2f96e&amp;alt=media&amp;optimized=true">
    </video>
    <div class="css-11yff89"></div>

  </div>

  <!-- </div> -->
</template>
<script>

// import Swiper from "swiper"

import photo1 from '../assets/image/banner_h.jpg'
import photo2 from '../assets/image/banner_h.gif'
import photo3 from '../assets/image/banner_t.jpg'
import photo4 from '../assets/image/banner_t.gif'
export default {
  name: 'banner',
  //     components: {
  //         Swiper,
  //         SwiperSlide,
  //   },
  data () {
    return {
      bannerOption_h: [
        { banner: photo1, }, { banner: photo2 },
      ],
      bannerOption_t: [
        { banner: photo3, }, { banner: photo4 },
      ],
    };

  },
  created () {
  },
  mounted () {
    // this.initSwiper()
  },
  computed: {

  },
  methods: {
    initSwiper () {
      let that = this
      this.$nextTick(() => {
        new Swiper('.swiper-container1', {
          loop: true,
          autoplay: 3000,
          observer: true,
          observeParents: true,
          spaceBetween: 30,
          runCallbacks: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          preventClicks: false,
          preventClicksPropagation: false,
          paginationClickable: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          onInit (swiper) {


          },
          onClick: function (swiper, event) {
            let index = swiper.activeIndex
            if (event.target.className == 'banner_img') {
              // if (index == 1) {
              //   that.$router.push('/category?path=1&cateId=10569')
              // } else if (index == 2 || index == 4) {
              //   that.$router.push('/category?path=564&cateId=5113')
              // } else if (index == 3) {
              //   that.$router.push('/category?path=1')
              // }
            } else {
              return
            }

          }


        })
      })

    },
    toCategory (e) {
      console.log('e', e)
    }


  }
}
</script>

<style lang='scss' scoped>
.banner {
  width: 100%;
  margin-top: 60px;
  .builder-video {
    width: 100%;
    height: auto;
  }
  .swiper-no-swiping {
    // padding: 0 30px 0px 30px;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide {
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-button-prev {
      background: url("");
      font-size: 28px;
      color: #fff;
    }
    .swiper-button-next {
      background: url("");
      font-size: 28px;
      color: #fff;
    }
  }
  .banner_img {
    width: 100%;
    height: auto;
  }
  .ani {
    transition-timing-function: ease;
    transition-timing-function: ease-in;
    transition-timing-function: ease-out;
    transition-timing-function: ease-in-out;
    transition-timing-function: linear;
    transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
    transition-timing-function: step-start;
    transition-timing-function: step-end;
    transition-timing-function: steps(4, end);
    transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);
    transition-timing-function: inherit;
  }
  .glyphicon {
    position: absolute;
    top: 50%;
  }
}
</style>