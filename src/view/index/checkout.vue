<template>
  <div class="check_out">
    <div id="cv2wrap"
         tabindex="0"
         data-flashsalemode="false"
         data-confirmation="False"
         class="container-fluid custom-form-controls gle-modern-browser"
         data-direction="ltr"
         data-culture="en-US"
         data-chars="all"
         style="outline: currentcolor none medium;margin-top:51px;">

      <div id="cv2Body"
           data-conditionalconfirmation="false">

        <!-- #region Products Table-->

        <div class="boxWrapper">
          <div class="row sectionheader"
               id="productsHeader">

            <div class="col-xs-12 col-sm-7 col-md-7 generalhead"
                 tabindex="0"
                 aria-label="Order Summary"><span class="head-num">1.</span>Order Summary</div>
            <div class="col-xs-1 hidden-xs col-sm-1 col-md-1 header-qty"
                 tabindex="0">Quantity</div>
            <div class="col-xs-2 hidden-xs  col-sm-2 col-md-2"
                 tabindex="0">Price</div>
            <div class="col-xs-6 col-md-2 col-sm-2 subtotal hidden-xs"
                 tabindex="0">Total</div>
          </div>

          <div id="productContainer">
            <div class="row item"
                 v-for='(item,index) in goodsCart'
                 :key="index"
                 data-no-image="false"
                 data-id="41303350">
              <div tabindex="0"
                   role="img"
                   aria-label="Product picture for Essential Stretch Secret Fit Belly Maternity Leggings"
                   class="col-md-2 col-sm-2 col-xs-4  p-col product-img"
                   style="background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; opacity: 1;">
                <img class="lazyprodimage"
                     :data-original="item.image"
                     :src="item.image"
                     style="display: block;">
              </div>
              <div class="col-xs-8 valign-table p-col col-md-5 col-sm-5">
                <div class="valign-cell prod-description"
                     tabindex="0">
                  <div data-block="regular"
                       class="hidden-xs">
                    <div data-custom="false"
                         class="attr-row">
                      <div class="attr-name productName"
                           data-content="">{{item.title}}</div>
                    </div>
                    <div style="margin-top:10px"
                         data-custom="true"
                         class="attr-row">
                      <div class="attr-key"
                           data-resource="checkout.size">Size:</div>
                      <div class="attr-value"
                           data-content="">{{item.size}}</div>
                    </div>
                    <div class="GemLitecolor attr-row"
                         data-custom="true">
                      <div class="attr-key"
                           data-resource="checkout.color">Color:</div>
                      <div class="attr-value"
                           data-content="">{{item.color}}</div>
                    </div>
                  </div>

                  <div data-block="mobile"
                       class="hidden-lg hidden-md hidden-sm">
                    <div data-custom="false"
                         class="attr-row">
                      <div class="attr-name productName"
                           data-content="">{{item.title}}</div>
                    </div>
                    <div style="margin-top:10px"
                         data-custom="true"
                         class="attr-row">
                      <div class="attr-key"
                           data-resource="checkout.size">Size:</div>
                      <div class="attr-value"
                           data-content="">{{item.size}}</div>
                    </div>
                    <div class="GemLitecolor attr-row"
                         data-custom="true">
                      <div class="attr-key"
                           data-resource="checkout.color">Color:</div>
                      <div class="attr-value"
                           data-content="">{{item.color}}</div>
                    </div>
                    <div class="prod-summary-info attr-row">
                      <span data-resource="checkout.ProductQty"
                            class="qtyText">Quantity</span>:
                      <b data-custom-prop="Quantity"
                         class="qtyValue">{{item.count}}</b>
                      <div data-custom="false"
                           class="attr-row">
                        <div class="attr-key attr-total-key"
                             data-resource="checkout.ProductTotal">Total</div>
                        <div class="attr-value attr-total-value prod-price-mobile"
                             data-content="">$ {{item.allPrice}}</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-xs-2 valign-table p-col col-md-1 hidden-xs col-sm-1">
                <div class="valign-cell product-qty"
                     tabindex="0"
                     aria-label="10">{{item.count}}</div>
              </div>
              <div class="col-xs-2 valign-table p-col col-md-2 hidden-xs col-sm-2">
                <div class="valign-cell product-price"
                     tabindex="0"
                     aria-label="$ 17.00">$ {{(item.price/100).toFixed(2)}}</div>
              </div>
              <div class="col-xs-12 valign-table p-col col-md-2 col-sm-2 subtotal hidden-xs">
                <div class="valign-cell product-price">
                  <div class="hidden-xs"
                       tabindex="0">
                    <div class="discAfter">$ {{(Number(item.allPrice)/100).toFixed(2)}} </div>
                    <!-- <div class="prodDiscount"><span class="DiscountCap">Was:</span> <span><del>$ 340.00</del></span></div> -->
                    <div class="prodDiscount"><span class="DiscountCap">You Save:</span> <span class="discYouSave">$ {{(Number(item.allPrice)/100).toFixed(2)}}</span></div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div> <!-- #endregion -->
        <!-- #region Summary Totals-->
        <div class="row"
             id="minitotalsContainer">
          <div id="paypal-button-container"
               class="col-xs-12 col-md-0"
               style="display: block;">
          </div>
          <div id="amazonpay-button-container"
               class="col-xs-12 col-md-0"
               style="display: block;">
          </div>
          <div class="col-xs-0 col-md-5">&nbsp;</div>
          <div id="itemsTotal"
               style="width:100%">

            <div class="col-xs-6 col-md-1 minitotals-col-price"
                 tabindex="0"> $ {{(amount/100).toFixed(2)}} </div>
            <div class="col-xs-5 col-md-2 minitotals-col-caption"
                 tabindex="0">Items total</div>

          </div>

        </div>
        <!-- #endregion -->
        <form id="geCheckoutFrm"
              method="post"
              novalidate="novalidate">

          <div class="row"
               id="shipping-billing-container"
               data-characters-not-allowed-error="Unsupported characters were removed"
               data-only-english-characters-error="Unsupported characters were removed"
               data-special-characters-conversion-message="Special Characters are converted to Latin Characters"
               data-characters-not-supported-error="Please use English characters only">
            <!-- billing address -->
            <div class="col-md-6 col-xs-12">
              <div class="inner forminnerleft">
                <div class="row sectionheader">

                  <div class="col-xs-12 generalhead"
                       tabindex="0"
                       aria-label="Billing Address">
                    <span class="head-num">2.</span>Billing Address
                  </div>
                </div>
                <div id="BillingAddressFormContainer"
                     class="form-horizontal row box-inner">
                  <div class="col-xs-12 form-header">
                    <div class="row">
                      <div class="col-xs-8">
                        Please enter your billing address
                      </div>
                      <div class="col-xs-4 req-fields">
                        <div data-show="true"
                             class="glyphicon glyphicon-star astrsk"></div> Required Field
                      </div>
                    </div>
                  </div>
                  <!-- firstName -->
                  <div class="form-group has-feedback ">
                    <label for="BillingFirstName"
                           class="col-sm-4 col-xs-12 control-label fcap">
                      First Name
                      <div data-show="true"
                           class="glyphicon glyphicon-star astrsk"></div>
                    </label>

                    <div class="col-sm-8 col-xs-12 fval">
                      <input autocomplete="given-name"
                             class="form-control input-validation-error"
                             data-val="true"
                             data-val-countryaddressvalidation=""
                             data-val-countryaddressvalidation-countryaddressvalidationpropname=""
                             data-val-required="Billing First Name is required"
                             id="CheckoutData_BillingFirstName"
                             maxlength="40"
                             name="CheckoutData.BillingFirstName"
                             placeholder="First Name"
                             type="text"
                             v-model="firstName"
                             aria-required="true">

                    </div>
                  </div>
                  <!-- lastName -->
                  <div class="form-group has-feedback">
                    <label for="BillingLastName"
                           class="col-sm-4 col-xs-12 control-label fcap">Last Name<div data-show="true"
                           class="glyphicon glyphicon-star astrsk"></div></label>
                    <div class="col-sm-8 col-xs-12 fval">
                      <input autocomplete="family-name"
                             class="form-control input-validation-error"
                             data-val="true"
                             data-val-countryaddressvalidation=""
                             data-val-countryaddressvalidation-countryaddressvalidationpropname=""
                             data-val-required="Billing Last Name is required"
                             id="CheckoutData_BillingLastName"
                             maxlength="40"
                             name="CheckoutData.BillingLastName"
                             placeholder="Last Name"
                             type="text"
                             v-model="lastName"
                             aria-required="true">

                    </div>
                  </div>
                  <!-- email -->
                  <div class="form-group has-feedback">
                    <label for="Email"
                           class="col-sm-4 col-xs-12 control-label fcap">Email<div data-show="true"
                           class="glyphicon glyphicon-star astrsk"></div></label>
                    <div class="col-sm-8 col-xs-12 fval">
                      <input class="form-control input-validation-error"
                             data-charval="False"
                             data-val="true"
                             data-val-countryaddressvalidation="The email address is not valid"
                             data-val-countryaddressvalidation-countryaddressvalidationpropname="@(?!(aol\.cm|a0l\.com|aol\.co|gmail\.cm|gmail\.con|gmail\.co|gmal\.com|g-mail\.com|gmaill\.com|gmail\.co\.uk|googlemail\.co\.uk|gmail\.com\.au|gmail\.ca|googlemaile\.com|googlmail\.com|gmail\.fr|gmail\.com\.mx|gmail\.nl|hotmail\.cm|hoymail\.com|homail\.com|hotmai\.com|hotmail\.co|hotmal\.com|hotmil\.com|hotmail\.con|hotmain\.com|hatmail\.com|hotmial\.co\.uk|hotmall\.co\.uk|hotmaiil\.co\.uk|googlmail\.com|yahoo\.cm|yahoo\.co|yahoo\.con|yaho\.com|yaoo\.com|yahooo\.com|yhaoo\.com|ayhoo\.com|dyahoo\.com|ahoo\.com|yhoo\.com|yahool\.com|yhoo\.com|yahoomail\.com|tyahoo\.com|yahool\.com|yahoo\.net|yshoo\.com|myshoo\.com|yahho\.com|yaqhoo\.com|ayahoo\.com|yah00\.com|yahho\.com|yohoo\.com|olyahoo\.com|yahaoo\.com|yahioo\.com|yahooc\.com|yahopo\.com|yajoo\.com|yhool\.com|yyahoo\.com|yayoo\.com|ysahoo\.com|ywhoo\.com|yaghoo\.com|hahoo\.com|qyahoo\.com|yahoo0\.com|yanoo\.com|yaho0o\.com|yahoom\.com|youhoo\.com|ytahoo\.com|69yahoo\.com|yahoo\.org|yahoop\.com|yhahoo\.com|yzhoo\.com|iyahoo\.com|y7ahoo\.com|yaboo\.com|yajhoo\.com|yaool\.com|ydhoo\.com|51yahoo\.com|yafoo\.com|yahgoo\.com|yahoord\.com|yhaooo\.com|yhoo\.net|yuhoo\.com|ovi\.com|netcape\.net|symaptico\.ca|vidotron\.ca)$)"
                             data-val-regex="Email not valid"
                             data-val-regex-pattern="^(?!\.)(?!.*?\.\.)(?!.*\.$)([a-zA-Z0-9_\-\.\=\#\~!\!\$\&amp;\'\+\|+\{+\}]*)([a-zA-Z0-9_\-\=\#\~!\!\$\&amp;\'\+\|+\{+\}]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,3})(\]?)$"
                             data-val-required="Email is required"
                             id="CheckoutData_Email"
                             name="CheckoutData.Email"
                             placeholder="Email"
                             type="text"
                             v-model="email"
                             aria-required="true">

                    </div>
                  </div>
                  <!-- country -->
                  <div id="billingCountryRow"
                       class="form-group has-feedback">
                    <label for="BillingCountryID"
                           class="col-sm-4 col-xs-12 control-label fcap">Country<div data-show="true"
                           class="glyphicon glyphicon-star astrsk"></div></label>
                    <div class="col-sm-8 col-xs-12 fval">
                      <div class="FSelect">
                        <div class="arrow"></div>
                        <div class="FCurValue">{{country?country:'Please select'}}</div>
                        <select class="form-control"
                                v-model="country"
                                aria-placeholder="select"
                                id="BillingCountryID"
                                name="CheckoutData.BillingCountryID">
                          <option :value="v.name"
                                  @click="getCountry(v)"
                                  v-for="(v,i) in optionCountry"
                                  :key="i">{{v.name}}</option>
                        </select>
                      </div>
                      <span id="billingSelectorMessageContainer"></span>
                    </div>
                  </div>
                  <!-- regio -->
                  <div class="form-group has-feedback BillingCityRegionWrp ">

                    <label for="BillingCityRegionID"
                           class="col-sm-4 col-xs-12 control-label fcap">Region<div data-show="true"
                           class="glyphicon glyphicon-star astrsk"></div></label>
                    <div class="col-sm-8 col-xs-12 fval">
                      <div class="FSelect">
                        <div class="arrow"></div>
                        <div class="FCurValue">{{Region?Region:'Please select'}}</div>
                        <select aria-label="Region"
                                class="form-control"
                                v-model="Region"
                                id="BillingCityRegionID"
                                name="CheckoutData.BillingCityRegionID"
                                aria-required="true"
                                data-rendered="true"
                                data-combo="true">
                          <option></option>
                          <option :value="c.name"
                                  v-for="(c,index) in optionRegion"
                                  :key="index">{{c.name}}</option>
                        </select>

                      </div>
                    </div>
                  </div>
                  <!-- city -->
                  <div class="form-group has-feedback ">
                    <label for="BillingCity"
                           class="col-sm-4 col-xs-12 control-label fcap">City / Suburb<div data-show="true"
                           class="glyphicon glyphicon-star astrsk"></div></label>
                    <div class="col-sm-8 col-xs-12 fval">
                      <input class="form-control ui-autocomplete-input input-validation-error"
                             data-val="true"
                             data-val-countryaddressvalidation="The city name is not valid"
                             data-val-countryaddressvalidation-countryaddressvalidationpropname="^(?!([aA][pP][oO]|[fF][pP][oO]|[fF][pP][oO]\s[aA][pP])$).*$"
                             data-val-requiredcity="Billing City / Suburb is required"
                             data-val-requiredcity-cityrequiredpropname=""
                             id="BillingCity"
                             maxlength="35"
                             name="CheckoutData.BillingCity"
                             placeholder="City / Suburb"
                             type="text"
                             v-model="city"
                             aria-required="true"
                             data-prev-val="">
                      <!-- <span class="glyphicon glyphicon-remove form-control-feedback"
                            aria-hidden="true"></span>
                      <span role="status"
                            aria-live="polite"
                            class="ui-helper-hidden-accessible"></span> -->
                    </div>
                  </div>
                  <!-- zip -->
                  <div class="form-group has-feedback">
                    <label for="BillingZIP"
                           class="col-sm-4 col-xs-12 control-label fcap">Zip / Postcode<div data-show="true"
                           class="glyphicon glyphicon-star astrsk"></div></label>
                    <div class="col-sm-8 col-xs-12 fval">
                      <input aria-label="Zip / Postcode"
                             class="form-control dynamic-textbox input-validation-error"
                             data-val="true"
                             data-val-countryaddressvalidation="Please input a post code of 6 digits only and no symbols"
                             data-val-countryaddressvalidation-countryaddressvalidationpropname="^\d{6}$"
                             data-val-requiredzip="Billing Zip / Postcode is required"
                             data-val-requiredzip-ziprequiredpropname=""
                             data-val-unsupportedcharacters="Please use English characters only"
                             data-val-unsupportedcharacters-unsupportedcharacterspattern="^[A-Za-z0-9,&quot;&quot;'`\s@+&amp;%$#\*\(\)\[\]._\-\s\\/]*$"
                             id="BillingZIP"
                             maxlength="10"
                             name="CheckoutData.BillingZIP"
                             placeholder="zipCode"
                             type="text"
                             v-model="code"
                             aria-required="true"
                             data-prev-val="">
                      <!-- <span class="glyphicon glyphicon-remove form-control-feedback"
                            aria-hidden="true"></span> -->
                      <span id="billingZipCustomMessageContainer">
                      </span>
                    </div>
                  </div>
                  <!-- address1 -->
                  <div class="form-group has-feedback ">
                    <label for="BillingAddress1"
                           class="col-sm-4 col-xs-12 control-label fcap">Address Line 1<div data-show="true"
                           class="glyphicon glyphicon-star astrsk"></div></label>
                    <div class="col-sm-8 col-xs-12 fval">
                      <input class="form-control input-validation-error"
                             data-length-error="You’ve reached the maximum limit for Address Line 1 field. Please use Address Line 2 if you need more space"
                             data-val="true"
                             data-val-countryaddressvalidation=""
                             data-val-countryaddressvalidation-countryaddressvalidationpropname=""
                             data-val-poboxnotallowed="PO box address is not allowed on this shipping method"
                             data-val-required="Billing Address Line 1 is required"
                             id="CheckoutData_BillingAddress1"
                             maxlength="35"
                             name="CheckoutData.BillingAddress1"
                             placeholder="Address Line 1"
                             type="text"
                             v-model="address1"
                             aria-required="true">
                      <!-- <span class="glyphicon glyphicon-remove form-control-feedback"
                            aria-hidden="true"></span> -->
                    </div>
                  </div>
                  <!-- address2 -->
                  <div class="form-group has-feedback ">
                    <label for="BillingAddress2"
                           class="col-sm-4 col-xs-12 control-label fcap">Address Line 2</label>
                    <div class="col-sm-8 col-xs-12 fval">
                      <input class="form-control"
                             data-val="true"
                             data-val-countryaddressvalidation=""
                             data-val-countryaddressvalidation-countryaddressvalidationpropname=""
                             data-val-not-required="True"
                             data-val-poboxnotallowed="PO box address is not allowed on this shipping method"
                             id="CheckoutData_BillingAddress2"
                             maxlength="35"
                             name="CheckoutData.BillingAddress2"
                             placeholder="Address Line 2"
                             type="text"
                             v-model="address2">
                      <!-- <span class="glyphicon glyphicon-ok form-control-feedback"
                            aria-hidden="true"></span> -->
                    </div>
                  </div>
                  <!-- phone -->
                  <div class="form-group has-feedback ">
                    <label for="BillingPhone"
                           class="col-sm-4 col-xs-12 control-label fcap">Mobile Phone<div data-show="true"
                           class="glyphicon glyphicon-star astrsk"></div></label>
                    <div class="col-sm-8 col-xs-12 fval">
                      <input class="form-control input-validation-error"
                             data-charval="False"
                             data-val="true"
                             data-val-countryaddressvalidation=""
                             data-val-countryaddressvalidation-countryaddressvalidationpropname=""
                             data-val-regex="Only numbers are allowed in this field"
                             data-val-regex-pattern="^[0-9-/(/)/+ ]*$"
                             data-val-required="Shipping Mobile Phone is required"
                             id="CheckoutData_BillingPhone"
                             maxlength="15"
                             name="CheckoutData.BillingPhone"
                             placeholder="Mobile Phone"
                             type="tel"
                             v-model="phone"
                             aria-required="true">
                      <!-- <span class="glyphicon glyphicon-remove form-control-feedback"
                            aria-hidden="true"></span> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- deliver address -->
            <div class="col-md-6 col-xs-12 "
                 id="deliveryBox">
              <div class="inner forminnerright">
                <div class="row sectionheader"
                     aria-label="Delivery Address">
                  <div class="col-xs-12 generalhead shipping"><span class="head-num">3.</span> Delivery Address</div>
                </div>
                <div class="form-horizontal row box-inner">

                  <div class="form-group form-header">
                    <label class="fcap"
                           id="fcapLabel"
                           tabindex="0">
                      Please select or add a delivery address
                    </label>
                  </div>

                  <div id="addressRadiosContainer"
                       aria-labelledby="fcapLabel">
                    <fieldset role="radiogroup"
                              aria-label="Delivery Address">
                      <legend>Delivery Address</legend>
                      <div class="radio radio-box"
                           @click="delivery_flag = false">
                        <input aria-label="Default (same as billing address)"
                               checked="checked"
                               class="custom-radio-input"
                               data-val="true"
                               data-val-required="The ShippingType field is required."
                               id="shippingDefault"
                               name="CheckoutData.ShippingType"
                               role="radio"
                               tabindex="0"
                               type="radio"
                               value="ShippingSameAsBilling"
                               aria-required="true">

                        <label class="custom-radio-label"
                               for="shippingDefault">Default (same as billing address)</label>
                      </div>
                      <div class="radio  radio-box radio-box-checked"
                           @click="delivery_flag = true">
                        <input aria-label="Add an alternative delivery address"
                               class="custom-radio-input"
                               id="newShipping"
                               name="CheckoutData.ShippingType"
                               role="radio"
                               tabindex="0"
                               type="radio"
                               value="NewShippingAddress">
                        <label class="custom-radio-label"
                               for="newShipping">Add an alternative delivery address</label>
                      </div>
                    </fieldset>
                  </div>

                  <div id="shippingAddressWrapper"
                       v-show="delivery_flag"
                       style="display: block;">
                    <!-- firstName -->
                    <div class="form-group has-feedback">
                      <label for="ShippingFirstName"
                             class="col-sm-4 col-xs-12 control-label fcap">First Name<div data-show="true"
                             class="glyphicon glyphicon-star astrsk"></div></label>
                      <div class="col-sm-8 col-xs-12 fval">
                        <input autocomplete="given-name"
                               class="form-control"
                               data-val="true"
                               data-val-billingvalidation="Shipping First Name is required"
                               data-val-billingvalidation-ispropertymanadatory="false"
                               data-val-countryaddressvalidation=""
                               data-val-countryaddressvalidation-countryaddressvalidationpropname=""
                               data-val-unsupportedcharacters="Please use English characters only"
                               data-val-unsupportedcharacters-unsupportedcharacterspattern="^[A-Za-z0-9,&quot;&quot;'`\s@+&amp;%$#\*\(\)\[\]._\-\s\\/]*$"
                               id="CheckoutData_ShippingFirstName"
                               maxlength="40"
                               name="CheckoutData.ShippingFirstName"
                               placeholder="First Name"
                               type="text"
                               v-model="firstName2"
                               aria-required="true">
                      </div>
                    </div>
                    <!-- lastName -->
                    <div class="form-group has-feedback">
                      <label for="ShippingLastName"
                             class="col-sm-4 col-xs-12 control-label fcap">Last Name<div data-show="true"
                             class="glyphicon glyphicon-star astrsk"></div></label>
                      <div class="col-sm-8 col-xs-12 fval">
                        <input autocomplete="family-name"
                               class="form-control"
                               data-val="true"
                               data-val-billingvalidation="Shipping Last Name is required"
                               data-val-billingvalidation-ispropertymanadatory="false"
                               data-val-countryaddressvalidation=""
                               data-val-countryaddressvalidation-countryaddressvalidationpropname=""
                               data-val-unsupportedcharacters="Please use English characters only"
                               data-val-unsupportedcharacters-unsupportedcharacterspattern="^[A-Za-z0-9,&quot;&quot;'`\s@+&amp;%$#\*\(\)\[\]._\-\s\\/]*$"
                               id="CheckoutData_ShippingLastName"
                               maxlength="40"
                               name="CheckoutData.ShippingLastName"
                               placeholder="Last Name"
                               type="text"
                               v-model="lastName2"
                               aria-required="true">
                      </div>
                    </div>

                    <!-- country -->
                    <div id="billingCountryRow"
                         class="form-group has-feedback">
                      <label for="BillingCountryID"
                             class="col-sm-4 col-xs-12 control-label fcap">Country<div data-show="true"
                             class="glyphicon glyphicon-star astrsk"></div></label>
                      <div class="col-sm-8 col-xs-12 fval">
                        <div class="FSelect">
                          <div class="arrow"></div>
                          <div class="FCurValue">{{country2?country2:'Please select'}}</div>
                          <select class="form-control"
                                  v-model="country2"
                                  aria-placeholder="select"
                                  id="BillingCountryID"
                                  name="CheckoutData.BillingCountryID">
                            <option :value="v.name"
                                    @click="getCountry2(v)"
                                    v-for="(v,i) in optionCountry2"
                                    :key="i">{{v.name}}</option>
                          </select>
                        </div>
                        <span id="billingSelectorMessageContainer"></span>
                      </div>
                    </div>
                    <!-- regio -->
                    <div class="form-group has-feedback BillingCityRegionWrp ">

                      <label for="BillingCityRegionID"
                             class="col-sm-4 col-xs-12 control-label fcap">Region<div data-show="true"
                             class="glyphicon glyphicon-star astrsk"></div></label>
                      <div class="col-sm-8 col-xs-12 fval">
                        <div class="FSelect">
                          <div class="arrow"></div>
                          <div class="FCurValue">{{Region2?Region2:'Please select'}}</div>
                          <select aria-label="Region"
                                  class="form-control"
                                  v-model="Region2"
                                  id="BillingCityRegionID"
                                  name="CheckoutData.BillingCityRegionID"
                                  aria-required="true"
                                  data-rendered="true"
                                  data-combo="true">
                            <option></option>
                            <option :value="c.name"
                                    v-for="(c,index) in optionRegion2"
                                    :key="index">{{c.name}}</option>
                          </select>

                        </div>
                      </div>
                    </div>
                    <!-- city -->
                    <div class="form-group has-feedback ">
                      <label for="BillingCity"
                             class="col-sm-4 col-xs-12 control-label fcap">City / Suburb<div data-show="true"
                             class="glyphicon glyphicon-star astrsk"></div></label>
                      <div class="col-sm-8 col-xs-12 fval">
                        <input class="form-control ui-autocomplete-input input-validation-error"
                               data-val="true"
                               data-val-countryaddressvalidation="The city name is not valid"
                               data-val-countryaddressvalidation-countryaddressvalidationpropname="^(?!([aA][pP][oO]|[fF][pP][oO]|[fF][pP][oO]\s[aA][pP])$).*$"
                               data-val-requiredcity="Billing City / Suburb is required"
                               data-val-requiredcity-cityrequiredpropname=""
                               id="BillingCity"
                               maxlength="35"
                               name="CheckoutData.BillingCity"
                               placeholder="City / Suburb"
                               type="text"
                               v-model="city2"
                               aria-required="true"
                               data-prev-val="">
                        <!-- <span class="glyphicon glyphicon-remove form-control-feedback"
                              aria-hidden="true"></span>
                        <span role="status"
                              aria-live="polite"
                              class="ui-helper-hidden-accessible"></span> -->
                      </div>
                    </div>
                    <!-- zip -->
                    <div class="form-group has-feedback">
                      <label for="BillingZIP"
                             class="col-sm-4 col-xs-12 control-label fcap">Zip / Postcode<div data-show="true"
                             class="glyphicon glyphicon-star astrsk"></div></label>
                      <div class="col-sm-8 col-xs-12 fval">
                        <input aria-label="Zip / Postcode"
                               class="form-control dynamic-textbox input-validation-error"
                               data-val="true"
                               data-val-countryaddressvalidation="Please input a post code of 6 digits only and no symbols"
                               data-val-countryaddressvalidation-countryaddressvalidationpropname="^\d{6}$"
                               data-val-requiredzip="Billing Zip / Postcode is required"
                               data-val-requiredzip-ziprequiredpropname=""
                               data-val-unsupportedcharacters="Please use English characters only"
                               data-val-unsupportedcharacters-unsupportedcharacterspattern="^[A-Za-z0-9,&quot;&quot;'`\s@+&amp;%$#\*\(\)\[\]._\-\s\\/]*$"
                               id="BillingZIP"
                               maxlength="10"
                               name="CheckoutData.BillingZIP"
                               placeholder="zipCode"
                               type="text"
                               v-model="code2"
                               aria-required="true"
                               data-prev-val="">
                        <!-- <span class="glyphicon glyphicon-remove form-control-feedback"
                              aria-hidden="true"></span> -->
                        <span id="billingZipCustomMessageContainer">
                        </span>
                      </div>
                    </div>
                    <!-- address1 -->
                    <div class="form-group has-feedback ">
                      <label for="BillingAddress1"
                             class="col-sm-4 col-xs-12 control-label fcap">Address Line 1<div data-show="true"
                             class="glyphicon glyphicon-star astrsk"></div></label>
                      <div class="col-sm-8 col-xs-12 fval">
                        <input class="form-control input-validation-error"
                               data-length-error="You’ve reached the maximum limit for Address Line 1 field. Please use Address Line 2 if you need more space"
                               data-val="true"
                               data-val-countryaddressvalidation=""
                               data-val-countryaddressvalidation-countryaddressvalidationpropname=""
                               data-val-poboxnotallowed="PO box address is not allowed on this shipping method"
                               data-val-required="Billing Address Line 1 is required"
                               id="CheckoutData_BillingAddress1"
                               maxlength="35"
                               name="CheckoutData.BillingAddress1"
                               placeholder="Address Line 1"
                               type="text"
                               v-model="newAddress1"
                               aria-required="true">
                        <!-- <span class="glyphicon glyphicon-remove form-control-feedback"
                              aria-hidden="true"></span> -->
                      </div>
                    </div>
                    <!-- address2 -->
                    <div class="form-group has-feedback ">
                      <label for="BillingAddress2"
                             class="col-sm-4 col-xs-12 control-label fcap">Address Line 2</label>
                      <div class="col-sm-8 col-xs-12 fval">
                        <input class="form-control"
                               data-val="true"
                               data-val-countryaddressvalidation=""
                               data-val-countryaddressvalidation-countryaddressvalidationpropname=""
                               data-val-not-required="True"
                               data-val-poboxnotallowed="PO box address is not allowed on this shipping method"
                               id="CheckoutData_BillingAddress2"
                               maxlength="35"
                               name="CheckoutData.BillingAddress2"
                               placeholder="Address Line 2"
                               type="text"
                               v-model="newAddress2">
                        <!-- <span class="glyphicon glyphicon-ok form-control-feedback"
                              aria-hidden="true"></span> -->
                      </div>
                    </div>
                    <!-- phone -->
                    <div class="form-group has-feedback ">
                      <label for="BillingPhone"
                             class="col-sm-4 col-xs-12 control-label fcap">Mobile Phone<div data-show="true"
                             class="glyphicon glyphicon-star astrsk"></div></label>
                      <div class="col-sm-8 col-xs-12 fval">
                        <input class="form-control input-validation-error"
                               data-charval="False"
                               data-val="true"
                               data-val-countryaddressvalidation=""
                               data-val-countryaddressvalidation-countryaddressvalidationpropname=""
                               data-val-regex="Only numbers are allowed in this field"
                               data-val-regex-pattern="^[0-9-/(/)/+ ]*$"
                               data-val-required="Shipping Mobile Phone is required"
                               id="CheckoutData_BillingPhone"
                               maxlength="15"
                               name="CheckoutData.BillingPhone"
                               placeholder="Mobile Phone"
                               type="tel"
                               v-model="phone2"
                               aria-required="true">
                        <!-- <span class="glyphicon glyphicon-remove form-control-feedback"
                            aria-hidden="true"></span> -->
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

          <div id="shippingComponents"
               style="display: block;">

            <div class="row sectionheader"
                 aria-label="Shipping Method">
              <div class="col-xs-12 generalhead"><span class="head-num">4.</span>Shipping Method <div class="glyphicon glyphicon-star astrsk"></div>
              </div>
            </div>

            <div class="row box-inner">
              <div class="col-xs-12 form-header">
                <label>Please select your delivery method</label>
              </div>
              <fieldset role="radiogroup"
                        aria-label="Shipping Method">
                <legend>Shipping Method</legend>
                <div class="col-xs-12 groupcontrols"
                     id="shippingOptionsContainer">

                  <div class="row radio-box radio-box-checked">

                    <div class="s-col col-xs-6 col-sm-5 text-left so-price">
                      <input role="radio"
                             tabindex="0"
                             data-denypobox="true"
                             data-prc="$ 20.00"
                             data-is-cash-supported="false"
                             data-isstorecollection="false"
                             data-collectionpoints="false"
                             data-extradetails="false"
                             id="ship-opt-40010497"
                             class="so-radio custom-radio-input"
                             data-prepaysupported="true"
                             type="radio"
                             data-val="true"
                             checked=""
                             data-val-required="Please select a shipping method"
                             name="CheckoutData.SelectedShippingOptionID"
                             data-sdd="false"
                             data-ssd-cost=""
                             value="40010497"
                             data-tooltip-special-pos="top left;bottom left">
                      <label id="ship-price-Unavailable (nested view): use #getIndex()1"
                             class="custom-radio-label"
                             for="ship-opt-40010497">$ 20.00</label>

                      <div class="taxmessage">

                        Prepayment of duties and taxes supported

                      </div>

                    </div>
                    <div class="s-col col-xs-6 col-sm-3 text-left so-service">
                      <div class="so-service-name "><label id="shipoptname_40010497"
                               for="ship-opt-40010497">Express Courier (Air)</label></div>
                      <div class="hidden-md hidden-lg mobile-ship-days">

                        <label id="shipopttime_40010497"
                               data-sdd="Up to 4 business day(s)"
                               for="ship-opt-40010497">4 to 5 business days</label>

                      </div>

                    </div>

                    <div class="s-col col-sm-4 hidden-sm hidden-xs text-left so-date">
                      <label id="shipopttime_40010497"
                             data-sdd="Up to 4 business day(s)"
                             for="ship-opt-40010497">4 to 5 business days</label>
                    </div>

                  </div>

                </div>
              </fieldset>
              <div id="shipOptvalidationContaier"
                   style="display: none;">
                <span id="smglyphicon"
                      class="glyphicon glyphicon-remove form-control-feedback"
                      aria-hidden="true"></span>
                <span class="field-validation-valid shipOptValError"
                      data-valmsg-for="CheckoutData.SelectedShippingOptionID"
                      data-valmsg-replace="true"></span>
                <span id="codShipError"
                      class="codShipError">Please select a shipping method that supports Cash on delivery.</span>
              </div>
            </div>

            <!--#endregion-->
            <!-- #region Same Day Dispatch-->
            <div class="row nosamedaydispatch"
                 id="samedaydispatchBoxWrapper">
              <div class="col-xs-12"
                   id="samedaydispatchBox">

              </div>
            </div>
          </div>

        </form>

        <!-- #region Payment Options-->

        <div class="row"
             id="paymentsummaryContainer">
          <div class="col-md-6 col-xs-12"
               id="paymentBox">

            <div class="inner forminnerleft">

              <div class="row sectionheader">
                <div class="col-xs-12 generalhead">

                  <span class="head-num">5.</span>
                  <h4 tabindex="0"
                      class="title-heading">Payment</h4> Payment

                  <div id="securetrx">
                    <span id="stline">
                      Secure Encrypted Transaction
                    </span>
                    <span id="stimage">

                    </span>
                  </div>
                </div>
              </div>

              <div class="inner clearfix"
                   style="padding-right:10px;">

                <div class="col-xs-12"
                     id="pmGlobalWrapper">
                  <div id="paymentWrapper"
                       class="clearfix">

                    <div id="ccWrapperForVisibility">

                      <div class="form-horizontal"
                           id="ccWrapper"
                           style="height: auto;">
                        <div class="ccLoader"
                             style="display: none;">
                          <div class="gle-lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>

                        </div>
                        <div id="cardsShow"
                             data-country="CN">
                          <div class="sprite sprite-pm_1 sprite sprite-pm_1_CN"
                               id="cardsShowPM_1"></div>
                          <div class="sprite sprite-pm_2 sprite sprite-pm_2_CN"
                               id="cardsShowPM_2"></div>
                          <div class="sprite sprite-pm_3 sprite sprite-pm_3_CN"
                               id="cardsShowPM_3"></div>
                          <div class="sprite sprite-pm_33 sprite sprite-pm_33_CN"
                               id="cardsShowPM_33"></div>
                        </div>
                        <form method="post"
                              id="paymentFrm"
                              novalidate="novalidate">
                          <div class="clearfix"
                               id="secureContainer"
                               data-culture="en-US"
                               data-direction="ltr">
                            <div class="form-horizontal">
                              <div class="form-group">

                                <label for="cardNum"
                                       class="col-sm-4 col-xs-12 control-label fcap paylabel">Card number<div data-show="true"
                                       class="glyphicon glyphicon-star astrsk"></div></label>
                                <div class="col-sm-8 col-xs-12 fval"
                                     id="CreditCardCell"
                                     data-cc-valid="false">
                                  <input aria-label="Card number"
                                         class="form-control"
                                         id="cardNum"
                                         placeholder="Card number"
                                         type="tel"
                                         v-model="number"
                                         aria-required="true">
                                  <div id="cardTypeInfo">
                                    <div class="isvisa pm_visa pm_general"></div>
                                    <div class="ismastercard pm_mastercard pm_general"></div>
                                    <div class="isamex pm_amex pm_general"></div>
                                    <div class="ismaestro pm_maestro pm_general"></div>
                                    <div class="isjcb pm_jcb pm_general"></div>
                                    <div class="isdiners pm_diners pm_general"></div>
                                    <div class="isdiscover pm_discover pm_general"></div>
                                    <div class="ismir pm_mir pm_general"></div>
                                    <div class="isdefault pm_default pm_general"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">

                                <label for="cardNum"
                                       class="col-sm-4 col-xs-12 control-label fcap paylabel">Cardholderr<div data-show="true"
                                       class="glyphicon glyphicon-star astrsk"></div></label>
                                <div class="col-sm-8 col-xs-12 fval"
                                     id="CreditCardCell"
                                     data-cc-valid="false">
                                  <input aria-label="Card number"
                                         placeholder="Cardholderr"
                                         class="form-control"
                                         id="cardNum"
                                         v-model="cardholderr"
                                         aria-required="true">
                                  <div id="cardTypeInfo">
                                    <div class="isvisa pm_visa pm_general"></div>
                                    <div class="ismastercard pm_mastercard pm_general"></div>
                                    <div class="isamex pm_amex pm_general"></div>
                                    <div class="ismaestro pm_maestro pm_general"></div>
                                    <div class="isjcb pm_jcb pm_general"></div>
                                    <div class="isdiners pm_diners pm_general"></div>
                                    <div class="isdiscover pm_discover pm_general"></div>
                                    <div class="ismir pm_mir pm_general"></div>
                                    <div class="isdefault pm_default pm_general"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="cardExpiryMonth"
                                       class="col-sm-4 col-xs-12 control-label fcap  paylabel">Expiry date<div data-show="true"
                                       class="glyphicon glyphicon-star astrsk"></div></label>
                                <div class="col-sm-8 col-xs-12 fval">
                                  <div class="row"
                                       id="expDateRow">

                                    <div class="col-xs-6">
                                      <div class="FSelect">
                                        <div class="arrow"></div>
                                        <div class="FCurValue">{{month?month:'Month'}}</div>
                                        <select aria-label="Month"
                                                class="form-control"
                                                data-tooltip-special-pos="top left;bottom left"
                                                data-val="true"
                                                data-val-datemustbeequalorgreaterthancurrentdate="The credit card expiration date you provided has already expired."
                                                data-val-required="Expiry date"
                                                data-val-required-message=""
                                                data-widget="lightcombobox"
                                                id="cardExpiryMonth"
                                                name="PaymentData.cardExpiryMonth"
                                                v-model="month"
                                                data-rendered="true"
                                                aria-required="true">
                                          <option v-for="(m,index) in options1"
                                                  :key="index"
                                                  :value="m.label">{{m.label}}</option>

                                        </select>
                                      </div>
                                    </div>

                                    <div class="col-xs-6">
                                      <div class="FSelect">
                                        <div class="arrow"></div>
                                        <div class="FCurValue">{{year?year:"Year"}}</div><select aria-label="Year"
                                                class="form-control"
                                                data-tooltip-special-pos="top right;bottom right"
                                                data-val="true"
                                                data-val-datemustbeequalorgreaterthancurrentdate="The credit card expiration date you provided has already expired."
                                                data-val-required="Expiry date"
                                                data-val-required-message=""
                                                data-widget="lightcombobox"
                                                id="cardExpiryYear"
                                                name="PaymentData.cardExpiryYear"
                                                v-model='year'
                                                data-rendered="true"
                                                aria-required="true">
                                          <option v-for="(y,index) in options2"
                                                  :key="index"
                                                  :value="y.label">{{y.label}}</option>

                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div id="cvvContainer"
                                   class="form-group">
                                <label for="cvdNumber"
                                       class="col-sm-4 col-xs-12 control-label fcap  paylabel">Security code<div data-show="true"
                                       class="glyphicon glyphicon-star astrsk"></div></label>
                                <div class="col-sm-8 col-xs-12 fval">
                                  <input aria-label="Security code"
                                         autocomplete="off"
                                         class="form-control"
                                         data-tt-pos="top"
                                         data-val="true"
                                         data-val-cvvval="Please enter a valid CVV"
                                         data-val-cvvval-otherpropertyname=""
                                         data-val-required="Security code"
                                         id="cvdNumber"
                                         name="PaymentData.cvdNumber"
                                         pattern="[0-9]{3,4}"
                                         placeholder="CVV"
                                         type="tel"
                                         v-model='cvc'
                                         aria-required="true">
                                  <span id="cvvDescriptionContainer"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title=""
                                        data-original-title="The&nbsp;Security Code&nbsp;on your credit card or debit card is a 3 digit number on the back of your VISA®, MasterCard® and Discover® branded credit and debit cards. On your American Express® branded credit or debit card it is a 4 digit numeric code on the front of the card.">
                                    <label tabindex="0"
                                           class="control-label"
                                           id="cvvInfo"> What is this?</label>
                                    <label class="control-label secureinfolabel"><span class="secureInfo lazy"></span></label>
                                    <div class="cvv_text">The Security Code on your credit card or debit card is a 3 digit number on the back of your VISA®, MasterCard® and Discover® branded credit and debit cards. On your American Express® branded credit or debit card it is a 4 digit numeric code on the front of the card.</div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </form>

                        <div id="conversionMessageWrapper"
                             class="row">
                          <div id="conversionMessage"
                               class="col-xs-12"
                               style="display:none">
                            Please note: We cannot process the payment in your local currency at this time. The payment will be sent to your bank in <span class="cct_cur">US Dollar</span>
                            <span id="cctAmountWrapper">(<span id="cctAmount"></span>)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row  container-CN"
                         id="apmConfirm">
                      <div id="pmconficon">
                        <span class="">
                        </span>
                      </div>
                      <div id="apmExtraDetails"
                           class="pmconcontent clearfix"></div>
                      <div id="apmConfirmText"
                           class="pmconcontent clearfix"
                           tabindex="0">
                        Click the button below to be directed to the selected payment method website to make this payment
                      </div>
                      <div id="paypalConfirmText"
                           class="pmconcontent clearfix"
                           tabindex="0"
                           style="display: none;">
                        After clicking "Complete Purchase" a pop-up will appear asking you to log in to your PayPal account. Review your payment and shipping details to complete your purchase. You will be redirected to the "Motherhood Maternity" Order Confirmation page afterwards.
                      </div>
                      <div id="walletConfirmText"
                           class="pmconcontent clearfix"
                           tabindex="0"
                           style="display:none;">
                        You will be redirected to the our dedicated Apple Pay page, where you can make a secure payment using Apple Pay.
                      </div>
                      <div id="codConfirmText"
                           class="pmconcontent clearfix"
                           tabindex="0">
                        Pay cash upon delivery

                        <div id="CODErrorMessage"
                             style="color:red;display:none;">
                          Cash on delivery is available for orders below <span id="CODThresholdStr"></span>. Please choose a different payment method.
                        </div>

                      </div>
                      <div id="bankTransferConfirmText"
                           class="pmconcontent pmconfirm clearfix"
                           tabindex="0"
                           style="display:none;">
                        Use a bank transfer to complete your order. Once your order is received you will be provided with the bank account details to transfer the funds.

                        <div id="bankTransferConversionMessageWrapper"
                             class="row">
                          <div id="bankTransferConversionMessage"
                               class="col-xs-12"
                               style="display:none">
                            Please note: We cannot process the payment in your local currency at this time. The payment will be sent to your bank in <span class="cct_cur">US Dollar</span>
                            <span id="bankTransferAmountWrapper">(<span id="bankTransferAmount"></span>)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <form id="paymentFrm"
                      action="https://securev2.global-e.com/payments/handlecreditcardrequestV2"
                      method="post"
                      target="paymentpostloc"
                      novalidate="novalidate">
                  <!--#region Hidden Payment Parameters-->
                  <input type="hidden"
                         name="PaymentData.checkoutV2"
                         value="true">
                  <input type="hidden"
                         name="PaymentData.cartToken"
                         id="cartToken"
                         value="8762a903-57cd-4e75-8964-1d54432b54b1">
                  <input type="hidden"
                         name="PaymentData.gatewayId"
                         id="gatewayId"
                         value="11">
                  <input type="hidden"
                         name="PaymentData.paymentMethodId"
                         id="paymentMethodId"
                         value="1">
                  <input type="hidden"
                         name="PaymentData.machineId"
                         id="machineId">
                  <!--Needs to be updated by script-->
                  <input type="hidden"
                         name="PaymentData.createTransaction"
                         id="createTransaction"
                         value="true">

                  <!--#endregion-->
                </form>
              </div>
            </div>

          </div>
          <div tabindex="0"
               class="col-md-6  col-xs-12"
               id="summaryBox">

            <div class="inner forminnerright">
              <div class="row sectionheader billing-sectionheader">
                <div class="col-xs-12 generalhead">

                  <h4 tabindex="0"
                      class="title-heading">Billing Summary</h4>Billing Summary
                </div>
              </div>

              <!-- <div class="box-inner row "
                   id="voucherAndCouponsCoantainer"
                   data-empty-code-error="Please enter coupon code">

                <div class="row">
                  <div class="col-xs-8"
                       id="voucherFieldDiv"> <input id="voucherInput"
                           maxlength="200"
                           type="text"
                           placeholder="Please enter coupon code"> </div>
                  <div class="col-xs-4"><button type="button"
                            id="applyVoucherBtn">Apply</button></div>
                </div>
                <div class="row"
                     id="voucherAndCouponsErrorsCoantainer">
                </div>
                <div class="total-seperator"></div>

              </div> -->

              <div class="form-horizontal box-inner row "
                   id="totalsContainer">
                <div class="row">
                  <div class="col-xs-8 totals-col-caption">
                    Items total

                  </div>
                  <div class="col-xs-4 totals-col-price"> $ {{(amount / 100).toFixed(2)}} </div>
                </div>

                <div class="total-seperator"></div>

                <div class="row">
                  <div class="col-xs-8 totals-col-caption">
                    Shipping

                  </div>
                  <div class="col-xs-4 totals-col-price"> $ 20.00 </div>
                </div>

                <div class="total-seperator"></div>

                <div class="row">
                  <div class="col-xs-8 totals-col-caption">
                    Duties, taxes &amp; fees

                  </div>
                  <div class="col-xs-4 totals-col-price"> $ 47.75 </div>
                </div>

                <div class="total-seperator"></div>

                <div class="row totals-row-summary">
                  <div class="col-xs-8 totals-col-caption"
                       id="BillingSummaryTotalPriceLabel">
                    Total For Your Order

                  </div>
                  <div class="col-xs-4 totals-col-price"
                       id="BillingSummaryTotalPrice"> $ {{((amount / 100)+67.75).toFixed(2)}} </div>
                </div>
                <div class="total-seperator"></div>
              </div>

              <div class="row tax-row">
                <div class="col-xs-12"
                     id="taxMessageContainer">All applicable duties, taxes and fees are included in the total amount of your order. We guarantee you will not be required to pay any additional cost on delivery.</div>
              </div>
            </div>
          </div>

        </div>

        <div class="row">

          <div class="col-md-6 col-xs-12"
               id="paymentButtonBox">

            <div id="hcaptcha-wrapper"
                 class="row">
              <div id="h-captcha-loader"
                   class="col-sm-12 col-xs-12">
                <span id="hcaptcha-loading-message">Please wait until the captcha loads and answer as instructed.</span>
                <div class="captcha-spinner-container">
                  <div class="captcha-spinner"
                       role="status"></div>
                </div>
              </div>

              <div id="h-captcha-container"></div>
              <div id="h-captcha-challenge-flex-container">
                <div id="h-captcha-challenge-container"></div>
              </div>
            </div>

            <div class="row"
                 id="controlsRow">
              <div class="pay-button-wrapper">
                <button type="button"
                        @click="payment"
                        data-fireevent="false"
                        class="btn checkout-button-1"
                        id="btnPay"
                        data-text="Pay and place order">Pay and place order</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import top from '../../components/top'

import global from '../../utils/global'
import $ from 'jquery'
import '../../utils/jquery-2.0.3.min.js'
import qs from 'qs'

export default {
  components: {
    top
  },
  data () {
    return {
      goodsCart: '',
      allTotal: 0,
      total: 0,
      month: '',
      year: '',
      number: '',
      cvc: '',
      mail: '',
      password: '',
      activeName: '1',
      firstName: '',
      lastName: '',
      firstName2: '',
      lastName2: '',
      email: '',
      phone: '',
      phone2: '',
      address1: '',
      address2: '',
      city: '',
      code: '',
      country: '',
      countryCode1: '',
      countryCode2: '',
      countryName: '',
      Region: '',
      newAddress1: '',
      newAddress2: '',
      city2: '',
      code2: '',
      country2: '',
      Region2: '',
      cardholderr: '',
      delivery_flag: false,
      checked: false,
      checked2: false,
      radioAddress: '1',
      radio: '',
      radio2: '',

      brower: '',
      optionCountry: [],
      optionRegion: [],
      optionCountry2: [],
      optionRegion2: [],
      ip: '',
      currency: '',
      options1: [{
        value: '2',
        label: '01'
      }, {
        value: '3',
        label: '02'
      }, {
        value: '4',
        label: '03'
      }, {
        value: '5',
        label: '04'
      }, {
        value: '6',
        label: '05'
      },
      {
        value: '7',
        label: '06'
      },
      {
        value: '8',
        label: '07'
      },
      {
        value: '9',
        label: '08'
      },
      {
        value: '10',
        label: '09'
      },
      {
        value: '11',
        label: '10'
      }, {
        value: '12',
        label: '11'
      }, {
        value: '13',
        label: '12'
      },
      ],
      options2: [
        {
          value: '3',
          label: '2022'
        }, {
          value: '4',
          label: '2023'
        }, {
          value: '5',
          label: '2024'
        }, {
          value: '6',
          label: '2025'
        },
        {
          value: '7',
          label: '2026'
        },
        {
          value: '8',
          label: '2027'
        },
        {
          value: '9',
          label: '2028'
        },
        {
          value: '10',
          label: '2029'
        },
        {
          value: '11',
          label: '2030'
        }, {
          value: '12',
          label: '2031'
        },
        {
          value: '13',
          label: '2032'
        },
        {
          value: '14',
          label: '2033'
        },
        {
          value: '15',
          label: '2034'
        },
        {
          value: '16',
          label: '2035'
        },
        {
          value: '17',
          label: '2036'
        },
        {
          value: '18',
          label: '2037'
        },
        {
          value: '19',
          label: '2038'
        },
        {
          value: '20',
          label: '2039'
        },
        {
          value: '21',
          label: '2040'
        },
      ],
      options3: [
        {
          value: '1',
          label: 'USD'
        }, {
          value: '2',
          label: 'CNY'
        },
      ],

    }
  },
  created () {
    let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart')) || []
    this.goodsCart = goodsCart
    this.getTotal()
    this.optionCountry = global.data.country
    this.optionCountry2 = global.data.country
  },
  methods: {
    //保存信息
    payment () {
      let month = this.month
      let year = this.year
      let number = this.number
      let cvc = this.cvc
      let cardholderr = this.cardholderr
      let email = this.email
      let phone = this.phone
      let amount = this.amount

      let firstName = this.firstName
      let lastName = this.lastName
      let address1 = this.address1
      let city = this.city
      let code = this.code
      let countryCode1 = this.countryCode1
      let Region = this.Region
      let delivery_flag = this.delivery_flag

      let firstName2
      let lastName2
      let newAddress1
      let city2
      let code2
      let countryCode2
      let Region2
      let phone2
      if (delivery_flag) {
        firstName2 = this.firstName2
        lastName2 = this.lastName2
        newAddress1 = this.newAddress1
        city2 = this.city2
        code2 = this.code2
        countryCode2 = this.countryCode2
        Region2 = this.Region2
        phone2 = this.phone2
        if (!firstName2 || !lastName2 || newAddress1 || city2 || code2 || countryCode2 || Region2) {
          this.$message({
            message: 'Please fill in the required fields！',
            type: 'error'
          })
          return
        }
      } else if (!delivery_flag) {
        firstName2 = this.firstName
        lastName2 = this.lastName
        newAddress1 = this.address1
        city2 = this.city
        code2 = this.code
        countryCode2 = this.countryCode1
        Region2 = this.Region
        phone2 = this.phone
      }



      console.log('payment', code, city, email, phone, year, month, number, cvc, cardholderr, lastName)
      if (month && year && number && cvc && cardholderr) {
        /*currency:币种
            CNY	人民币
            HKD	港币
            USD	美元
            EUR	欧元
            GBP	英镑
            JPY	日元
            TWD	台币
            AUD	澳元
            参数》》》》》》》》》》》》》》》》》》》》》》》
            cardHold	卡持有人姓名
            cardNo	信用卡卡号
            cardExpireMonth	卡有效期月
            cardExpireYear	卡有效期年
            cardSecurityCode	CVV2
            billFirstName	账单姓
            billLastName	账单名
            billAddress	账单联系地址
            billCity	账单城市
            billState	账单省份/州
            billCountry	账单国家
            billZip	账单所在地邮政编码
            billPhone	账单联系电话
            shipFirstName	收货人名
            shipLastName	收货人姓
            shipAddress	收货详细地址
            shipCity	收货城市
            shipState	收货省份/州
            shipCountry	收货国家
            shipZip	收货邮编
            shipPhone	收货电话
            brower	浏览器标识
            ip	ip地址
            email	邮件地址
            currency	币种
            amount	金额(元)
        */
        let brower = this.brower
        let ip = this.ip
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.$axios({
          url: '/v2.0/tl/insidePay',
          method: 'post',
          data: {
            cardHold: cardholderr,
            cardNo: number,
            cardExpireMonth: month,
            cardExpireYear: year,
            cardSecurityCode: cvc,
            billFirstName: firstName,
            billLastName: lastName,
            billAddress: address1,
            billCity: city,
            billState: Region ? Region : countryCode1,
            billCountry: countryCode1,
            billZip: code,
            billPhone: phone,
            shipFirstName: firstName2,
            shipLastName: lastName2,
            shipAddress: newAddress1,
            shipCity: city2,
            shipState: Region2 ? Region2 : countryCode2, //Region2
            shipCountry: countryCode2,
            shipZip: code2,
            shipPhone: phone2,
            brower: brower,
            ip: ip,
            email: email,
            currency: 'USD',
            amount: (amount / 100).toFixed(2),
            notifyUrl: 'http://www.baidu.com',
            agentId: '202110110010',
          },
          // headers: {
          //  'Content-type':'application/x-www-form-urlencoded'
          // }
        }).then(res => {
          loading.close();
          if (res.code == 200) {
            if (res.data.respCode == 10000) {
              this.$message({
                message: res.data.respMessage,
                type: 'success'
              })
            } else if (res.data.respCode == 10001) {
              this.$message({
                message: res.data.respMessage,
                type: 'error'
              })
            } else if (res.data.respCode == 10002) {
              this.$message({
                message: res.data.respMessage,
                type: 'success'
              })
              if (res.data.payUrl) {
                location.href = res.data.payUrl
              }
            }
            else {
              this.$message({
                message: res.data.respMessage,
                type: 'error'
              })
            }
          }
          else {
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        }).catch(e => {
          loading.close();
        })
      } else {
        this.$message({
          message: 'Please fill in the required fields！',
          type: 'error'
        })
        return
      }
      return

    },
    toRegister () {
      if (this.isLogin) {
        return
      } else {
        this.$router.push('/register')
      }
    },

    getCountry (event) {
      let optionCountry = this.optionCountry
      optionCountry.map(v => {
        if (v.country_id == event.country_id) {
          this.countryCode1 = v.iso_code_2
          this.optionRegion = v.zone
          this.Region = ''
          this.countryName = v.name
          console.log('countryName', this.countryName, this.countryCode1)
          return
        }
      })
    },
    getCountry2 (event) {
      let optionCountry2 = this.optionCountry
      optionCountry2.map(v => {
        if (v.country_id == event.country_id) {
          this.countryCode2 = v.iso_code_2
          this.optionRegion2 = v.zone
          this.countryName = v.name
          this.Region2 = ''
          return
        }
      })
    },
    getRegion2 (event) {
      this.Region2 = event
    },
    getRegion (event) {
      this.Region = event
    },
    getCurrency (event) {
      this.currency = event
    },
    getTotal () {
      let amount = 0
      let goodsCart = this.goodsCart
      goodsCart.map(v => {
        amount = amount + Number(v.allPrice)
      })
      this.amount = amount
    }


  },
  mounted () {
    // 获取电脑唯一标识
    const start = new Date().getTime();
    let view = document.querySelector('#view');
    // view.innerHTML = '';
    let excludes = {};
    let options = {
      excludes: excludes
    }
    console.log(options)
    let that = this
    Fingerprint2.get(options, function (components) {
      // 参数
      const values = components.map(function (component) {
        return component.value
      });
      // 指纹
      const murmur = Fingerprint2.x64hash128(values.join(''), 31);
      // view.innerHTML += '<p class="pp">标识 : ' + murmur + '</p>';
      // sessionStorage.setItem("Finger", murmur); //存入标识值
      console.log(murmur, '浏览器标识');
      that.brower = murmur
      that.ip = returnCitySN["cip"]
    });
    // console.log(returnCitySN["cip"] + ',' + returnCitySN["cname"], 'ip地址')
    // choose country
    $('#checkout_shipping_address_country').on('change', function () {
      let val = $('option:selected', this).val()
      if (val) {
        that.getCountry(val)
      } else {
        that.countryCode1 = ''
      }
    })
    // choose region
    $('#checkout_shipping_address_province').on('change', function () {
      let val = $('option:selected', this).val()
      if (val) {
        that.Region = val
      } else {
        that.Region = ''
      }
      console.log('region', that.Region)
    })
    // choose month
    $('#checkout_shipping_address_month').on('change', function () {
      let val = $('option:selected', this).val()
      if (val == 'Month') {
        that.month = ''
      } else {
        that.month = val
      }
      console.log('month', that.month)
    })
    // chooose year
    $('#checkout_shipping_address_year').on('change', function () {
      let val = $('option:selected', this).val()
      if (val == 'Year') {
        that.year = ''
      } else {
        that.year = val
      }
      console.log('year', that.year)
    })
    $('.order-summary-toggle').click(function () {
      // 隐藏
      if ($(this).hasClass('order-summary-toggle--show')) {
        $(this).removeClass('order-summary-toggle--show').addClass('order-summary-toggle--hide')
        $('.order-summary-toggle__text--hide').css('display', 'block')
        $('.order-summary-toggle__text--show').css('display', 'none')
        // $('#order-summary').removeClass('order-summary--is-expanded').addClass('order-summary--is-collapsed order-summary--transition')
        $("#order-summary").slideUp('300');
        setTimeout(() => {
          // $('#order-summary').removeClass('order-summary--transition')
          $('#order-summary').addClass('order-summary--is-collapsed')
        }, 300);
        return
      }
      if ($(this).hasClass('order-summary-toggle--hide')) {
        $(this).removeClass('order-summary-toggle--hide').addClass('order-summary-toggle--show')
        $('.order-summary-toggle__text--show').css('display', 'block')
        $('.order-summary-toggle__text--hide').css('display', 'none')
        // $('#order-summary').removeClass('order-summary--is-collapsed').addClass('order-summary--is-expanded order-summary--transition')
        $("#order-summary").slideDown('300');
        setTimeout(() => {
          $('#order-summary').removeClass('order-summary--transition')
        }, 300);
        return
      }
    })


  }


}

</script>

<style lang='scss' scoped>
@import "../../style/checkout.css";

.check_out {
  width: 100%;
  text-align: left;
  img {
    width: 100%;
  }
  .subtotal {
    padding-top: 0;
  }
  #cardsShowPM_1 {
    background-position: -106px -74px;
  }
  #cardsShowPM_2 {
    background-position: -10px -134px;
  }
  #cardsShowPM_3 {
    background-position: -158px -10px;
  }
  #cardsShowPM_33 {
    background-position: -184px -70px;
  }
  #cvvDescriptionContainer {
    position: relative;
    &:hover {
      .cvv_text {
        display: block;
      }
    }
    .cvv_text {
      display: none;
      position: absolute;
      width: 230px;
      height: auto;
      font-size: 10px;
      color: #fff;
      background: #000;
      top: -105px;
      left: -40px;
      padding: 8px;
      border-radius: 4px;
    }
  }
  .sprite {
    background-image: url(https://s3.global-e.com/Images/Sprites/spritesheet.png);
    background-repeat: no-repeat;
    display: block;
    width: 58px;
    height: 40px;
  }
  .FSelect {
    select {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      opacity: 0;
      filter: alpha(opacity=0);
      bottom: -2px;
      height: 100%;
      min-height: 100%;
    }
  }
}
</style>
<style scoped>
/*payment specifc styles*/
.title-heading {
  border: 0;
  clip: rect(1px 1px 1px 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.sprite-pm_46 {
  background-image: url(https://cdn.klarna.com/1.0/shared/image/generic/logo/en_us/basic/blue-black.png?width=66);
  background-repeat: no-repeat;
  display: block;
  width: 76px;
  height: 64px;
  background-position: center;
}

.container-DE #pmconficon .sprite-pm_46,
.container-AT #pmconficon .sprite-pm_46 {
  background-image: url(/content/images/pm/klarna_DE_AT.png);
  width: 140px;
  height: 90px;
  background-size: 100%;
}

/* apple pay */
@supports (-webkit-appearance: -apple-pay-button) {
  .apple-pay-button {
    display: inline-block;
    -webkit-appearance: -apple-pay-button;
  }

  .apple-pay-button-black {
    -apple-pay-button-style: black;
  }

  .apple-pay-button-white {
    -apple-pay-button-style: white;
  }

  .apple-pay-button-white-with-line {
    -apple-pay-button-style: white-outline;
  }
}

@supports not (-webkit-appearance: -apple-pay-button) {
  .apple-pay-button {
    display: inline-block;
    background-size: 100% 60%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 5px;
    padding: 0px;
    box-sizing: border-box;
    min-width: 200px;
    min-height: 32px;
    max-height: 64px;
  }

  .apple-pay-button-black {
    background-image: -webkit-named-image(apple-pay-logo-white);
    background-color: black;
  }

  .apple-pay-button-white {
    background-image: -webkit-named-image(apple-pay-logo-black);
    background-color: white;
  }

  .apple-pay-button-white-with-line {
    background-image: -webkit-named-image(apple-pay-logo-black);
    background-color: white;
    border: 0.5px solid black;
  }
}
@media only screen and (min-width: 768px) {
}
</style>
