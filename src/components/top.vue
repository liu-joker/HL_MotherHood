<template>
  <div class="top ">
    <div class="row">
      <div class="col-md-8 col-xs-12">

      </div>
    </div>
    <div class="top_cont row">

      <div class="top_ico col-md-2 col-xs-12">
        <div class="top_msg">
          <div class="msg_log" @click="toHome"><img class="log_img"
                 src="../assets/image/login/login-logo.png"
                 alt=""></div>
        </div>
      </div>
      <div class="serch_tab col-md-6">
        <div class="class_search">
          <el-input v-model='search'
                    placeholder="SEARCH ...">
            <i slot="suffix"
               class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <div class="serch_tab_list">
          <span @click="toCategory(1)">Christmas</span>
          <span @click="toCategory(564,590)"> Headset</span>
          <!-- <span> IP Camera</span> -->
          <span @click="toCategory(564,5113)"> Watch</span>
          <!-- <span> Power Strip</span> -->

        </div>
      </div>

      <div class="col-md-4 col-xs-12 class_goods">
        <Top-Title @getShowcart='getShowcart'
                   @getShowSearch='getShowSearch'></Top-Title>
        <div class='class_items'
             @mouseenter="getShowcart(true)"
             @mouseleave="getShowcart(false)">
          <i class="el-icon-shopping-cart-1"></i>
          <div class="items_goods">{{allCount}} </div>
          <!-- <div class="items_goods">{{allCount}} item(s) - <span>${{total}}</span> </div> -->
          <div class="msg_cart"
               v-show='showCart'>
            <div class="show_cart"
                 ref='showCart'>
              <div class="empty"
                   v-if='cartLength==0'>You have no items in your shopping cart.</div>
              <div class="show_cart_list"
                   v-else>
                <div class="show_cart_box"
                     v-for='(item,index) in goodsCart'
                     :key='index'>
                  <div class="cart_img"><img :src="item.photo"
                         alt=""></div>
                  <div class="cart_name"
                       @click='toDetails(item.id)'>
                    <div class="cart_price"> <span>{{item.price}}</span></div>
                    <div class="pro_name">{{item.name}}</div>
                    <!-- <div class="cart_count">{{item.count}}&nbsp;X</div> -->
                    <div style="margin-top:20px;display:flex;">
                      <div style="margin-right:20px;cursor: pointer;"
                           @click="removeCart(item.id)">Remove</div>
                      <div>QTY:{{item.count}}</div>
                    </div>
                  </div>
                  <!-- <div class="cart_cut"><i @click="removeCart(item.id)"
                       class='glyphicon glyphicon-remove'></i></div> -->
                </div>
                <div class="cart_btn">
                  <div class="cart_btn_sub">
                    <div>Grand Total:</div>
                    <div>UC $ {{total}}</div>
                  </div>
                  <div class="cart_btn_box">
                    <div class="cart_min_btn "
                         @click="toCart">View My Cart </div>
                    <!-- <div class="cart_min_btn "
                         @click="toCheckout">Checkout</div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="row top_cont"
         style="padding-bottom:0;">
      <div class="top_tab col-md-6 col-xs-12">
        <div class="menu">
          <div class="homeTab"
               @mouseenter="select_tab(4)"
               @mouseleave="unselect_tab(4)"
              >
            <svg t="1654482835977"
                 class="icon"
                 viewBox="0 0 1024 1024"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="2175"
                 width="30"
                 height="30">
              <path d="M170.666667 298.666667h682.666666v42.666666H170.666667V298.666667z m0 426.666666h682.666666v42.666667H170.666667v-42.666667z m0-213.333333h682.666666v42.666667H170.666667v-42.666667z"
                    fill="#ffffff"
                    p-id="2176"></path>
            </svg>
            <span>GATEGORIES</span>
            <div class="show_menu_list"
                 v-show="showMenu">
              <div class="show_menu_tab" @click="toCategory(1)">
                <svg t="1654484380036"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="3221"
                     width="16"
                     height="16">
                  <path d="M752.8 143.2c3.2 0 6.3 1.3 8.5 3.5L955.6 341c5.5 5.5 5.5 14.3 0 19.8L864 452.5l-96-96V895H448v1H256V357.5l-96 96-91.6-91.6c-5.5-5.5-5.5-14.3 0-19.8L263 147.5c2.3-2.3 5.3-3.5 8.5-3.5H351c33.4 26.9 92.6 64 164.6 64 72.1 0 131.4-37.2 164.8-64.2l72.3-0.6h0.1z m0-64h-0.6l-83.8 0.7c-7.6 0.1-15 2.8-20.7 7.8-19.6 17-71.3 56.3-132.1 56.3-60.6 0-112.3-39.1-132-56.2-5.8-5.1-13.3-7.8-21-7.8h-91c-20.2 0-39.5 8-53.7 22.3L23.1 296.8c-30.5 30.5-30.5 79.8 0 110.3L128 512c8.8 8.8 20.4 13.3 32 13.3s23.2-4.4 32-13.3v416c0 17.7 14.3 32 32 32h288v-1h288c17.7 0 32-14.3 32-32V511c8.8 8.8 20.4 13.3 32 13.3s23.2-4.4 32-13.3l104.8-104.8c30.5-30.5 30.5-79.8 0-110.3L806.5 101.5c-14.2-14.2-33.6-22.3-53.7-22.3z"
                        p-id="3222"
                        fill="#8a8a8a"></path>
                </svg>
                Apparel
              </div>
              <div class="show_menu_tab" @click="toCategory(119)">
                <svg t="1654485812917"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="6221"
                     width="16"
                     height="16">
                  <path d="M924.698878 682.540118l-59.855226 0 0-27.77253 59.855226 0c4.244674 0 7.689123-3.444449 7.689123-7.674796l0-79.010495c0-26.660196-21.710464-48.383964-48.397267-48.383964L99.285772 519.698333c-4.230348 0-7.674796 3.444449-7.674796 7.67582l0 119.718639c0 4.230348 3.444449 7.674796 7.674796 7.674796l86.99126 0 0 27.77253-86.99126 0c-19.553335 0-35.447327-15.892969-35.447327-35.447327L63.838446 527.375176c0-19.541055 15.892969-35.447327 35.447327-35.447327l784.703939 0c41.996486 0 76.169797 34.172287 76.169797 76.155471l0 79.010495C960.159508 666.647149 944.253236 682.540118 924.698878 682.540118zM719.691761 654.768611 349.13826 654.768611l0 27.77253 370.553501 0L719.691761 654.768611zM734.119355 502.368642 585.768609 287.951201c-6.142907-9.005095-16.285918-14.374382-27.14729-14.374382L388.897799 273.576819c-10.006911 0-19.35072 4.488221-25.588795 12.271488L209.913359 477.17382c-18.795065 23.419386-18.795065 29.710672-18.795065 33.100886l27.77253 0c0 1.912559-0.461511 3.105734-0.461511 3.105734 1.017166-2.549056 7.296173-11.527544 13.153578-18.822694l153.409972-191.337793c0.935302-1.166569 2.38635-1.870604 3.904936-1.870604l169.722496 0c1.667989 0 3.226484 0.840134 4.230348 2.304486l148.419308 214.527958L734.119355 502.368642zM605.377202 329.119833 327.65804 329.119833l0 27.77253 277.719162 0L605.377202 329.119833zM336.296791 716.929346c17.072841-21.289885 23.419386-49.061392 17.398252-76.209706-7.377014-33.277918-33.616632-59.530838-66.880223-66.880223-33.874505-7.505951-68.737524 4.691859-90.055039 31.216979-17.072841 21.289885-23.405059 49.089022-17.383926 76.236312 7.377014 33.250288 33.629935 59.503209 66.8792 66.880223 6.712889 1.490957 13.534248 2.25025 20.273742 2.25025C293.784558 750.423181 319.22395 738.192625 336.296791 716.929346zM280.820292 600.961124c22.403243 4.935406 40.790008 23.350824 45.753043 45.779649 4.191462 18.875906-0.161682 38.132482-11.932774 52.804646-14.7264 18.36016-38.741349 26.767644-62.377676 21.506826-22.415522-4.963035-40.803311-23.350824-45.76737-45.779649-4.202719-18.903535 0.162706-38.132482 11.932774-52.831252 11.771091-14.672164 29.317723-23.080671 48.113811-23.080671C271.273868 599.35965 276.060895 599.875396 280.820292 600.961124zM864.977705 716.929346c17.073864-21.289885 23.419386-49.061392 17.412578-76.209706-7.377014-33.277918-33.629935-59.530838-66.893526-66.880223-33.805944-7.54586-68.738547 4.691859-90.055039 31.243585-17.073864 21.262256-23.419386 49.061392-17.398252 76.209706 7.377014 33.250288 33.629935 59.503209 66.893526 66.880223 6.712889 1.490957 13.533224 2.25025 20.273742 2.25025C822.466496 750.423181 847.892585 738.192625 864.977705 716.929346zM809.488927 600.961124c22.415522 4.935406 40.817638 23.350824 45.780673 45.753043 4.202719 18.903535-0.162706 38.159088-11.960403 52.831252-14.713097 18.36016-38.70144 26.796296-62.364373 21.506826-22.414499-4.963035-40.816614-23.350824-45.779649-45.779649-4.190439-18.875906 0.162706-38.132482 11.9471-52.804646 11.784394-14.69877 29.317723-23.107277 48.112788-23.107277C799.942503 599.35965 804.742832 599.875396 809.488927 600.961124z"
                        p-id="6222"
                        fill="#8a8a8a"></path>
                </svg>
                Car & Bicycle
              </div>
              <div class="show_menu_tab" @click="toCategory(250)">
                <svg t="1654486204662"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="11290"
                     width="16"
                     height="16">
                  <path d="M746.666667 192a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64v64h64a64 64 0 0 1 64 64v320a64 64 0 0 1-64 64H576.682667a95.445333 95.445333 0 0 0 9.813333-36.949333L586.666667 853.333333v-21.333333H810.666667V512h-64v0.341333h-170.666667l0.021333-22.976a96.426667 96.426667 0 0 0-41.386666-41.386666H576V384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64h170.666667z m-448-9.984a42.666667 42.666667 0 0 1 21.952 6.08l86.570666 51.946667A128 128 0 0 1 469.333333 349.802667V490.666667a64 64 0 0 1 64 64v277.333333a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64V554.666667a64 64 0 0 1 64-64V224.682667a42.666667 42.666667 0 0 1 42.666667-42.666667zM256 832h213.333333V554.88H256V832z m64-569.621333v228.266666h85.333333v-140.842666a64 64 0 0 0-31.082666-54.869334L320 262.378667zM682.666667 384h-42.666667v63.957333L682.666667 448V384z m64-128h-170.666667v64h170.666667v-64z"
                        p-id="11291"
                        fill="#8a8a8a"></path>
                </svg>
                Health & Beauty
              </div>
              <div class="show_menu_tab" @click="toCategory(564)">
                <svg t="1654486280102"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="12414"
                     width="16"
                     height="16">
                  <path d="M896 554.666667h-85.333333V426.666667a298.666667 298.666667 0 1 0-597.333334 0v128H128A85.426667 85.426667 0 0 0 42.666667 640v170.666667a85.426667 85.426667 0 0 0 85.333333 85.333333h106.666667a21.333333 21.333333 0 0 0 21.333333-21.333333V426.666667c0-141.16 114.84-256 256-256s256 114.84 256 256v448a21.333333 21.333333 0 0 0 21.333333 21.333333h106.666667a85.426667 85.426667 0 0 0 85.333333-85.333333V640a85.426667 85.426667 0 0 0-85.333333-85.333333z"
                        fill="#8a8a8a"
                        p-id="12415"></path>
                </svg>
                Consumer Electtonics
              </div>
              <!-- <div class="show_menu_tab">
                <svg t="1654486386835"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="13614"
                     width="16"
                     height="16">
                  <path d="M864 896H160c-52.8 0-96-43.2-96-96V608c0-52.8 43.2-96 96-96s96 43.2 96 96v128c0 17.6-14.4 32-32 32s-32-14.4-32-32v-128c0-17.6-14.4-32-32-32s-32 14.4-32 32v192c0 17.6 14.4 32 32 32h704c17.6 0 32-14.4 32-32V608c0-17.6-14.4-32-32-32s-32 14.4-32 32v128c0 17.6-14.4 32-32 32s-32-14.4-32-32v-128c0-52.8 43.2-96 96-96s96 43.2 96 96v192c0 52.8-43.2 96-96 96z"
                        p-id="13615"
                        fill="#8a8a8a"></path>
                  <path d="M224 960c-17.6 0-32-14.4-32-32v-32c0-17.6 14.4-32 32-32s32 14.4 32 32v32c0 17.6-14.4 32-32 32zM800 960c-17.6 0-32-14.4-32-32v-32c0-17.6 14.4-32 32-32s32 14.4 32 32v32c0 17.6-14.4 32-32 32zM864 544c-17.6 0-32-14.4-32-32v-64c0-158.4-129.6-288-288-288h-64c-158.4 0-288 129.6-288 288v64c0 17.6-14.4 32-32 32s-32-14.4-32-32v-64C128 254.4 286.4 96 480 96h64c193.6 0 352 158.4 352 352v64c0 17.6-14.4 32-32 32z"
                        p-id="13616"
                        fill="#8a8a8a"></path>
                </svg>
                Home & Decor
              </div>
              <div class="show_menu_tab">
                <svg t="1654486517471"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="15247"
                     width="16"
                     height="16">
                  <path d="M870.4 547.84c-5.802667 0-10.24-4.437333-10.24-10.24 0-186.026667-151.552-337.578667-337.578667-337.578667-186.026667 0-337.578667 151.552-337.578666 337.578667 0 5.802667-4.437333 10.24-10.24 10.24s-10.24-4.437333-10.24-10.24c0-197.290667 160.768-358.058667 358.058666-358.058667S880.64 340.309333 880.64 537.6c0 5.802667-4.437333 10.24-10.24 10.24z"
                        fill="#8a8a8a"
                        p-id="15248"></path>
                  <path d="M870.4 547.84H175.104c-5.802667 0-10.24-4.437333-10.24-10.24s4.437333-10.24 10.24-10.24H870.4c5.802667 0 10.24 4.437333 10.24 10.24s-4.437333 10.24-10.24 10.24z"
                        fill="#8a8a8a"
                        p-id="15249"></path>
                  <path d="M516.096 748.202667c-108.202667 0-195.925333-88.064-195.925333-195.925334 0-5.802667 4.437333-10.24 10.24-10.24s10.24 4.437333 10.24 10.24c0 96.938667 78.848 175.445333 175.445333 175.445334s175.445333-78.848 175.445333-175.445334c0-5.802667 4.437333-10.24 10.24-10.24s10.24 4.437333 10.24 10.24c0 107.861333-87.722667 195.925333-195.925333 195.925334zM522.922667 200.021333c-18.773333 0-33.792-15.36-33.792-33.792V94.890667c0-18.773333 15.36-33.792 33.792-33.792s33.792 15.36 33.792 33.792v70.997333c0 19.114667-15.36 34.133333-33.792 34.133333z m0-118.442666c-7.509333 0-13.312 6.144-13.312 13.312v70.997333c0 7.509333 6.144 13.312 13.312 13.312s13.312-6.144 13.312-13.312V94.890667c0-7.168-6.144-13.312-13.312-13.312zM230.4 771.754667c-3.413333 0-6.826667-1.706667-8.533333-4.778667-3.072-4.778667-1.706667-11.264 3.072-13.994667l70.997333-44.714666c4.778667-3.072 11.264-1.706667 13.994667 3.072 3.072 4.778667 1.706667 11.264-3.072 13.994666l-70.997334 44.714667c-1.706667 1.365333-3.754667 1.706667-5.461333 1.706667zM359.424 861.525333c-1.365333 0-3.072-0.341333-4.437333-1.024-5.12-2.389333-7.168-8.533333-4.778667-13.653333l29.013333-60.757333c2.389333-5.12 8.533333-7.168 13.653334-4.778667 5.12 2.389333 7.168 8.533333 4.778666 13.653333l-29.013333 60.757334c-1.706667 3.413333-5.461333 5.802667-9.216 5.802666zM522.922667 903.509333c-5.802667 0-10.24-4.437333-10.24-10.24v-72.362666c0-5.802667 4.437333-10.24 10.24-10.24s10.24 4.437333 10.24 10.24v72.362666c0 5.802667-4.778667 10.24-10.24 10.24zM673.109333 867.328c-3.413333 0-6.485333-1.706667-8.533333-4.437333l-44.714667-66.56c-3.072-4.778667-2.048-10.922667 2.730667-14.336 4.778667-3.072 10.922667-2.048 14.336 2.730666l44.714667 66.56c3.072 4.778667 2.048 10.922667-2.730667 14.336-2.048 1.024-4.096 1.706667-5.802667 1.706667zM808.618667 778.24c-2.048 0-3.754667-0.682667-5.802667-1.706667l-64.853333-43.349333c-4.778667-3.072-6.144-9.557333-2.730667-14.336 3.072-4.778667 9.557333-6.144 14.336-2.730667l64.853333 43.349334c4.778667 3.072 6.144 9.557333 2.730667 14.336-2.048 2.730667-5.12 4.437333-8.533333 4.437333z"
                        fill="#8a8a8a"
                        p-id="15250"></path>
                </svg>
                Lights & Lighting
              </div>
              <div class="show_menu_tab">
                <svg t="1654486606835"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="16367"
                     width="16"
                     height="16">
                  <path d="M512 63.791885c-247.13868 0-448.208115 201.069435-448.208115 448.208115s201.069435 448.208115 448.208115 448.208115 448.208115-201.069435 448.208115-448.208115S759.137657 63.791885 512 63.791885zM915.171386 504.09803 684.211177 504.09803c3.052522-112.563682 67.820642-218.192418 114.232694-275.153734C868.810498 299.984259 912.925229 402.790716 915.171386 504.09803zM525.500479 504.09803 525.500479 108.992343c100.284007 3.315512 173.231413 36.513612 238.857063 89.556689-50.630121 61.759599-121.94126 181.728948-124.974339 305.548998L525.500479 504.09803zM480.475006 504.09803l-101.877295 0c-2.987031-123.82005-73.766051-240.34802-124.253932-302.632575 62.623269-51.822272 147.33665-85.329411 226.131227-91.635023L480.475006 504.09803zM480.475006 549.123502l0 365.046067c-78.794577-6.305613-163.513074-39.066761-226.137367-90.892103 46.871517-57.81066 111.321388-151.356196 122.624828-274.15294L480.475006 549.124526zM525.500479 549.123502l115.517967 0c11.489682 122.796744 76.287477 219.680305 123.343189 277.069363-65.62565 53.045123-138.577149 85.498256-238.861156 88.813768L525.500479 549.123502zM222.293829 232.365208c46.186925 57.504692 108.48376 159.169139 111.475907 271.732821L108.828614 504.09803C111.038956 402.790716 153.85204 303.0859 222.293829 232.365208zM110.324688 549.123502l221.587748 0c-11.161201 111.540376-67.176982 191.155644-109.6227 244.0002C159.900803 728.656435 118.783337 649.40751 110.324688 549.123502zM798.447964 796.545638c-42.724057-52.435233-100.973716-135.880737-112.378463-247.421112l227.605811 0C905.065214 649.40751 862.688057 731.687468 798.447964 796.545638z"
                        p-id="16368"
                        fill="#8a8a8a"></path>
                </svg>
                Game & Entertainment
              </div>
              <div class="show_menu_tab">
                <svg t="1654486890984"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="17385"
                     width="16"
                     height="16">
                  <path d="M917.4 507c-27.8-98.4-66-189.8-79.3-214.7-16.8-31.4-39.9-55.5-68.7-71.5-29.8-16.6-66.7-25.1-109.6-25.1H364c-42.9 0-79.8 8.4-109.6 25.1-28.7 16-51.8 40.1-68.7 71.5-13.4 24.9-51.5 116.3-79.3 214.7-37.1 131.4-42.1 224.8-14.7 277.7 15.2 29.3 40.4 47 73.1 51.1 13.5 1.7 26 2.5 37.7 2.5 87.6 0 127.7-44.2 163.5-83.8 21.2-23.4 41.3-45.6 70.9-57.9h166.3c29.4 12.3 46.5 33.8 66.1 58.5 18 22.7 36.7 46.1 65.9 62.6 32.8 18.5 73.3 24.5 123.9 18.1 32.7-4.1 57.9-21.8 73.1-51.1 27.3-52.9 22.3-146.3-14.8-277.7z m-29.7 254.8c-7.7 14.8-18.4 22.4-34.9 24.4-11.4 1.4-21.8 2.1-31.3 2.1-61.9 0-85-29-113.1-64.4-22-27.6-46.9-59-91.7-75.8-2.8-1.1-5.8-1.6-8.8-1.6H432.1c-3 0-6 0.5-8.8 1.6-43.2 16.2-70.4 46.3-94.4 72.8-38.7 42.7-69.2 76.4-158 65.3-16.5-2.1-27.2-9.6-34.9-24.4-20.7-40.1-14.2-125.7 18.4-241.1 27.3-96.7 64.4-184.4 75.3-204.7 25.6-47.9 68.3-70.1 134.2-70.1h295.8c65.9 0 108.6 22.3 134.2 70.1 10.9 20.3 48 108 75.3 204.7 32.7 115.4 39.2 201 18.5 241.1z"
                        p-id="17386"
                        fill="#8a8a8a"></path>
                  <path d="M450 444.9h-70.3v-70.5c0-11-9-20-20-20s-20 9-20 20v70.5H270c-11 0-20 9-20 20s9 20 20 20h69.7v69.5c0 11 9 20 20 20s20-9 20-20v-69.5H450c11 0 20-9 20-20s-9-20-20-20z"
                        p-id="17387"
                        fill="#8a8a8a"></path>
                  <path d="M640.5 427m-41.9 0a41.9 41.9 0 1 0 83.8 0 41.9 41.9 0 1 0-83.8 0Z"
                        p-id="17388"
                        fill="#8a8a8a"></path>
                  <path d="M739.1 525.6m-41.9 0a41.9 41.9 0 1 0 83.8 0 41.9 41.9 0 1 0-83.8 0Z"
                        p-id="17389"
                        fill="#8a8a8a"></path>
                </svg>
                Bady & Kids & Toys
              </div>
              <div class="show_menu_tab">
                <svg t="1654487009141"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="19138"
                     width="16"
                     height="16">
                  <path d="M82.4 805.6c-8 0-16-1.6-24-4.8C13.6 781.6-4 707.2 6.4 579.2c8-100 32-204 51.2-248 40-94.4 149.6-138.4 244-97.6 94.4 40 138.4 149.6 97.6 244-3.2 8-12.8 12-20.8 8.8-8-3.2-12-12.8-8.8-20.8 33.6-77.6-3.2-168.8-80.8-201.6-77.6-33.6-168.8 3.2-201.6 80.8-17.6 40.8-40.8 141.6-48.8 237.6-8.8 105.6 4 176.8 32.8 188.8 40.8 17.6 144-72 239.2-208 4.8-7.2 15.2-8.8 22.4-4 7.2 4.8 8.8 15.2 4 22.4-28 40-161.6 224-254.4 224zM940.8 805.6c-92 0-224.8-182.4-252.8-221.6-4.8-7.2-3.2-17.6 4-22.4 7.2-4.8 17.6-3.2 22.4 4 96.8 136.8 196 223.2 237.6 205.6 68-28.8 24-336-16-428-33.6-77.6-124-114.4-201.6-80.8-77.6 33.6-113.6 124-80.8 202.4 3.2 8 0 17.6-8.8 20.8-8 3.2-17.6 0-20.8-8.8-40-94.4 4-203.2 97.6-244 94.4-40 203.2 4 244 97.6 33.6 79.2 103.2 424.8-1.6 469.6-6.4 4-14.4 5.6-23.2 5.6z"
                        p-id="19139"
                        fill="#8a8a8a"></path>
                  <path d="M359.2 600.8c-41.6 0-75.2-33.6-75.2-75.2s33.6-75.2 75.2-75.2 75.2 33.6 75.2 75.2-33.6 75.2-75.2 75.2z m0-118.4c-24 0-43.2 19.2-43.2 43.2 0 24 19.2 43.2 43.2 43.2 24 0 43.2-19.2 43.2-43.2 0-24-19.2-43.2-43.2-43.2zM668.8 600.8c-41.6 0-75.2-33.6-75.2-75.2s33.6-75.2 75.2-75.2 75.2 33.6 75.2 75.2-33.6 75.2-75.2 75.2z m0-118.4c-24 0-43.2 19.2-43.2 43.2 0 24 19.2 43.2 43.2 43.2 24 0 43.2-19.2 43.2-43.2 0-24-19.2-43.2-43.2-43.2zM552 364.8H472c-4.8 0-8-3.2-8-8s3.2-8 8-8h80c4.8 0 8 3.2 8 8s-4 8-8 8zM552 459.2H472c-4.8 0-8-3.2-8-8s3.2-8 8-8h80c4.8 0 8 3.2 8 8s-4 8-8 8zM306.4 395.2H136c-4.8 0-8-3.2-8-8s3.2-8 8-8h170.4c4.8 0 8 3.2 8 8s-4 8-8 8z"
                        p-id="19140"
                        fill="#8a8a8a"></path>
                  <path d="M220.8 480c-4.8 0-8-3.2-8-8V301.6c0-4.8 3.2-8 8-8s8 3.2 8 8V472c0 4.8-3.2 8-8 8zM609.6 541.6H418.4c-8.8 0-16-7.2-16-16 0-16.8-9.6-32-25.6-39.2-4-1.6-7.2-5.6-8.8-9.6-0.8-4.8 0-9.6 2.4-12.8 24.8-58.4 11.2-124.8-34.4-169.6-4.8-4.8-6.4-11.2-4-17.6 2.4-6.4 8-9.6 15.2-9.6h329.6c6.4 0 12 4 15.2 9.6 2.4 6.4 0.8 12.8-4 17.6-45.6 44.8-59.2 110.4-34.4 169.6l0.8 1.6c2.4 4 3.2 8 1.6 12.8-0.8 4-4 8-8 9.6-13.6 7.2-22.4 22.4-22.4 37.6 0 8.8-7.2 16-16 16z m-176.8-32h162.4c3.2-16 12.8-31.2 25.6-41.6-20.8-57.6-12.8-120 21.6-168.8H381.6c33.6 48 42.4 109.6 22.4 166.4 14.4 10.4 24.8 26.4 28.8 44zM799.2 352.8c-16 0-28.8-12.8-28.8-28.8s12.8-28.8 28.8-28.8 28.8 12.8 28.8 28.8c-0.8 16-13.6 28.8-28.8 28.8z m0-41.6c-7.2 0-12.8 5.6-12.8 12.8 0 7.2 5.6 12.8 12.8 12.8 7.2 0 12.8-5.6 12.8-12.8-0.8-7.2-6.4-12.8-12.8-12.8zM799.2 468.8c-16 0-28.8-12.8-28.8-28.8s12.8-28.8 28.8-28.8 28.8 12.8 28.8 28.8c-0.8 16-13.6 28.8-28.8 28.8z m0-41.6c-7.2 0-12.8 5.6-12.8 12.8 0 7.2 5.6 12.8 12.8 12.8 7.2 0 12.8-5.6 12.8-12.8-0.8-7.2-6.4-12.8-12.8-12.8zM856.8 410.4c-16 0-28.8-12.8-28.8-28.8s12.8-28.8 28.8-28.8 28.8 12.8 28.8 28.8-12.8 28.8-28.8 28.8z m0-40.8c-7.2 0-12.8 5.6-12.8 12.8 0 7.2 5.6 12.8 12.8 12.8 7.2 0 12.8-5.6 12.8-12.8 0-7.2-5.6-12.8-12.8-12.8zM740.8 410.4c-16 0-28.8-12.8-28.8-28.8s12.8-28.8 28.8-28.8 28.8 12.8 28.8 28.8-12.8 28.8-28.8 28.8z m0-40.8c-7.2 0-12.8 5.6-12.8 12.8 0 7.2 5.6 12.8 12.8 12.8 7.2 0 12.8-5.6 12.8-12.8 0-7.2-5.6-12.8-12.8-12.8z"
                        p-id="19141"
                        fill="#8a8a8a"></path>
                </svg>
                Cellphone Accessories
              </div> -->

            </div>
          </div>
          <div class="menu_tap"
               @mouseenter="select_tab(1)"
               @mouseleave="unselect_tab(1)"
               @click='toFlash(1)'>
            <span>Flash Deals</span>
          </div>
          <div class="menu_tap"
               @mouseenter="select_tab(2)"
               @mouseleave="unselect_tab(2)"
               @click='toFlash(2)'>
            <span>Daily Deals</span>
          </div>
          <div class="menu_tap"
               @mouseenter="select_tab(3)"
               @mouseleave="unselect_tab(3)"
               @click='toFlash(3)'>
            <span>Points Redeem</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import product from '../utils/product'
// import topTitle from './topTitle'
import TopTitle from './topTitle.vue'
export default {
  inject:['reload'],
  components: {
    TopTitle
  },
  data () {
    return {
      search: '',
      menu: false,
      hasMenu: false,
      showCart: false,
      cartLength: 0,
      total: 0,
      hoverTab: false,
      tabIndex: '',
      unTabIndex: '',
      leaveIndex: 0,
      options1: '',
      options2: '',
      options3: '',
      allCount: 0,
      goodsCart: [],
      showDialog: '',
      isCompare: false,
      isCart: false,
      isWish: false,
      homeTab: false,
      categoryTab: false,
      categoryTab_index: '',
      showCart: false,
      show_search: false,
      showMenu: false

    }
  },
  methods: {
    getOptions () {
      let options1 = product.data.one.slice(0, 4)
      let options2 = product.data.two.slice(0, 4)
      let options3 = product.data.three.slice(0, 4)
      this.options1 = options1
      this.options2 = options2
      this.options3 = options3

    },
    getShowcart (e) {
      this.showCart = e
    },
    getShowSearch (e) {
      this.show_search = e
    },
    select_tab (e) {
      this.tabIndex = e
      this.unTabIndex = ''
      if (e == 4) {
        this.showMenu = true
      }
    },
    unselect_tab (e) {
      this.tabIndex = ''
      this.unTabIndex = e
      if (e == 4) {
        this.showMenu = false
      }
    },
    toHome () {
      this.$router.push('/')
    },
    toCard () {
      this.$router.push('/card')
    },
    toDetails (id) {
      this.$router.push('/details?id=' + id)
    },
    toCompare () {
      this.$router.push('/compare')
    },
    toCategory (v,id) {
      let currentRouter = this.$route.path
      if(id){
        this.$router.push('/category?path=' + v+'&cateId='+id)
      }else{
         this.$router.push('/category?path=' + v)
      }
      this.reload()
      // if (currentRouter == '/category') { 
      //   this.$router.push('/category?path=' + v)
      //   location.reload()
      // } else {
      //   this.$router.push('/category?path=' + v)
      // }
    },
    toFlash (v) {
      if (v == 1) {
        this.$router.push('/flash')
      }
      if (v == 2) {
        this.$router.push('/daily')
      }
      if (v == 3) {
        this.$router.push('/points')
      }
    },
    getMenu () {
      this.menu = !this.menu
      this.hasMenu = !this.menu
      this.$emit('getMenu', this.menu)
    },
    inCart () {
      // this.showCart = true
      let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart'))
      this.goodsCart = goodsCart
    },
    removeCart (id) {
      let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart'))
      let that = this
      goodsCart.map((v, index) => {
        if (v.id == id) {
          if (v.id == id && goodsCart.lenght == 1) {
            sessionStorage.clear()
            this.goodsCart == []
            this.getTotal()
            that.$forceUpdate()
          } else {
            goodsCart.splice(index, 1)
            this.goodsCart = goodsCart
            this.getTotal()
            that.$forceUpdate()
          }
        }
      })
      sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
    },
    toCheckout () {
      this.showCart = false
      this.$router.push('/checkout')
    },
    toDetails (id) {
      this.$router.push('/details?id=' + id)
    },
    toCart () {
      this.showCart = false
      this.$router.push('/cart')
    },
    toLogin () {
      this.$router.push('/login')
    },
    toRegister () {
      this.$router.push('/register')
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
    // otherClose (e) {
    //   if (!this.$refs.showCart.contains(e.target)) {
    //     this.showCart = false
    //   } else {
    //     return
    //   }
    // }
  },
  created () {
    let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart')) || []
    this.goodsCart = goodsCart
    this.cartLength = this.goodsCart.length
    this.getTotal()
    this.getOptions()
  },
  mounted () {

    window.addEventListener("setItemEvent", (e) => {
      this.goodsCart = JSON.parse(e.newValue)
      this.cartLength = this.goodsCart.length
      this.showCart = true
      this.getTotal()
      this.$forceUpdate()
    });

    window.addEventListener("setDialogEvent", (e) => {
      let showDialog = JSON.parse(e.newValue)
      this.showDialog = showDialog
      if (showDialog.type == 'cart') {
        this.isCart = true
        this.isWish = false
        this.isCompare = false
      } else if (showDialog.type == 'compare') {
        this.isCompare = true
        this.isCart = false
        this.isWish = false
      } else if (showDialog.type == 'wish') {
        this.isWish = true
        this.isCart = false
        this.isCompare = false
      }
      this.$forceUpdate()
    });
    window.addEventListener('click', this.otherClose)
  },
  beforeDestroy () {
    /* 组件销毁的时候要移除侦听器 */
    window.removeEventListener('click', this.otherClose)
  },
  watch: {
    '$route' (to, from) {

      let name = to.name
      if (name == 'index') {
        this.homeTab = true
        this.categoryTab = false
      }
      else if (name == 'category') {
        this.categoryTab = true
        this.categoryTab_index = this.$route.query.path
        this.homeTab = false
      }
      else {
        this.categoryTab = false
        this.homeTab = false
      }

    }

  }
}
</script>

<style lang='scss' scoped>
.top {
  color: #aaa;
  width: 100%;
  padding: 0 30px;
  background: #222;
  /deep/ .el-input__inner {
    height: 40px;
    padding-right: 0;
    border-radius: 4px;
    overflow: hidden;
  }
  .class_goods {
    display: flex;
    justify-content: flex-end;
  }
  .class_items {
    // margin-left: 20px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
    position: relative;
    
    // display: table-cell;
    .el-icon-shopping-cart-1 {
      font-size: 28px;
    }
    // height: 36px;
    .items_goods {
      margin-left: 5px;
      font-size: 14px;
      margin-top: 10px;
      > span {
        font-weight: bold;
        
      }
    }
    // .tab_count {
    //   font-size: 16px;
    // }
    .msg_cart {
      font-size: 13px;
    }
    .show_cart {
      width: 470px;
      border: 1px solid #e5e5e5;
      position: absolute;
      right: 0;
      top: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #fff;
      z-index: 99999;
      .empty {
        padding: 25px 0;
      }
      .show_cart_list {
        overflow: auto;
        display: flex;
        flex-direction: column;
        flex: 1;
        .show_cart_box {
          padding: 0 25px;
          display: flex;
          font-size: 14px;
          margin-top: 20px;
          color: #333;
          .cart_img {
            width: 120px;
            height: 120px;
            border-radius: 3px;
            > img {
              width: 100px;
              height: 100px;
              display: block;
              padding: 5px;
            }
          }
          .cart_name {
            text-align: left;
            margin-left: 20px;
            .pro_name {
              text-align: left;
              line-height: 1;
              font-size: 14px;
              cursor: pointer;
              width: 50%;
              font-weight: 500;
              color: #333;
              height: 42px;
              overflow: hidden;
              width: 100%;

              // &:hover {
              //   // text-decoration: underline;
              //   color: #ff0000;
              // }
            }

            > p {
              font-size: 12px;
            }
          }
          .cart_count {
            padding: 0 10px;
            font-size: 12px;
          }
          .cart_price {
            font-size: 18px;
            color: #ff0000;
            padding-bottom: 10px;
            font-weight: bold;
            // > span {
            //   color: $backgroundColor;
            //   font-weight: bold;
            // }
          }
          .cart_cut {
            width: 30px;
            height: 30px;
            font-size: 12px;
            &:hover {
              color: rgb(230, 20, 70);
            }
          }
        }
        .cart_total {
          padding: 20px;
          display: flex;
          align-items: flex-end;
          font-size: 12px;
          flex-direction: column;
          .sub_total {
            color: #667280;
            font-weight: bold;
            > span {
              font-weight: 100;
            }
          }
        }
      }
      .cart_btn {
        padding: 25px;
        color: #333;
        border-top: 1px solid #e5e5e5;
        margin-top: 10px;
        text-align: center;
        .cart_btn_sub {
          display: flex;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          > div {
            &:last-child {
              color: #ff0000;
              margin-left: 10px;
            }
          }
        }

        .cart_min_btn {
          // padding: 10px 15px;
          cursor: pointer;
          display: inline-block;
          width: 100%;
          background-color: #f7a900;
          color: #ffffff;
          margin: 0 auto;
          margin-top: 20px;
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          font-weight: bold;
          transition: all 0.3s ease-in-out;
          &:last-child {
            &:hover {
              background: #222;
            }
          }
          &:first-child {
            // border: 1px solid #222;
            &:hover {
              background: rgb(247, 134, 0);
              // color: $fontBodyColor;
            }
          }
        }
      }
    }
  }

  .top_cont {
    max-width: 1200px;
    // display: flex;
    padding: 30px 0;
    // align-items: center;
    margin: 0 auto;
    .log_img {
      display: flex;
      justify-content: flex-start;
    }
    .serch_tab {
      .class_search {
        width: 500px;
      }
      /deep/ .el-input__suffix {
        background: #f7a900;
        color: #fff;
        width: 45px;
        margin-right: -5px;
        border-radius: 0 4px 4px 0;
      }
      .serch_tab_list {
        text-align: left;
        margin: 5px 0;
        > span {
          color: #aaa;
          font-size: 14px;
          margin-right: 15px;
          cursor: pointer;
        }
      }
    }
  }
  .top_tab {
    width: 100%;
    height: 50px;
    border-radius: 3px;
    font-weight: bold;
    box-sizing: border-box;
    position: relative;
    // margin-bottom: 20px;
    &::after {
      content: "";
      height: 50px;
      position: absolute;
      left: -100%;
      right: -100%;
      bottom: 0px;
      top: 0;
      background: #262626;
      border-top: 1px solid #313131;
    }
    .menu {
      position: absolute;
      left: 0;
      right: 0;
      background: #262626;
      border-top: 1px solid #313131;
      display: flex;
      font-size: 13px;
      color: #aaa;
      height: 49px;
      z-index: 999;
      // &::after {
      //   content: "";
      //   height: 50px;
      //   position: absolute;
      //   left: -100%;
      //   right: -100%;
      //   bottom: 0px;
      //   top: 0;
      //   background: #262626;
      //   border-top: 1px solid #313131;
      // }
      // padding-left: 10px;
      .homeTab {
        width: 240px;
        height: 50px;
        background: #f7a900;
        color: #fff;

        display: flex;
        justify-content: start;
        align-items: center;
        position: relative;
        > span {
          cursor: pointer;
          font-weight: 200;
          margin-left: 10px;
          font-size:18px;
        }
        > svg {
          margin-left: 20px;
        }
        .show_menu_list {
          position: absolute;
          left: 0;
          right: 0;
          top: 50px;
          border: 1px solid #ddd;
          color: #333;
          background: #fff;
          font-size: 16px;
          font-weight: 300;
          text-align: start;
          .show_menu_tab {
            padding: 5px 20px;

            cursor: pointer;
            margin: 5px 0;
            &:hover {
              background: #f2f2f2;
              color: #f7a900;
            }
            > svg {
              margin-right: 5px;
            }
          }
        }
      }
      .homeTab_calss {
        &::after {
          content: "";
          height: 2px;
          background: #222;
          position: absolute;
          bottom: 0px;
          left: 20px;
          width: 40%;
        }
      }
      .menu_tap {
        position: relative;
        text-align: center;
        line-height: 50px;
        > span {
          padding: 0 20px;

          cursor: pointer;
          display: inline-block;
          position: relative;
          height: 100%;
          font-size: 14px;
          font-weight: 200;
          &:hover {
            color: #f7a900;
            // &::after {
            //   content: "";
            //   height: 2px;
            //   background: $backgroundColor;
            //   position: absolute;
            //   left: 0;
            //   right: 0;
            //   bottom: -8px;
            //   z-index: 999;
            // }
          }
        }

        .tab_arrow {
          position: relative;

          &::after {
            position: absolute;
            bottom: -21px;
            right: 9px;
            display: inline-block;
            border-right: 9px solid transparent;
            border-bottom: 9px solid #ccc;
            border-left: 9px solid transparent;
            border-bottom-color: #ccc;
            z-index: 9990;
            content: "";
          }
          &::before {
            position: absolute;
            bottom: -21px;
            right: 10px;
            display: inline-block;
            border-right: 8px solid transparent;
            border-bottom: 8px solid #ffffff;
            border-left: 8px solid transparent;
            content: "";
            z-index: 9999;
          }
        }
      }

      .menu_home {
        margin-top: -1px;
        background: #677382;
        display: block;
        padding: 12px 20px 9px 21px;
        // width:45px;
        height: 45px;
        // box-sizing: border-box;
        border-radius: 3px 0 0 3px;
        font-size: 18px;
      }
      .menu_none {
        display: none;
        z-index: 9999;
      }
      .menu_hover {
        display: block;
        position: absolute;
        width: 100%;

        z-index: 9999;

        top: 44px;
        left: 0;

        background: #fff;
        overflow: hidden;
        .product_box {
          height: 375px;
          display: flex;
          justify-content: space-between;
          border: 1px solid #ccc;
          padding: 20px;
          background: #fff;
          margin-top: 20px;
          // margin-bottom:20px;
        }
        .menu_hover_prduct {
          width: 23%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #fff;

          .prduct_img {
            width: 100%;
            border: 1px solid #ccc;
            > img {
              width: 100%;
              height: auto;
            }
          }
          .prduct_name {
            font-size: 13px;
            color: #667280;
          }
          .prduct_price {
            color: #ff6b6c;
          }
        }
      }
    }
  }

  .show_dialog {
    text-align: left;
    font-size: 12px;
    padding: 8px 14px;
    background: #dff0d8;
    color: #3c763d;
    > span {
      cursor: pointer;
      color: #23a1d1;
      &:hover {
        color: #551a8b;
      }
    }
    .close {
      font-size: 12px;
    }
  }
  @keyframes move {
    0% {
      left: -200px;
    }
    100% {
      left: 0;
    }
  }
  @keyframes moveHidden {
    0% {
      left: 0px;
    }
    100% {
      left: -200px;
      box-shadow: none;
    }
  }

  /deep/.el-drawer__header {
    text-align: left;
    background: #faf9f8;
  }
  .search_show_box {
    .search_list {
      margin: 0 80px;
      text-align: left;
      font-size: 14px;
      .search_title {
        color: #767676;
        margin-bottom: 20px;
      }
      /deep/ .el-input__inner {
        border: none;
        border-bottom: 2px solid #767676;
        margin-bottom: 20px;
      }
      /deep/ .el-input__icon {
        font-size: 18px;
        color: #333;
      }
      .search_tab {
        margin-bottom: 10px;
        color: 222;
        // font-weight: bold;
        cursor: pointer;
        &:hover {
          color: #c32929;
        }
      }
    }
  }

  /deep/ .ttb {
    top: 150px;
  }
}
</style>