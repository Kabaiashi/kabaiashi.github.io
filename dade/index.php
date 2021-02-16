<!--FORM DATA TO BE SENT TO EMAIL-->
<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['question'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $question = $_POST['question'];
  $to = 'dshchegolkov@gmail.com';
  $subject = "New Request";
  $body = '<html>
               <body>
                   <h2>Request from sitefiller.com</h2>
                   <hr>
                   <p>Name:<br>'.$name.'</p>
                   <p>Email:<br>'.$email.'</p>
                   <p>Question:<br>'.$question.'</p>
               </body>
           </html>';
      
    // headers
    $headers  = "From: ".$name." <".$email.">\r\n";
    $headers .= "Reply-To: ".$email."\r\n";
    $headers .= "NINE-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8";

    //send
    $send = mail($to, $subject, $body, $headers);
    // if ($send) {
    //   echo '<br>';
    //   echo 'Thanks for contacting us. We will get in touch with you shortly.';
    // } else {
    //   echo 'error';
    // }
    }
?>
<!--FORM TO EMAIL END-->


<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165267467-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-165267467-1');
  </script>

  <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
  <link rel="stylesheet" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="./css/main.css">
  <title>Customized websites with 30% higher conversions and optimized content</title>
  <meta charset="utf-8">
  <meta name="description" content="Sitefiller helps you to present yourself and attract new clients online. We create landing page, website or online shop,
  and fill them with a tailored content.">
  <meta name="keywords" content="single page website, landing page, personal trainer website, high converting landing page,
                                professional website design cost, custom web development services, custom built website, setting up a website to sell products,
                                setting up an ecommerce website, setting up a retail website">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <script src='https://www.google.com/recaptcha/api.js'></script>  -->
</head>
<body>
  <header class="site-header" id="home">
    <nav class="site-navigation">
      <ul class="site-navigation__list">
        <li class="site-navigation__item"><a href="#portfolio" class="site-navigation__link js-smooth-nav">Portfolio</a></li>
        <li class="site-navigation__item"><a href="#pricing" class="site-navigation__link js-smooth-nav">Pricing</a></li>
        <li class="site-navigation__item"><a href="#contact" class="site-navigation__link">Contacts</a></li>
      </ul>
    </nav>
    <div class="site-header__visual">
      <div class="visual-layer visual-layer--top"></div>
      <div class="visual-layer visual-layer--middle"></div>
      <div class="visual-layer visual-layer--bottom"></div>
    </div>
    <div class="site-header__heading">
      <h1 class="heading-title">Website<br/><span>+</span><br/>content</h1>
      <h2 class="heading-subtitle">
        <span>for your business</span>
      </h2>
      <div class="logo">
        <img src="./img/Sitefiller__logo.png" alt="Sitefiller logo" class="logo__img">
      </div>
    </div>
  </header>
  <div class="site-container">
    <section class="section-about" id="about">
      <div class="section-about__description">
        <p class="fade">Hello, world!<br/>
          We specialize in Website design and content creation.<br /><br />
          Partner with us for the success of your business.<br /><br />
          Provide us with a description of your business product and target clientele,<br />
          and we will help you create an appealing customized website with specific content,
          designed to grow and develop your business with new clients, and greater market share.
        </p>
      </div>
    </section>
    <div class="result fade-in fade">
      <h4 class="moto">Result</h4>
      <p>Let the world see the quality of your business in your web page.</p>
    </div>
    <section class="section-portfolio" id="portfolio">
      <h3 class="section-header fade">Portfolio</h3>
      <h4 class="fade">Select from our 3 basic products to best fit your business need</h4>
      <div class="grid-gallery" id="portfolio-grid">
        <ul class="grid-gallery__list grid-gallery__list--portfolio">
          <li class="grid-gallery__item grid-gallery__item--portfolio">
            <figure>
              <picture>
                <source srcset="./img/landing-page--big.jpg, ./img/landing-page--big.jpg 2x" media="(min-width: 600px) and (max-width: 899px)">
                <img srcset="./img/landing-page--small.jpg, ./img/landing-page--big.jpg 2x" alt="Landing page screenshot" loading="lazy">
              </picture>
              <figcaption><strong>Landing Page</strong><br/>Simple and attractive online page to present yourself and invite your clients to contact you<br/>
                <a href="#" class="portfolio__link js-link" rel="http://solvid.co" target="_blank">Go to</a>
              </figcaption>
            </figure>
          </li>
          <li class="grid-gallery__item grid-gallery__item--portfolio">
            <figure>
              <picture>
                <source srcset="./img/website--big.jpg, ./img/website--big.jpg 2x" media="(min-width: 600px) and (max-width: 899px)">
                <img srcset="./img/website--small.jpg, ./img/website--big.jpg 2x" alt="Website screenshot" loading="lazy">
              </picture>
              <figcaption><strong>Multiple page sites</strong><br/>Convenient and sophisticated online product to communicate with your customers<br/>
                <a href="#" class="portfolio__link js-link" rel="https://kabaiashi.github.io/spa" target="_blank">Go to</a>
              </figcaption>
            </figure>
          </li>
          <li class="grid-gallery__item grid-gallery__item--portfolio">
            <figure>
              <picture>
                <source srcset="./img/online-shop--big.jpg, ./img/online-shop--big.jpg 2x" media="(min-width: 600px) and (max-width: 899px)">
                <img srcset="./img/online-shop--small.jpg, ./img/online-shop--big.jpg 2x" alt="Online shop screenshot" loading="lazy">
              </picture>
              <figcaption><strong>Online shop</strong><br/>Easy navigation system to present and sell your product online<br/>
                <a href="#" class="portfolio__link js-link" rel="https://kabaiashi.github.io/starClothes/dist/" target="_blank">Go to</a>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
    <section class="section-advantages" id="advantages">
      <h3 class="section-header fade">Our advantages</h3>
      <div class="grid-gallery">
        <ul class="grid-gallery__list grid-gallery__list--advantages">
          <li class="grid-gallery__item grid-gallery__item--advantages fade">
            <h4>Speed</h4>
            <p>We create your site from scratch as fast as you you would do it using popular site constructors, but at the end you get
            flexible system that will grow together with your business, which is not possible when using the site constructor.
            </p>
          </li>
          <li class="grid-gallery__item grid-gallery__item--advantages fade">
            <h4>Design</h4>
            <p>Our sites are compact, logical, easy navigated and attractive. In case you need it our designer will additionally create
            a logo and help with brand creation for your business.
            </p>
          </li>
          <li class="grid-gallery__item grid-gallery__item--advantages fade">
            <h4>Communication</h4>
            <p>We connect your site with the needed communication channel so you will get and react your clients requests instantly.
            The same happens with the payment system - after integration you will get the payment just minutes after the order to your
            bank account. 
            </p>
          </li>
          <li class="grid-gallery__item grid-gallery__item--advantages fade">
            <h4>Analytics</h4>
            <p>We connect your web site to Google Analytics, so you are able to evaluate your site visitors activity at any 
              time.</p>
          </li>
          <li class="grid-gallery__item grid-gallery__item--advantages fade">
            <h4>CRM</h4>
            <p>We integrate client relationship management systems into websites upon request if you need to analyze your sales
            statistics, manage your offline orders and work with your clients bases.</p>
          </li>
          <li class="grid-gallery__item grid-gallery__item--advantages fade">
            <h4>SEO</h4>
            <p>We include basic settings of searching engines optimization when creating your site that makes you visible in search
            systems. In case you need more advanced SEO tools we are happy to help.</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="section-pricing" id="pricing">
      <h3 class="section-header fade">Services and fees</h3>
      <div class="grid-gallery">
        <ul class="grid-gallery__list grid-gallery__list--pricing">
          <li class="grid-gallery__item grid-gallery__item--pricing">
            <h5 class="item-heading">Landing page with content</h5>
            <div class="item-content">
              <div class="sample">for example like <a href="#" class="js-link" rel="http://solvid.co" target="_blank">this</a> one</div>
              <span class="price">from EUR 230</span>
              <span class="timing">1 week</span>
              <a href="#calc-sample" class="fee-calc">Fee calculation sample</a>
              <a href="#contact" class="cta btn btn--hovered btn--shadowed">Contact</a>
            </div>
          </li>
          <li class="grid-gallery__item grid-gallery__item--pricing">
            <h5 class="item-heading">Multi-page site or online shop with content </h5>
            <div class="item-content">
              <div class="sample">for example like <a href="#" class="js-link" rel="https://kabaiashi.github.io/starClothes/dist/" target="_blank">this</a> one</div>
              <span class="price">from EUR 380</span>
              <span class="timing">from 2 weeks</span>
              <a href="#calc-sample" class="fee-calc">Fee calculation sample</a>
              <a href="#contact" class="cta btn btn--hovered btn--shadowed">Contact</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section-faqs">
      <div class="accordion-wrapper">
        <button class="accordion">What is included?</button>
        <div class="panel">
          <ul class="panel__list">
            <li class="panel__item">Site structure development</li>
            <li class="panel__item">Texts based on your target audience analysis</li>
            <li class="panel__item">Appropriate photos search in photo banks</li>
            <li class="panel__item">Desktop and mobile phone versions of your site</li>
            <li class="panel__item">Communication channels connection</li>
            <li class="panel__item">Online payment system connection</li>
            <li class="panel__item">Domain connection</li>
            <li class="panel__item">Google analytics connection</li>
            <li class="panel__item">Instructions for your site editing</li>
            <li class="panel__item">3 month technical support after site go-live</li>
          </ul>
        </div>
        <button class="accordion">What is excluded?</button>
        <div class="panel">
          <ul class="panel__list">
            <li class="panel__item">Photos purchase from photo-banks, photo shooting arrangements</li>
            <li class="panel__item">Advanced SEO tools installation</li>
            <li class="panel__item">Logo and brand creation</li>
            <li class="panel__item">Domain registration</li>
            <li class="panel__item">CRM installation</li>  
          </ul>
        </div>
      </div>
    </section>
    <section class="section-conditions">
      <h3 class="section-header fade">Terms and warranties</h3>
      <div class="slider-box" id="conditions">
        <div class="slick-slider">
          <div class="slick-slider__item">
            <h4 class="item-heading">We provide</h4>
            <div class="item-content">
              <ul>
                <li>Ready site with texts and technical settings available in desktop and mobile versions</li>
                <li>Instruction on site editing with timecodes for any issue</li>
                <li>Full access to the site</li>
              </ul>
            </div>
          </div>
          <div class="slick-slider__item">
            <h4 class="item-heading">We guarantee</h4>
            <div class="item-content">
              <ul>
                <li>Fixed price for site creation (if you do not change the technical instructions during the development period)</li>
                <li>On time and in full site creation</li>
                <li>3 months advisory support after the site go-live</li>
              </ul>
            </div>
          </div>
          <div class="slick-slider__item">
            <h4 class="item-heading">You will need to</h4>
            <div class="item-content">
              <ul>
                <li>Plan some work with your site in your calendar</li>
                <li>Pay 25% deposit to book time for your site creation</li>
                <li>Make comments and approve the final version of the site</li>
                <li>Make ontime payments</li>
              </ul>
            </div>
          </div>
          <div class="slick-slider__item">
            <h4 class="item-heading">You are responsible for</h4>
            <div class="item-content">
              <ul>
                <li>You provide information and support materials about your product, comments and realise the payments.</li>
                <li>In case of delay from your side at any stage the 25% deposit is not refundable, if all obligations are met - it is
                included in total cost.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-process" id="process">
      <h3 class="section-header fade">Process</h3>
      <div class="grid-gallery">
        <ul class="grid-gallery__list grid-gallery__list--process">
          <li class="grid-gallery__item grid-gallery__item--process from-left fade">
            <span>1</span>
            <h4>Briefing</h4>
            <p>We discuss your future site, its functionality, timelines and cost</p>
          </li>
          <li class="grid-gallery__item grid-gallery__item--process from-right fade">
            <span>2</span>
            <h4>Booking</h4>
            <p>You make a 25% deposit to book time for site creation</p>
          </li>
          <li class="grid-gallery__item grid-gallery__item--process from-left fade">
            <span>3</span>
            <h4>Downpayment and materials</h4>
            <p>You provide a 50% advance payment and the agreed supporting materials</p>
          </li>
          <li class="grid-gallery__item grid-gallery__item--process from-right fade">
            <span>4</span>
            <h4>Presentation</h4>
            <p>We create and present the initial site version according to the technical brief.
               You provide your comments within 3 business days.</p>
          </li>
          <li class="grid-gallery__item grid-gallery__item--process from-left fade">
            <span>5</span>
            <h4>Approval</h4>
            <p>We apply your comments and present the final version of the site.
               You make your final comments or approve the site within 3 working days.</p>
          </li>
          <li class="grid-gallery__item grid-gallery__item--process from right fade">
            <span>6</span>
            <h4>Access</h4>
            <p>We complete the technical setting, create instructions.
            You make the final payment.
            We give you a full access to the site. From this moment you have the possibility to change the photos, descriptions,
            prices and contact information yourself.</p>
          </li>
        </ul>
      </div>
    </section>

    <div class="popup" id="calc-sample">
      <a href="#pricing" class="popup__close">&times;</a>
      <div class="page">
        <div class="page__content">
          <h4 class="page__heading">How is the cost calculated?</h4>
          <p class="page__text">The site cost depends on the additional services and language versions</p>
          <ul class="page__list">
            <li class="list-item">The main page and technical settings of the website - EUR 230</li>
            <li class="list-item">Additional product/service description (in online shop) - EUR 10 (each)</li>
            <li class="list-item">New language version - 50% of the website cost (each, translation cost excluded)</li>
            <li class="list-item">Translation to a foreign language - 20% of the website cost (each)</li>
          </ul>
          <h5 class="page__subheading">Example 1. A company provides 5 types of services. It needs a website in English.</h5>
          <p class="page__subtext">Cost calculation:</p>
          <ul class="page__sublist">
            <li class="sublist-item">The main page and technical settings of the website - EUR 230</li>
            <li class="sublist-item">Cards for 5 services - EUR 50 (EUR 10 * 5)</li>
          </ul>
          <p class="page__subtext"><strong>Total: EUR 280</strong></p>
          <h5 class="page__subheading">Example 2. A company provides 1 type of services. It needs a website in English and French.</h5>
          <p class="page__subtext">Cost calculation:</p>
          <ul class="page__sublist">
            <li class="sublist-item">The main page and technical settings of the website - EUR 230</li>
            <li class="sublist-item">New language (French) version of the website - EUR 115 (EUR 230 * 50%)</li>
            <li class="sublist-item">Translation to a foreign (French) language - EUR 46 (EUR 230 * 20%)</li>
          </ul>
          <p class="page__subtext"><strong>Total: EUR 391</strong></p>
          <p class="page__text">If you provide your own translation, you pay only for creating a new language version of the website.
            If you don't know what structure to choose for your website, contact us and we will help you to define the structure and
            calculate the cost.
          </p>
          <a href="#contact" class="btn btn--hovered btn--shadowed">Contact</a>
        </div>
      </div>
    </div>

    <div class="popup" id="contact">
      <a href="#portfolio-grid" class="popup__close">&times</a>
      <div class="section-contact">
        <div class="contact">
       <div class="contact__text">
       <h3 class="contact__heading">Contact us</h3>
         <div class="contact__details">
           <ul class="contact__list">
             <li class="contact__list-item"><a href="mailto:contact@sitefiller.com" class='link link--mail'>contact@sitefiller.com</a></li>
             <li class="contact__list-item"><a href="https://wa.me/34658258470/" class='link link--wa'><i class="social__icon fa fa-whatsapp"></i></a></li>
           </ul>
        </div>
      </div>

       <div class="contact__form">
        <form action="" class="form recaptchaForm" method="post">
          <div class="form__group">
            <input type="text" name="name" class="form__input" placeholder="Full Name" required id="name">
            <label for="name" class="form__label">Full Name</label>
          </div>
          <div class="form__group">
            <input type="email" name="email" class="form__input form__input--email" placeholder="Email" required
              id="email">
             <label for="email" class="form__label form__label--email">Email</label>
          </div>
          <div class="form__group">
            <textarea name="question" class="form__input form__input--text"
              placeholder="Put your question here" required id="text"></textarea>
            <label for="text" class="form__label form__label--text">Put your question here</label>
          </div>
          <!--<div class="form__group">
             <div class="recaptcha">
               <div class="g-recaptcha" data-sitekey="6Leqw8AUAAAAAM2DGrNTcNvQkTRYkZD-wR2duseU "></div>
             </div>
           </div>-->
          <div class="form__group">
            <button type="submit" class="form__btn btn btn--rounded btn--shadowed btn--hovered">Send</button>
          </div>
        </form>
      </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="main-footer">
    <div class="main-footer__primary-navigation">
      <div class="navigation">
        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item"><a href="#about" class="navigation__link">about</a></li>
            <li class="navigation__item"><a href="#portfolio" class="navigation__link">portfolio</a></li>
            <li class="navigation__item"><a href="#pricing" class="navigation__link">pricing</a></li>
            <li class="navigation__item"><a href="#advantages" class="navigation__link">advantages</a></li>
            <li class="navigation__item"><a href="#contact" class="navigation__link">contacts</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="main-footer__secondary-navigation">
      <div class="social">
        <ul class="social__list">
          <li class="social__item" id="exclude"><a href="#" class="social__link" target="_blank"><i
                class="social__icon fa fa-linkedin"></i></a></li>
        </ul>
      </div>
      <div class="essentials">
        <!-- <div class="essentials__address">
                <p>DaDe Studio<br />
                  46021 Valencia, Spain</p>
              </div> -->
        <div class="essentials__rights">
          <span>Designed and developed with <i class="fa fa-heart"></i> & <i class="fa fa-coffee"></i></span>
          <span>&copy; 2020 Sitefiller. All rights reserved</span>
        </div>
      </div>
    </div>
  </footer>

  
  <div class="sliding-navigation" id="scrollNav">
    <div class="sliding-navigation__container">
      <nav>
        <ul class="sliding-navigation__list">
          <li class="sliding-navigation__item">
            <a href="#portfolio" class="sliding-navigation__link js-smooth-nav">Portfolio</a>
          </li>
          <li class="sliding-navigation__item">
            <a href="#pricing" class="sliding-navigation__link js-smooth-nav">Pricing</a>
          </li>
          <li class="sliding-navigation__item">
            <a href="#process" class="sliding-navigation__link js-smooth-nav">Process</a>
          </li>
        </ul>
      </nav>
      <a href="#contact" class="sliding-navigation__button btn btn--hovered btn--shadowed">
        Contact
      </a>
    </div>
  </div>


  <div class="mob-navigation">
    <input type="checkbox" class="mob-navigation__checkbox" id="navi-toggle">
    <label for="navi-toggle" class="mob-navigation__button" id="js-hamburger">
      <span class="mob-navigation__icon">&nbsp;</span>
    </label>
    <div class="mob-navigation__background">&nbsp;</div>
    <nav class="mob-navigation__nav">
      <ul class="mob-navigation__list">
        <li class="mob-navigation__item"><a href="#about" class="mob-navigation__link js-smooth-nav">about</a></li>
        <li class="mob-navigation__item"><a href="#portfolio" class="mob-navigation__link js-smooth-nav">portfolio</a></li>
        <li class="mob-navigation__item"><a href="#pricing" class="mob-navigation__link js-smooth-nav">pricing</a></li>
        <li class="mob-navigation__item"><a href="#advantages" class="mob-navigation__link js-smooth-nav">advantages</a></li>
        <li class="mob-navigation__item"><a href="#contact" class="mob-navigation__link">contact</a></li>
      </ul>
    </nav>
  </div>

  <span class="home-btn" id="js-homeBtn">
    <a href="#home" class="home-btn__link">
        <img src="./img/Sitefiller__logo.png" alt="Sitefiller logo" class="logo__img">
    </a>
  </span>
  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="slick/slick.min.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  </body>
  </html>