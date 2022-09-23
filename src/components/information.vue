<template>
  <div class="information">
    <!-- <top></top> -->
    <div class="login_title">
      <!-- <div class="title_name">{{titleName}}</div> -->
      <!-- <div class="title_line"></div> -->
    </div>
    <div class="info_box"
         v-if='type==1'>
      <div class="info_storg">Abouts Us</div>
      <div class="info_text"></div>
      <div class="info_storg">BloomChic is a digital-first fashion and lifestyle destination for the modern plus size woman. We offer affordable, stylish clothes thoughtfully Made for Your Curves. With every new design, every fresh collection, and every story we tell, we strive to center Her. She is our muse, and we exist to uplift her, empower her, and amplify her voice.</div>
      <div class="info_text">Established in 2021, BloomChic has become a popular wholesale and retail online shop in the world. It offers diverse & high-quality products and continues to upload new more products in the future to meet the higher market request. </div>
      <div class="info_text"></div>
      <div class="info_text"></div>
      <div class="info_text"></div>
      <div class="info_storg">BloomChic Vision</div>
      <div class="info_text">BloomChic aims to build a global cross-border e-commerce ecosphere with existed and unknown energy to face the challenges and makes all efforts to be one of the best cross-border E-commerce platforms in the world within several years.</div>
      <div class="info_storg">BloomChic Idea</div>
      <div class="info_text">Services are customer-oriented. Your continuous support will witness BloomChic’s growth. Insistence helps us to achieve more success.</div>
      <div class="info_storg">Top 5 Reasons to shop with us</div>
      <div class="info_text">1. Huge range of quality items: Extensive selection of the very latest styles for both electronics and fashion gadgets.</div>
      <div class="info_text">2. All new, always new: Exciting products showcasing innovative styles are sourced and added daily by our experienced buyers on BloomChic.com to give you maximum choice.</div>
      <div class="info_text">3. Buy more, save more: With a world thousands of products at your finger tips at great prices, our efforts are focused on providing you with the most competitive prices for high-quality products.</div>
      <div class="info_text">4. Our customers always come first: You always matter to us. Our highly trained CS team is always ready to support you no matter the issue. When you buy from us, the sale is not complete when we ship, it is complete when you are completely satisfied.</div>
      <div class="info_text"></div>
      <div class="info_text"></div>

    </div>

    <div class="info_box"
         v-else-if="type==2">
      <div class="info_storg">Shipping Policy</div>
      <div class="info_text">
        This page shows you how to choose a shipping method for your order. BloomChic will process your order within 1-2days after receiving your payment.
        You can choose your preferable Shipping Method:
      </div>
      <div class="info_title">Expedited Shipping</div>
      <div class="info_text">
        This shipping method is the fastest available. Delivery times are between 3-6 days to all major destinations.
      </div>
      <div class="info_title">Standard Shipping</div>
      <div class="info_text">
        Before we can ship your order, lianlian.com has to prepare your products, perform strict quality-control tests and package items carefully. The above delivery estimates do not include order processing time.
      </div>
      <!-- <div class="info_btn" @click="toHome">CONTINUE</div> -->
    </div>

    <!-- <div class="info_storg">Privacy Policy</div> -->
    <div class="grid info_box"
         style='margin-top:20px;'
         v-else-if="type==3">
      <div class="grid__item medium-up--three-quarters medium-up--push-one-eighth">
        <header class="section-header">
          <h1 class="section-header__title">Privacy Policy</h1>
        </header>

        <div class="rte rte--nomargin">
          <p>This Privacy Policy applies to all personal information collected during any written, electronic, and oral communications or collected online or offline, which include: our website, located at bloomchic.com (“the Site”) through our mobile application as well as any written, electronic, and oral communications representative parties (collectively, the “Services”).</p>
          <p>Please read our Terms and Conditions and this Policy before accessing or using our Services. If you cannot agree with this Policy or the Terms and Conditions, please do not access or use our Services. If you are located in a jurisdiction outside the European Economic Area, by using our Services, you accept the Terms and Conditions and accept our privacy practices described in this Policy.</p>
          <p>We may modify this Policy at any time, without prior notice, and changes may apply to any Personal Information we already hold about you, as well as any new Personal Information collected after the Policy is modified. If we make changes, we will notify you by revising the date at the top of this Policy. We will provide you with advanced notice if we make any material changes to how we collect, use or disclose your Personal Information that impact your rights under this Policy. If you are located in a jurisdiction other than the European Economic Area, the United Kingdom or Switzerland (collectively “European Countries”), your continued access or use of our Services after receiving the notice of changes, constitutes your acknowledgement that you accept the updated Policy.</p>
          <p>In addition, we may provide you with real time disclosures or additional information about the Personal Information handling practices of specific parts of our Services. Such notices may supplement this Policy or provide you with additional choices about how we process your Personal Information.</p>
          <ol>
            <li><strong>Personal Information We Collect</strong></li>
          </ol>
          <p>We collect personal information when you use our Services, create an account with us or submit personal information when requested with the Site. Personal information generally is any information that relates to you, identifies you personally or could be used to identify you, such as your name, email address, phone number, address and payment account number. The definition of personal information varies by jurisdiction. Only the definition that applies to you based on your location applies to you under this Privacy Policy. Personal information does not include data that has been irreversibly anonymized or aggregated so that it can no longer enable us, whether in combination with other information or otherwise, to identify you.</p>
          <p>The types of personal information that we may collect about you include:</p>
          <p><strong><b>A.Information You Directly and Voluntarily Provide to Us to execute the purchase or services contract.</b></strong>&nbsp;We collect your personal information you give us when you use our Services. For example, if you visit our Site and place an order, we collect information that you provide to us during the ordering process. This information will include your first and last name, mailing address, email address, phone number, payment account or credit card information. In some regions, , passport information and tax number are also needed for customer clearance . We may also collect personal information when you communicate with any of our departments such as customer service, or when you complete online forms or surveys provided on the Site. You may also choose to provide your email address to us if you would like to receive information about the products and services that the Bloom Chic offers.</p>
          <p><strong><b>B.Information You Provide to us to improve our products and services. </b></strong>You may voluntarily provide us with your height, age, and weight and measurements and your preference. This information is used by us to recommend clothing sizes, and to provide fit prediction services for you.</p>
          <p><strong><b>C.Information You Post on the Site. </b></strong>If you post information on public areas of the Site, for example a customer review, that information may be collected and used by Bloom Chic, users of the Site, and the public generally. We strongly recommend that you do not post any information through the Site that allows strangers to identify or locate you or that you otherwise do not want to share with the public.</p>
          <p><strong><b>D.Information You Provide through our Live Chat on the Site. </b></strong>We will also store your voice information when you communicate with customer service via voice for related issues, and we will keep your voice information secure. You may provide personal information through our Live Chat which is available on the Site 24 hours a day. We strongly recommend that you do not post any information through the Live Chat that you are not comfortable sharing with a chat employee.</p>
          <p><strong><b>E.Information You Provide to Participate in Sweepstakes. </b></strong>From time to time, we may ask you to complete a survey and/or offer you an opportunity to participate in promotions, programs and/or sweepstakes (collectively, “Promotions”) via the Site or through a third-party platform. If you choose to participate in a Promotion, we will collect and store the personal information you provide in connection with your participation in the Promotion, including, but not limited to, your name, email address, date of birth, and/or phone number. Such information shall be subject to this Privacy Policy unless otherwise stated in the official rules or guidelines of the Promotion or in another privacy policy governing the Promotion.</p>
          <p>Information we collect in connection with a Promotion will be used to administer the Promotion, such as by notifying winners and distributing prizes. As permitted by applicable law, your information may also be used by Bloom Chic or the Promotion sponsor for marketing purposes. Your entry into the Promotion may result in the addition of your information to our mailing list as well as to the mailing list of our promotional partners. Acceptance of a prize may require you (unless prohibited by law) to allow us to post publicly some of your information via the Site, such as on a winner's page.</p>
          <p><strong><b>F.Information Automatically Collected Through the Site. </b></strong>We may automatically collect personal information about you when you use the Site. For example, if you access the Site through a computer, we will automatically collect information such as your browser type and version, computer and connection information, Internet Protocol (“IP”) address and standard web log information. If you access the Site through a mobile device, we may also be able to identify the location of your mobile device. You may choose not to share your location details with us by adjusting your mobile device’s location services settings. For instructions on changing the relevant settings, please contact your service provider or device manufacturer. Please see section 2 below to learn more about our automatic Personal information processing activities.</p>
          <p><strong><b>G.Combination and automated information. </b></strong>We may also combine the information we collect among our services and across your devices and use different technologies to process your information for the purposes described above. For example, we use automated systems that analyze your account status and payment information to detect the unsafe and unsecured payment. We also use automated systems to assess security of your account and provide you suggestion to improve the security of your account.</p>
          <ol start="2">
            <li><strong><b> Cookies and Other Tracking Technologies</b></strong></li>
          </ol>
          <p>We may use cookies, tags, and similar technologies to automatically collect information on our Services. These tracking technologies allow our technology partners to collect information including your computer’s IP address, your mobile device identifier, the type of internet browser you are using, operating system, referral URLs, date/time stamps, pages viewed, and simple keyword tags. Cookies or tags are bits of code that allow our technology partners to collect information including your computer’s IP address, your mobile device identifier, the type of internet browser you are using, operating system, referral URLs, date/time stamps, pages viewed, and simple keyword tags. We also use web pixels to analyze usage patterns on our Site.</p>
          <p><strong><b>A.Cookies. </b></strong>The cookies are small web files that a site or its provider transfers to your device’s hard drive through your web browser that enables the site’s or provider’s system to recognize your browser and remember certain information.</p>
          <p>Generally, we use first-party and third-party cookies for the following purposes: to make our Services function properly; to provide a secure browsing experience during your use of our Services; to collect passive information about your use of our Services; to measure how you interact with our marketing campaigns; to help us improve our Services; and to remember your preferences for your convenience.</p>
          <p>We use the following types of cookies on our Services:</p>
          <p>Strictly Necessary Cookies. These cookies are essential because they enable you to use our Services. For example, strictly necessary cookies allow you to access secure areas on our Services. Without these cookies, some services cannot be provided. These cookies do not gather information about you for marketing purposes. This category of cookies is essential for our Services to work and they cannot be disabled.</p>
          <p>Functional Cookies. We use functional cookies to remember your choices so we can tailor our Services to provide you with enhanced features and personalized content. For example, these cookies can be used to remember your name or preferences on our Services. We do not use functional cookies to target you with online marketing. While these cookies can be disabled, this may result in less functionality during your use of our Services.</p>
          <p>Performance or Analytic Cookies. These cookies collect passive information about how you use our Services, including webpages you visit and links you click. We use the information collected by such cookies to improve and optimize our Services. We do not use these cookies to target you with online marketing. You can disable these cookies.</p>
          <p>Advertising or Targeting Cookies. These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests. Our third-party advertising partners may use these cookies to build a profile of your interests and deliver relevant advertising on other sites. You may disable the use of these cookies as set forth below.</p>
          <p><strong><b>B.Other Tracking Technologies. </b></strong>To see how successfully our marketing campaigns or other Site goals are performing we sometimes use conversion pixels, which fire a short line of code to tell us when you have clicked on a particular button or reached a particular page (e.g. a thank you page once you have completed the procedure for subscribing to one of our services or have completed one of our forms). We also use web pixels to analyze usage patterns on our Site. The use of a pixel allows Bloom Chic&nbsp;to record that a particular device, browser, or application has visited a particular webpage.</p>
          <p><strong><b>C.Your Choices. </b></strong>Your browser may provide you with the option to refuse some or all browser cookies. You may also be able to remove cookies from your browser. You can exercise your preferences in relation to cookies served on our Sites by taking the steps outlined below.</p>
          <p>First-Party Cookies. You can use the browser with which you are viewing this Site to enable, disable or delete cookies. To do this, follow the instructions provided by your browser (usually located within the “Help”, “Tools” or “Edit” settings). Please note, if you set your browser to disable cookies, you may not be able to access secure areas of the Site. Also, if you disable cookies other parts of the Services may not work properly. You can find more information about how to change your browser cookie settings at http://www.allaboutcookies.org.</p>
          <p>Mobile Advertising: If you are not located in the European Countries, you can opt out of having your mobile advertising identifiers used for certain types of advertising by accessing the settings in mobile device and following the instructions. If you opt-out, we will remove all data about you and will not collect any further data. The random ID previously assigned to you will be removed. Thus, if at a later stage, you decide to opt-in, we will be unable to continue to track you using the prior ID and you will for all practical purposes be a new user. If you are located in the European Countries, the cookie banner on our website will provide you the opportunity to consent to having your mobile advertising identifiers used for certain types of advertising by accessing the settings in mobile device.</p>
          <p>Third-Party Cookies. If you are not located in the European Countries, to opt-out of third-party advertising networks and similar entities that use advertising cookies go to http://www.aboutads.info/choices. Once you click the link you may choose to opt-out of such advertising from all participating advertising companies or only advertising provided by specific advertising entities. For more information about third-party advertising networks and similar entities that use these technologies, please see http://www.aboutads.info/consumers . If you are not located in the European Countries, the cookie banner on our website will provide you the opportunity to consent to having third-party advertising cookies.</p>
          <p>We do not control third parties’ collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way. In addition, most web browsers provide help pages relating to setting cookie preferences. More information may be found for the following browsers here:</p>
          <ul>
            <li>
              <span></span>Google Chrome
            </li>
            <li>
              <span></span>Internet Explorer
            </li>
            <li>
              <span></span>Mozilla Firefox
            </li>
            <li>
              <span></span>Safari (Desktop)
            </li>
            <li>
              <span></span>Safari (Mobile)
            </li>
            <li>
              <span></span>Android Browser
            </li>
            <li>
              <span></span>Opera Mobile
            </li>
          </ul>
          <p><strong><b>D.Analytics. I</b></strong>f you are not located in the European Countries, we may use third-party service providers to monitor and analyze the use of our Site. Presently, we use Google Analytics. Google Analytics is a web analytics service offered by Google LLC (“Google”) that tracks and reports Site traffic. For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: https://policies.google.com/privacy?hl=en . Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics, available at: https://tools.google.com/dlpage/gaoptout . If you are located in the European Countries, and the Google Analytics is structured to collect Personal Information, the cookie banner on our website will provide you the opportunity to consent to Google Analytics.</p>
          <p><strong><b>E.Behavioral Remarketing. </b></strong>We also use remarketing services to advertise on third-party websites to you after you visited our Site or services. If you are not located in the European Countries, we and our third-party vendors use cookies to inform, optimize and serve ads based on your past visits to our Service. We use Google Ads for these purposes. Google Ads remarketing service is provided by Google. You can opt-out of this by visiting the Google Ads Settings page: http://www.google.com/settings/ads . If you are located in the European Countries, and the Google Ads is structured to collect Personal Information, the cookie banner on our website will provide you the opportunity to consent to Google Ads.</p>
          <p><strong><b>F.Other Tracking Technologies.</b></strong>&nbsp;We may also use Tracking Technologies to collect "clickstream" data, such as the domain name of the service providing you with Internet access, your device type, IP address used to connect your computer to the Internet, your browser type and version, operating system and platform, the average time spent on our Site, webpages viewed, content searched for, access times and other relevant statistics, and assign unique identifiers to the device or other credentials you use to access the Site for the same purposes.</p>
          <p>Pages of our Site and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags and single-pixel gifs) that permit us, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).</p>
          <p>Pages of our Site may also use Java scripts, which are code snippets embedded in various parts of websites and applications that facilitate a variety of operations including accelerating the refresh speed of certain functionality or monitoring usage of various online components; entity tags, which are HTTP code mechanisms that allow portions of websites to be stored or “cached” within your browser to accelerate website performance; and HTML5 local storage, which allows data from websites to be stored or “cached” within your browser to store and retrieve data in HTML5 pages when the website is revisited.</p>
          <p><strong><b>G.Do Not Track. </b></strong>Some Internet browsers, such as Internet Explorer, Firefox, and Safari, include the ability to transmit “Do Not Track” or “DNT” signals. Since uniform standards for “DNT" signals have not been adopted, our Site does not currently process or respond to “DNT” signals.</p>
          <p><strong><b>H.Location Information. </b></strong>You may be able to adjust the settings of your device so that information about your physical location is not sent to us or third-parties by (a) disabling location services within the device settings; or (b) denying certain websites or mobile applications permission to access location information by changing the relevant preferences and permissions in your mobile device or browser settings. Please note that your location may be derived from your WiFi, Bluetooth, and other device settings. See your device settings for more information.</p>
          <ol start="3">
            <li><strong><b> How We Use Your Personal Information</b></strong></li>
          </ol>
          <p>We will only use your personal information as described in this Privacy Policy or as disclosed to you prior to such processing taking place.</p>
          <p><strong><b>A.To Provide You Our Services. </b></strong>We will use your personal information to provide information or perform Services that you request, including managing your request as a registered user of our Site. If the applicable information is to be provided or Service is to be performed by a third party, then we will disclose the applicable information to the third party providing the information or performing applicable Services. All third parties that we work with are contractually obligated to protect your information as disclosed in this Privacy Policy.</p>
          <p><strong><b>B.For Internal Use. </b></strong>We use your personal information for the purposes of furthering our business, including improving our Site's content and functionality by analyzing where, on which types of devices and how our Site is used, how many visitors we receive, and where they click through to the Site from. We also use it to remember you in case you re-visit our Site, so we will know if you have already been served with surveys, or (where Site content is undergoing testing) which version of the content you were served.</p>
          <p><strong><b>C.To Provide You with Service-Related Communications. </b></strong>We will send you administrative or account-related information to keep you updated about your account and the Services. Such communications may include information about Privacy Policy updates, confirmations of your account actions or transactions, security updates or tips or other relevant transaction-related information. We process your contact information to send you such communications. Service-related communications are not promotional in nature. You are not able to unsubscribe from such communications, otherwise you may miss important developments relating to your account or the Services.</p>
          <p>D.To Provide Customer Support or Respond to You. We collect any information that you provide to us when you contact us. Without your personal information, we cannot respond to you or ensure your continued use and enjoyment of the Services.</p>
          <p><strong><b>E.To Ensure the Security of the Services. </b></strong>We care about keeping you secure and safe while using our Services. Keeping you safe requires us to process your personal information, such as your device information, activity information and other relevant information. We use such information to combat spam, malware, malicious activities or security risks; improve and enforce our security measures; and to monitor and verify your identity so that unauthorized users do not gain access to your information. We cannot ensure the security of our Services if we do not process your personal information for security purposes.</p>
          <p><strong><b>F.To Enforce Compliance with Our Terms and Agreements or Policies. </b></strong>When you access or use our Services, you are bound to our Terms and Conditions. To ensure you comply with them, we process your personal information by actively monitoring, investigating, preventing and mitigating any alleged or actual prohibited, illicit or illegal activities on our Services. Subject to the applicable law, we may also process your personal information to: investigate, prevent or mitigate violations of our internal terms, agreements or policies and enforce our agreements with third parties and business partners.</p>
          <p><strong><b>G.To Maintain Legal and Regulatory Compliance. </b></strong>Our Services are subject to certain laws and regulations which may require us to process your personal information. For example, we process your personal information to pay our taxes, to fulfill our business obligations, ensure compliance with employment and recruitment laws or as necessary to manage risk as required under applicable law. Without processing your personal information for such purposes, we cannot perform the Services in accordance with our legal and regulatory requirements.</p>
          <ol start="4">
            <li><strong><b> Sharing Your Personal Information</b></strong></li>
          </ol>
          <p>Other than sharing your personal information so that you can use our Services, or as required or permitted by law, we do not share personal information about you with non-affiliated third parties. We may disclose your personal information as described below.</p>
          <p><strong><b>A.Within Our Corporate Organization. </b></strong>Bloom Chic&nbsp;is a part of a corporate organization that has several legal entities, business processes, management structures and technical systems. Bloom Chic&nbsp;may share your personal information within this organization to provide you with the Services and take actions based on your request.</p>
          <p>For example, we may share your personal information within our organization to facilitate payment processing.</p>
          <p><strong><b>B.Third Parties. </b></strong>We may share your personal information with third-party service providers acting on our behalf to help us operate our Services. Service providers and vendors provide us with support services such as credit card processing, website hosting, email and postal delivery, analytics services, conducting surveys and research, and performing network maintenance. These third parties can only use your data in accordance with our written instructions and must comply with the information security protections we have put in place.</p>
          <p><strong><b>C.To Maintain Legal and Regulatory Compliance. </b></strong>We have the right to disclose your personal information as required by law, or when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, court order, request from a regulator or any other legal process served on Bloom Chic. If there is a takeover, sale or purchase of our business, we may disclose your personal information to the new (or prospective) owner of the business.</p>
          <p><strong><b>D.Third Party Advertisers. </b></strong>In certain circumstances, and subject to the applicable law, we may share your personal information with third parties to market their products or services to you.</p>
          <p><strong><b>E.Co-Branded Services and Features. </b></strong>Portions of our Site or Services may be offered as part of co-branded services and features. We will share your personal information with our co-branded partners based on your voluntary use of or participation in a co-branded service or feature. The co-branded partners will be identified on the co-branded feature or service, along with an applicable co-branded partner's privacy policy. Use of your personal information by a co-branded partner will be subject to a co-branded partner’s privacy policy. If you wish to opt-out of a co-branded partner’s future use of your personal information, you will need to contact the co-branded partner directly.</p>
          <p>F.Consent. We may disclose your personal information for any purpose with your consent.</p>
          <ol start="5">
            <li><strong><b> Security Precautions</b></strong></li>
          </ol>
          <p>We maintain physical, electronic, and procedural safeguards designed to guard and prevent misuse of your personal information. Our security measures include industry-standard physical, technical and administrative measures to prevent unauthorized access to or disclosure of your information, to maintain data accuracy, to ensure the appropriate use of information, and otherwise safeguard your personal information. We restrict access to your non-public personal information to those employees and third parties who need such information to provide products or Services.</p>
          <p>Please recognize that protecting your personal information is also your responsibility. We ask you to be responsible for safeguarding your password, secret questions and answers and other authentication information you use to access our Services.</p>
          <p>If you feel that the security of your account or personal data has been compromised, please immediately contact us at following email address customerservice@bloomchic.com . Please be aware that, despite our best efforts, no security system is impenetrable. In the event of a security breach, we will promptly notify you and the proper authorities if required by law.</p>
          <ol start="6">
            <li><strong><b> Your Rights</b></strong></li>
          </ol>
          <p>We take reasonable steps to ensure that your personal information is accurate, complete, and up to date. You have the right to access, correct, or delete the personal information that we collect, subject to certain exceptions. To protect the privacy and the security of your personal information, we may request data from you to enable us to confirm your identity and right to access such data, as well as to search for and provide you with the personal data we maintain. There are instances where applicable laws or regulatory requirements allow or require us to refuse to provide or delete some or all of the personal information that we maintain. You may Contact Us to exercise your rights.</p>
          <ol start="7">
            <li><strong><b> Retention</b></strong></li>
          </ol>
          <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your personal information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.</p>
          <p>If you send us correspondence, including emails, we retain such information electronically in the records of your account. We will also electronically retain customer service correspondence and other correspondence from Bloom Chic to you. We retain these records to measure and improve our customer service and to investigate potential fraud and violations. We may, over time, delete these records as permitted by law.</p>
          <p>Bloom Chic will also retain Site and services usage data for internal analysis purposes. Usage data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Site, or we are legally obligated to retain this data for longer periods.</p>
          <ol start="8">
            <li><strong><b> Third-Party Websites</b></strong></li>
          </ol>
          <p>Our Site may contain links to third-party sites. This Privacy Policy does not apply to those third-party sites. We recommend that you read the privacy statements of any other sites that you visit as we are not responsible for the privacy practices of those sites.</p>
          <ol start="9">
            <li><strong><b> Children</b></strong></li>
          </ol>
          <p>Our Services are not directed to, and we do not knowingly collect personal information from, children under the age of 16. If you are under 16, please do not attempt to fill out our forms or send any personal information about yourself to us. If we become aware that a child under 16 has provided us with personal information, we will take steps to delete such information from our files.</p>
          <ol start="10">
            <li><strong><b> Notice for California Residents</b></strong></li>
          </ol>
          <p>This section applies only to California residents. Pursuant to the California Consumer Privacy Act of 2018, as amended (“CCPA”), below is a summary for the last twelve (12) months of the personal information categories, as identified and defined by the CCPA (see California Civil Code section 1798.140 (o)), that we collect, the reason we collect the personal information, where we obtain the personal information, and the third parties that we may share the personal information.</p>
          <p>We generally collect the following categories of personal information when you use our Services:</p>
          <ul>
            <li>
              <span></span>identifiers such as a name, address, unique personal identifier, email, phone number, your device’s IP address, software, and identification numbers associated with your devices;
            </li>
            <li>
              <span></span>commercial information such as records of products or services purchased, obtained, or considered by you;
            </li>
            <li>
              <span></span>Internet or other electronic information regarding you browsing history, search history, the webpage visited before you came to our Site, length of visit and number of page views, click-stream data, locale preferences, your mobile carrier, date and time stamps associated with transactions, and system configuration information;
            </li>
            <li>
              <span></span>your geolocation, to the extent you have configured your device to permit us to collect such information;
            </li>
            <li>
              <span></span>audio recordings of your voice to the extent you call us, as permitted under applicable law;
            </li>
            <li>
              <span></span>inferences about your preferences, characteristics, behavior and attitudes.
            </li>
          </ul>
          <p>We generally do not collect protected classifications about our users, biometric information, professional or employment-related information, or education-related information. For more information about the personal information we collect and how we collect it, please refer to sections 1 and 2 above.</p>
          <p>We collect your personal information for the business purposes described in section 3. The CCPA defines a “business purpose” as the use of personal information for the business’s operational purposes, or other notified purposes, provided the use of personal information is reasonably necessary and proportionate to achieve the operational purpose for which the personal information was collected or another operational purpose that is compatible with the context in which the personal information was collected.</p>
          <p>The categories of third parties with whom we may share your personal information are listed above in section 4, above.</p>
          <p>If you are a California resident, you have rights in relation to your personal information; however, your rights are subject to certain exceptions. For instance, Bloom Chic&nbsp;cannot disclose specific pieces of personal information if the disclosure would create a substantial, articulable, and unreasonable risk to the security of the personal information, your account with us or the security of our network systems. To assert your right to know or your right to delete your personal information, please contact us by email at customerservice@bloomchic.com . To confirm your identity, we may ask you to verify personal information we already have on file for you. If we cannot verify your identity based on the information we have on file, we may request additional information from you, which we will only use to verify your identity, and for security or fraud-prevention purposes.</p>
          <p><strong><b>Right Against Discrimination. </b></strong>You have the right not to be discriminated against for exercising any of the rights described in this section. We will not discriminate against you for exercising your right to know, delete or opt-out of sales.</p>
          <p><strong><b>Right to Know. </b></strong>You have the right to request in writing: (i) a list of the categories of personal information, such as name, address, email address, that a business has disclosed to third parties during the immediately preceding calendar year for the third parties' direct marketing purposes, and (ii) the names and addresses of all such third parties. In addition, you have the right to request: (i) the categories of personal information we have collected about you, (ii) the categories of sources from which personal information is collected, (iii) the business or commercial purpose for the information collection, (iv) the categories of third parties with whom we have shared personal information, and (v) the specific pieces of personal information we hold about an individual. You have the right to request a copy of the specific personal information we collected about you during the 12 months before your request.</p>
          <p><strong><b>Right to Delete.</b></strong>&nbsp;You have the right to request us delete any personal information we have collected from you or maintain about you, subject to certain exceptions.</p>
          <p>Right to Opt-Out of Selling. You have the right to opt-out of having your personal information sold. We do not sell your personal information. The CCPA broadly defines “personal information” and “selling” such that sharing identifiers linked to you for a benefit may be considered a sale. In 2019, we were sharing identifiers and inferences about you with our partners, third parties and affiliates in such a way that, under the CCPA, may be defined as selling. As noted above, you have the right to know the categories of personal information that we sold about you and the categories of third parties with whom we shared such information.</p>
          <p>In addition, California Civil Code Section 1798.83 permits customers of Bloom Chic who are California residents to request certain information regarding our disclosure of personal information to third-parties for their direct marketing purposes. In your request, please specify that you want a “California Shine the Light Notice.” Please allow 30 days for a response. To make the request, please click "Do Not Sell My Personal Information" .</p>
          <p><strong><b>Right to Opt-Out of Selling.</b></strong>&nbsp;You have the right to opt-out of having your personal information sold. We do not sell your personal information. The CCPA broadly defines “personal information” and “selling” such that sharing identifiers linked to you for a benefit may be considered a sale. In 2019, we were sharing identifiers and inferences about you with our partners, third parties and affiliates in such a way that, under the CCPA, may be defined as selling. As noted above, you have the right to know the categories of personal information that we sold about you and the categories of third parties with whom we shared such information.</p>
          <p>In addition, California Civil Code Section 1798.83 permits customers of Bloom Chic who are California residents to request certain information regarding our disclosure of personal information to third-parties for their direct marketing purposes. In your request, please specify that you want a “California Shine the Light Notice.” Please allow 30 days for a response.</p>
          <ol start="11">
            <li><strong><b> Notice to Individuals in the European Economic Area, the United Kingdom and Switzerland</b></strong></li>
          </ol>
          <p>This section only applies to individuals using or accessing our Service while located in the European Economic Area, the United Kingdom, or Switzerland (collectively, the “European Countries”) at the time of data collection. Pursuant to the EU’s General Data Protection Regulation (GDPR), personal information is referred to as personal data. For the sake of clarity references to personal information in this Policy concerns personal data in the sense of the GDPR.</p>
          <p>We may ask you to identify which country you are located in when you use or access some of the Services, or we may rely on your IP address to identify which country you are located in. When we rely on your IP address, we cannot apply the terms of this section to any individual that masks or otherwise hides their location information from us so as not to appear located in European Countries. If any terms in this section conflict with other terms contained in this Policy, the terms in this section shall apply to individuals in a European Country.</p>
          <p><strong><b>Our Relationship to You. </b></strong>Your personal information is collected and processed by Shine Yee Technology Hongkong Limited, Incorporated in HongKong, which is operating the website and the sale of Bloom Chic brand products. In other words, Shine Yee Technology Hongkong Limited. is the Controller of the data. This means that we are responsible for processing and protecting your personal data.</p>
          <p><strong><b>Legal Bases for Processing Your Personal Information. </b></strong>We rely on the following legal bases under the GDPR in processing your personal information.</p>
          <p>Our legal basis to process personal information for the following sections of this Privacy Policy is your consent.</p>
          <ul>
            <li>
              <span></span>Section 2 In relation to mobile Advertising and third-party advertising and analytics cookies, that collect your personal information, as described in that Section.
            </li>
            <li>
              <span></span>Section 4(D) Third Party Advertisers
            </li>
            <li>
              <span></span>Section 4(F) Consent
            </li>
          </ul>
          <p>Our legal basis to process personal information for the following sections of this Privacy Policy is to provide our Services to you. Our processing is based on our contract obligations or to take steps at the request of the individual prior to entering into a contract.</p>
          <ul>
            <li>
              <span></span>Section 3(A) To Provide You Our Services
            </li>
            <li>
              <span></span>Section 3(C) To Provide You with Service-Related Communications
            </li>
            <li>
              <span></span>Section 3(D) To Provide Customer Support or Respond to You
            </li>
            <li>
              <span></span>Section 4(A) Within Our Corporate Organization
            </li>
            <li>
              <span></span>Section 4(B) Third Parties
            </li>
            <li>
              <span></span>Section 4(E) Co-Branded Services or Features
            </li>
          </ul>
          <p>Our legal basis to process personal information for the following sections of this Privacy Policy is our legitimate interest to better understand you, to maintain and improve the accuracy of the information we store about you, and to better promote or optimize our Services.</p>
          <ul>
            <li>
              <span></span>Section 3(B) For Internal Use
            </li>
          </ul>
          <p>Our legal basis to process personal information for the following sections of this Privacy Policy is to comply with our legal obligations, or your vital interest.</p>
          <ul>
            <li>
              <span></span>Section 3(E) To Ensure the Security of the Services
            </li>
            <li>
              <span></span>Section 3(F) To Enforce Compliance with Our Terms and Agreements or Policies
            </li>
            <li>
              <span></span>Section 3(G) To Maintain Legal and Regulatory Compliance
            </li>
            <li>
              <span></span>Section 4(C) To Maintain Legal and Regulatory Compliance
            </li>
          </ul>
          <p><strong><b>Marketing.</b></strong>&nbsp;We will only contact you if you are located in a European Country by electronic means (including email or SMS) based on our legitimate interests, as permitted by applicable law or your consent. If you do not want us to use your Personal Information in this way, please click the unsubscribe link at the bottom of any of our email messages to you or contact us at customerservice@bloomchic.com. You can object to direct marketing at any time and free of charge.</p>
          <p><strong><b>Individual Rights. </b></strong>We provide you with the rights described below when you use our Services. We may limit your individual rights requests: (a) where denial of access is required or authorized by law; (b) when granting access would have a negative impact on other’s privacy; (c) to protect our rights and properties; or (d) where the request is frivolous or unrealistic. If you would like to exercise your rights under applicable law, please contact us at customerservice@bloomchic.com .</p>
          <ul>
            <li>
              <span></span>You can request access or deletion of your personal information, subject to certain exceptions.
            </li>
            <li>
              <span></span>You can correct or update your personal information, object to processing of your personal information, ask us to restrict processing your personal information or request portability of your personal information.
            </li>
            <li>
              <span></span>If we collected and processed your personal information with your consent, then you can withdraw your consent at any time. Withdrawing your consent will not affect the lawfulness of the processing we conducted prior to your withdrawal, nor will it affect processing of your personal information conducted in reliance on lawful processing grounds other than consent.
            </li>
            <li>
              <span></span>You have the right to complain to a data protection authority about our collection and use of your personal information.
            </li>
          </ul>
          <p>If you believe we have infringed or violated your privacy rights, please contact us at customerservice@bloomchic.com so that we may resolve your dispute directly.</p>
          <p>Transfer of Your Personal Information. When you access or use our Services, your personal information may be processed or transferred outside the EEA, including to the United States, China and/or Singapore. Such countries or jurisdictions may have data protection laws that are less protective than the laws of the jurisdiction in which you reside. For these transfers we rely on appropriate safeguards as permitted under the GDPR such as Standard Contractual Clauses, and/or we transfer the personal information pursuant to Article 49 (1) (b) GDPR to provide our Services pursuant to the Terms &amp; Conditions. If you do not want your information transferred to, processed, or maintained outside of the country or jurisdiction where you are located, you should immediately stop accessing or using the Services. For further details about these transfers and the safeguards that we use to facilitate such transfers, contact us at customerservice@bloomchic.com .</p>
          <ol start="12">
            <li><strong><b> Contact Us</b></strong></li>
          </ol>
          <p>If you have questions or concerns regarding any information in this Privacy Policy, please contact us by email at customerservice@bloomchic.com . You can also contact us via Livechat at our Site.</p>
          <p>&nbsp;</p>
        </div>

      </div>
    </div>

    <div class="info_box"
         v-else-if="type==4">
      <div class="info_text">
        We promise to process your return request on the items you ordered from us without any question asked. Please raise up your return/refund request with 20 days after received the item, you can learn the details about return instructions and the steps.
      </div>
      <div class="info_text">
        Please review our return policies and instructions in its entirety to ensure a smooth and easy return process. For any question, please feel free to contact us at 115293111631@qq.com
      </div>

      <!-- <div class="info_btn" @click="toHome">CONTINUE</div> -->
    </div>

    <div class="info_box"
         v-else-if="type==5">
      <div class="info_storg">Terms of use</div>
      <div class="info_text">
        Please read through them carefully before placing your order. By using this website and/or placing an order, you agree to be bound by the terms and conditions set out below. Please also read our Privacy Policy regarding personal information provided by you.
      </div>
      <div class="info_text">
        Copyright
      </div>
      <div class="info_text">
        The entire content included in this site, including but not limited to text,graphics or code is copyrighted as a collective work under copyright laws, and is the property of lianlian.com. The collective work includes works that are licensed to lianlian.com. Permission is granted to electronically copy and print hard copy portions of this site for the sole purpose of placing an order with lianlian.com or purchasing lianlian.com products. You may display and, subject to any expressly stated restrictions or limitations relating to specific material, download or print portions of the material from the different areas of the site solely for your own non-commercial use, or to place an order with lianlian.com or to purchase lianlian.com products. Any other use, including but not limited to the reproduction, distribution, displayed transmission of the content of this site is strictly prohibited, unless authorized by lianlian.com.You further agree not to change or delete any proprietary notices from materials downloaded from the site.
      </div>
      <div class="info_text">
        Limitation of liability
      </div>
      <div class="info_text">
        lianlian.com shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if lianlian.com has been advised of the possibility of such damages. Applicable law may not allow the limitation of exclusion of liability or incidental or consequential damages, so the above limitation or exclusion may not apply to you.
      </div>
      <div class="info_text">
        Termination
      </div>
      <div class="info_text">
        These terms and conditions are applicable to you upon your accessing the site and/or completing the registration or shopping process. These terms and conditions, or any part of them, maybe terminated by lianlian.com without notice at any time, for any reason. Any termination of this Agreement shall not affect the respective rights and obligations (including without limitation,payment obligations) of the parties arising before the date of termination.
      </div>
      <div class="info_text">
        Use of site
      </div>
      <div class="info_text">
        Harassment in any manner or form on the site, including via e-mail, chat, or by use of obscene or abusive language, is strictly forbidden. Impersonation of others, including a lianlian.com or other licensed employee, host, or representative, as well as other members or visitor son the site is prohibited.You may not upload to, distribute, or otherwise publish through the site any content which is libelous, defamatory, obscene, threatening, invasive of privacy or publicity rights, abusive, illegal, or otherwise objectionable which may constitute or encourage a criminal offense, violate the rights of any part tor which may otherwise give rise to liability or violate any law. You may not upload commercial content on the site or use the site to solicit others to join or become members of any other commercial online service or other organization.
      </div>
      <div class="info_text">
        Links
      </div>
      <div class="info_text">
        In an attempt to provide increased value to our visitors, lianlian.com may link to sites operated by third parties. However, even if the third party's affiliated with lianlian.com, lianlian.com has no control over the linked sites, all of which have separate privacy and data collection practices,independent of lianlian.com.
      </div>
      <div class="info_text">

      </div>
      <div class="info_text">

      </div>
      <!-- <div class="info_btn" @click="toHome">CONTINUE</div> -->
    </div>

    <div class="info_box"
         v-else-if="type==6">
      <div class="info_text">
        If you want to become our wholesaler in your local place, please send us your company's information and related certifications. We'll offer 30% discount for all the products.
      </div>
      <br>
      <br>
      <br>
      <div class="info_text">
        Meanwhile, you will get sales protection in your local place that we won't cooperate with other wholesalers there.
      </div>
      <br>
      <br>
      <br>
      <div class="info_text">
        Please contact us ASAP if you want ! Contact by our email: 115293111631@qq.com
      </div>

      <div class="info_text">

      </div>

      <!-- <div class="info_btn" @click="toHome">CONTINUE</div> -->
    </div>
    <div class="info_box"
         v-else-if="type==7">
      <!-- <div class="info_contact">Our Email:</div> -->
      <div class="info_text"
           style='width:100%;border:1px solid #666;height:40px;line-height:40px;border-radius:4px;'>
        Email: 115293111631@qq.com
      </div>

      <div class="info_input_title">Contact Form</div>

      <div class="info_contact info_contant_addClass"> <span>First Name: </span>
        <div class="info_input">
          <el-input v-model="name"></el-input>
        </div>
      </div>

      <div class="info_contact info_contant_addClass"> <span>Email Address:</span>
        <div class="info_input">
          <el-input v-model="address"></el-input>
        </div>
      </div>

      <div class="info_contact info_contant_addClass"><span>Enquiry: </span>
        <div class="info_input">
          <el-input type="textarea"
                    :autosize="{ minRows: 10, maxRows: 10}"
                    v-model="textarea">
          </el-input>
        </div>

      </div>

      <div class="info_btn"
           @click="toHome">Continue</div>
    </div>
    <div class="info_box"
         v-else-if="type==8">

      <div class="grid">
        <div class="grid__item medium-up--three-quarters medium-up--push-one-eighth">

          <header class="section-header">
            <h1 class="section-header__title">Return Policy</h1>
          </header>

          <div class="rte rte--nomargin">
            <p>Our simple and efficient return policy allows for a hassle-free online shopping experience!</p>
            <p>&nbsp;</p>
            <p><strong><b>HOW LONG DO I HAVE BEFORE MAKING A RETURN?&nbsp;</b></strong></p>
            <div data-zone-id="0"
                 data-line-index="0">You have a <strong>max of 60 days</strong> from the purchase date to make returns. <br>You must send back and postmark your return packages within 60 days after the purchase date. No returns made after 60 days from the purchase date will be accepted.</div>
            <p>&nbsp;</p>
            <p><strong><b>HOW CAN I MAKE A RETURN?</b></strong></p>
            <p>STEP 1: Contact BloomChic customer service team.<br>Tell them which item(s) you want to return and why you want to return(wrong size, don't like it, or don't need anymore, etc)</p>
            <p><span><a href="#">115293111631@qq.com</a></span></p>
            <p>STEP 2: Follow instructions from our team.</p>
            <p>&nbsp;</p>
            <p><strong><b>DO I HAVE TO PAY FOR THE RETURN?</b></strong></p>
            <p>We are glad to provide&nbsp;FREE&nbsp;shipping on your&nbsp;FIRST RETURN&nbsp;for any orders!</p>
            <p>Please use the shipping label we provide to make your return, as all other methods will not be refunded. Simply postmark the package and send it within 60 days<span>&nbsp;after the purchase date.</span></p>
            <p>After your first complementary&nbsp;return, all shipping fees for additional returns are your responsibility.</p>
            <p>There are two options for additional returns:</p>
            <p>① You can use the shipping label we provided and&nbsp;the return shipping fee will be deducted from your refund.</p>
            <p>② You can opt to use your own shipping method at your own cost.</p>
            <p>&nbsp;</p>
            <p><strong><b>CAN I STILL RETURN ITEMS IF THEY ARE WORN, DAMAGED, OR HAVE THE TAGS REMOVED?</b></strong></p>
            <p>We do not accept worn or damaged items that are missing the original tags.</p>
            <ol>
              <li>You can only return items that are unworn, unwashed, undamaged, with the original tags/packaging attached.</li>
              <li>The following items cannot be returned or exchanged: bodysuits, lingerie, jewelry, beauty products, underwear, swimwear, and accessories (except scarves, bags, hats).</li>
              <li>Items with non-returnable marks and free gifts can not be returned.</li>
              <li>FINAL SALE items cannot be returned or exchanged.</li>
            </ol>
            <p>Important Note:</p>
            <ol>
              <li>Please do not send your item(s) to the sender's address listed on your package. This is not the return address and will delay the processing of your return &amp; refund. Please make sure to send your return to the address on the shipping label provided, even if you are choosing to use your own shipping method when you make additional returns.</li>
              <li>Please make sure you have not included non-BloomChic item(s) by accident in your return package. We will not be responsible for sending those items back to you.</li>
            </ol>
            <p><strong><b>&nbsp;</b></strong></p>
            <p><strong><b>REFUNDS</b></strong></p>
            <p>We do everything in our power to ensure a speedy refund!</p>
            <ol>
              <li>
                <span></span>Refunds will be processed within <strong><b>7 days&nbsp;</b></strong>after we receive your package, and will be issued to the<strong><b>&nbsp;original method</b></strong>&nbsp;of payment.
              </li>
            </ol>
            <p>*Currently, due to COVID restrictions, it is possible to take an additional 3-5 days to process your refund. We appreciate your patience and understanding!</p>
            <ol start="2">
              <li>The original shipping fee and insurance are non-refundable.</li>
            </ol>
            <p><strong><b>NOTE:</b></strong>&nbsp;If there are any issues with your return, please contact Customer Service within 180 days after placing your order.</p>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>

import loginList from './loginList.vue'
import top from './top'
export default {

  components: {
    loginList,
    top,
  },

  data () {
    return {
      type: 0,
      titleArr: ['About Us', 'Delivery Information', 'Privacy Policy', 'Returns and Exchanges', 'Terms of use', 'Wholesale Policy', 'Contact Us', 'Product Returns', 'Purchase a Gift Certificate'],
      titleName: '',
      name: "",
      name2: '',
      name3: '',
      name4: '',
      name5: '',
      name6: '',
      code: '',
      quantity: '',
      address: '',
      address2: '',
      address3: '',
      address4: '',
      phone: '',
      orderId: '',
      date: '',
      textarea: '',
      textarea2: '',
      radio: '1',
      radio2: '1',
      radio3: '1',
      amount: '25.00',
    }
  },
  created () {
    let type = this.$route.query.type
    this.type = type
    this.titleName = this.titleArr[Number(type) - 1]
  },
  methods: {
    toHome () {

    }
  }

}
</script>

<style lang='scss' scoped>
@import "../style/theme.scss";
.information {
  width: 100%;
  line-height: 1.6;
  text-align: left;
  color: #000;
  font-size: 13px;
  .info_box {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    min-height: 600px;
    padding: 0 250px;
  }
  .rte {
    > p {
      font-weight: 500;
      margin-bottom: 25px;
    }
    > ol {
      padding: 0 0 15px 15px;
    }
  }
  .row {
    .col-md-9 {
      padding-left: 0;
      .col_form {
        // display: flex;
        // justify-content: space-between;
        // .col_left,.col_right{
        //     width:50%;

        // }
      }
      // .col_list_input{
      //     display: flex;
      //     width:100%;
      //     align-items: center;
      //     padding:15px 0;
      //     .list_info_text{
      //         width:300px;
      //     }
      //     .list_info_input{
      //         width:200px;
      //     }
      // }
    }
    .row_box {
      // width:100%;
      // display: flex;
      // flex-wrap: wrap;

      .col_box {
        //   width:33%;
      }
    }
  }
}
.login_title {
  display: flex;
  align-items: center;
  padding: 30px 0 10px 0;
  .title_name {
    font-size: 30px;
    margin-right: 15px;
    color: #000;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
  }
}
.info_contact {
  // font-weight: bold;
}
.info_contant_addClass,
.col_list_input {
  display: flex;
  line-height: 20px;
  font-weight: 100;
  font-size: 12px;
  justify-content: flex-end;
  > span,
  .list_info_text {
    position: relative;
    &::after {
      content: "*";
      color: red;
      position: absolute;
      left: -10px;
    }
  }
}
.info_input_title {
  font-size: 18px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #333;
  position: relative;
  &:after {
    content: "";
    height: 1px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    background: #e5e5e5;
  }
}
.info_input {
  // width:200px;
  padding-left: 10px;
  // flex:1;
  width: 85%;
  padding-bottom: 30px;
}
.info_storg {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 17px;
  color: #000;
}
.info_text {
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 29px;
  color: #000;
}
.info_title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-top: 10px;
}
.info_btn {
  background: #222;
  padding: 17px 25px;
  font-size: 12px;
  // font-weight: bold;
  color: #fff;
  font-size: 16px;
  margin-bottom: 50px;
  align-self: flex-end;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background: rgb(9, 9, 9);
  }
}
</style>