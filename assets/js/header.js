let header = `

<div class="icone">
      <div class="wrapper">
        <div class="waves-block">
          <div class="waves wave-1"></div>
          <div class="waves wave-2"></div>
          <div class="waves wave-3"></div>
          <a href="#" class="video-popup mfp-iframe" data-lity="">


            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="PWPreviewWidgetButtonIcon" viewBox="0 0 110 110">
              <path fill="currentColor" d="M87 23a44 44 0 0 0-32-13 44 44 0 0 0-38 67l-7 23 24-7c6 4 14 6 21 6a44 44 0 0 0 32-76ZM55 91c-6 0-13-1-19-5l-1-1-14 4 4-13-1-2c-4-6-6-12-6-19a37 37 0 0 1 74 0c0 20-16 36-37 36Zm20-27-7-4-3 1-3 4h-3c-1 0-4-1-8-5-4-3-6-7-7-8l1-2 1-2 2-2v-2l-4-8-2-2h-3a4 4 0 0 0-3 2c-1 1-3 3-3 9 0 5 4 10 4 11 1 1 8 12 19 17l6 2 7 1c3-1 7-3 8-6l1-5-3-1Z">
              </path>
            </svg>

          </a>
        </div>
      </div>

    </div>

    

     <div class="center_div">
      <div class="chat">
        <div class="contact bar">
          <div class="pic stark"></div>
          <div class="name">Ammar Ahmed</div>
          <div class="seen">Today at 12:56</div>
        </div>
        <div class="messages" id="chat">
          <div class="time">Today at 11:41</div>
          <div class="message parker">Hey, man! What's up, Mr Stark? 👋</div>
          <div class="message stark">Kid, where'd you come from?</div>
          <div class="message parker">Field trip! 🤣</div>
          <div class="message parker">
            Uh, what is this guy's problem, Mr. Stark? 🤔
          </div>
          <div class="message stark">
            Uh, he's from space, he came here to steal a necklace from a wizard.
          </div>
          <div class="message stark">
            <div class="typing typing-1"></div>
            <div class="typing typing-2"></div>
            <div class="typing typing-3"></div>
          </div>
        </div>
        <div class="input">
          <i class="fas fa-camera"></i><i class="far fa-laugh-beam"></i
          ><input placeholder="Type your message here!" type="text" /><i
            class="fas fa-microphone"
          ></i>
        </div>
      </div>
      <style>
        @import url("https://fonts.googleapis.com/css?family=Red+Hat+Display:400,500,900&display=swap");

        .pic {
          width: 4rem;
          height: 4rem;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
        }

        .contact {
          position: relative;
          margin-bottom: 1rem;
          padding-left: 5rem;
          height: 4.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact .pic {
          position: absolute;
          left: 0;
        }
        .contact .name {
          font-weight: 500;
          margin-bottom: 0.125rem;
        }
        .contact .message,
        .contact .seen {
          font-size: 0.9rem;
          color: #999;
        }
        .contact .badge {
          box-sizing: border-box;
          position: absolute;
          width: 1.5rem;
          height: 1.5rem;
          text-align: center;
          font-size: 0.9rem;
          padding-top: 0.125rem;
          border-radius: 1rem;
          top: 0;
          left: 2.5rem;
          background: #333;
          color: white;
        }

        .contacts {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(-6rem, -50%);
          width: 24rem;
          height: 32rem;
          padding: 1rem 2rem 1rem 1rem;
          box-sizing: border-box;
          border-radius: 1rem 0 0 1rem;
          cursor: pointer;
          background: white;
          box-shadow: 0 0 8rem 0 rgba(0, 0, 0, 0.1),
            2rem 2rem 4rem -3rem rgba(0, 0, 0, 0.5);
          transition: transform 500ms;
        }
        .contacts h2 {
          margin: 0.5rem 0 1.5rem 5rem;
        }
        .contacts .fa-bars {
          position: absolute;
          left: 2.25rem;
          color: #999;
          transition: color 200ms;
        }
        .contacts .fa-bars:hover {
          color: #666;
        }
        .contacts .contact:last-child {
          margin: 0;
        }
        .contacts:hover {
          transform: translate(-23rem, -50%);
        }

        .chat {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 24rem;
          height: 38rem;
          z-index: 2;
          box-sizing: border-box;
          border-radius: 1rem;
          background: white;
          box-shadow: 0 0 8rem 0 rgba(0, 0, 0, 0.1),
            0rem 2rem 4rem -3rem rgba(0, 0, 0, 0.5);
        }
        .chat .contact.bar {
          flex-basis: 3.5rem;
          flex-shrink: 0;
          margin: 1rem;
          box-sizing: border-box;
        }
        .chat .messages {
          padding: 1rem;
          background: #f7f7f7;
          flex-shrink: 2;
          overflow-y: auto;
          box-shadow: inset 0 2rem 2rem -2rem rgba(0, 0, 0, 0.05),
            inset 0 -2rem 2rem -2rem rgba(0, 0, 0, 0.05);
        }
        .chat .messages .time {
          font-size: 0.8rem;
          background: #eee;
          padding: 0.25rem 1rem;
          border-radius: 2rem;
          color: #999;
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          margin: 0 auto;
        }
        .chat .messages .message {
          box-sizing: border-box;
          padding: 0.5rem 1rem;
          margin: 1rem;
          background: #fff;
          border-radius: 1.125rem 1.125rem 1.125rem 0;
          min-height: 2.25rem;
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          max-width: 66%;
          box-shadow: 0 0 2rem rgba(0, 0, 0, 0.075),
            0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1);
        }
        .chat .messages .message.parker {
          margin: 1rem 1rem 1rem auto;
          border-radius: 1.125rem 1.125rem 0 1.125rem;
          background: #333;
          color: white;
        }
        .chat .messages .message .typing {
          display: inline-block;
          width: 0.8rem;
          height: 0.8rem;
          margin-right: 0rem;
          box-sizing: border-box;
          background: #ccc;
          border-radius: 50%;
        }
        .chat .messages .message .typing.typing-1 {
          -webkit-animation: typing 3s infinite;
          animation: typing 3s infinite;
        }
        .chat .messages .message .typing.typing-2 {
          -webkit-animation: typing 3s 250ms infinite;
          animation: typing 3s 250ms infinite;
        }
        .chat .messages .message .typing.typing-3 {
          -webkit-animation: typing 3s 500ms infinite;
          animation: typing 3s 500ms infinite;
        }
        .chat .input {
          box-sizing: border-box;
          flex-basis: 4rem;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          padding: 0 0.5rem 0 1.5rem;
        }
        .chat .input i {
          font-size: 1.5rem;
          margin-right: 1rem;
          color: #666;
          cursor: pointer;
          transition: color 200ms;
        }
        .chat .input i:hover {
          color: #333;
        }
        .chat .input input {
          border: none;
          background-image: none;
          background-color: white;
          padding: 0.5rem 1rem;
          margin-right: 1rem;
          border-radius: 1.125rem;
          flex-grow: 2;
          box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1),
            0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.2);
          font-family: Red hat Display, sans-serif;
          font-weight: 400;
          letter-spacing: 0.025em;
        }
        .chat .input input:placeholder {
          color: #999;
        }

        @-webkit-keyframes typing {
          0%,
          75%,
          100% {
            transform: translate(0, 0.25rem) scale(0.9);
            opacity: 0.5;
          }
          25% {
            transform: translate(0, -0.25rem) scale(1);
            opacity: 1;
          }
        }

        @keyframes typing {
          0%,
          75%,
          100% {
            transform: translate(0, 0.25rem) scale(0.9);
            opacity: 0.5;
          }
          25% {
            transform: translate(0, -0.25rem) scale(1);
            opacity: 1;
          }
        }
        .pic.stark {
          background-image: url("https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/73/SMH_Mentor_6.png");
        }

        .pic.banner {
          background-image: url("https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/BruceHulk-Endgame-TravelingCapInPast.jpg");
        }

        .pic.thor {
          background-image: url("https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/98/ThorFliesThroughTheAnus.jpg");
        }

        .pic.danvers {
          background-image: url("https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/05/HeyPeterParker.png");
        }

        .pic.rogers {
          background-image: url("https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/7c/Cap.America_%28We_Don%27t_Trade_Lives_Vision%29.png");
        }
          .center_div {
    position: fixed;
    right: 35px;
    z-index: 999999;
    bottom: 100px;
}
      </style>
    </div>






    <header class="store-header">
      <div id="mainnav" class="main-nav-container relative bg-white py-4">
        <div class="inner bg-inherit">
          <div class="container">
            <div
              class="inner__inner flex items-center justify-between gap-4 lg:gap-8"
            >
              <div class="flex items-center gap-4 lg:gap-8">
                <button class="header-btn">
                  <i class="header-btn__icon sicon-user"></i>
                </button>
                <nav id="mobile-menu" class="mobile-menu">
                  <a
                    href="#"
                    class="collapsible-title"
                    target="_self"
                  >
                    <span>الرئيسية</span>
                  </a>
                  <button
                    class="btn--close close-mobile-menu sicon-cancel lg:hidden"
                  ></button>
                </nav>
              </div>

              <div class="header-search min-w-[320px] flex-1 relative z-0">
                <salla-search inline="" height="56" class="hydrated">
                  <div class="s-search-modal">
                    <div class="s-search-container s-search-inline">
                      <div class="s-search-input-wrapper">
                        <input
                          type="search"
                          enterkeyhint="search"
                          autocomplete="off"
                          class="s-search-input"
                          placeholder="ادخل كلمة البحث"
                          style="height: 56px"
                        />
                      </div>
                      <div class="s-search-results">
                        <p
                          class="s-search-no-results-placeholder"
                          style="display: none"
                        >
                          لا توجد نتائج
                        </p>
                      </div>
                    </div>
                  </div>
                </salla-search>
              </div>

              <div class="flex items-center gap-4 lg:gap-8">
                <div id="s-cart-icon">
                  <span class="s-cart-summary-count">0</span>
                  <i
                    slot="icon"
                    class="header-btn__icon icon sicon-shopping-bag"
                  ></i>
                </div>

                <a href="#" class="collapsible-title" target="_self">
                  <button onclick="openModal()">تغيير العملة</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="s-modal-wrapper">
        <div class="s-modal-body">
          <div class="s-modal-header">
            <label class="s-localization-modal-title">العملة</label>
            <button class="s-modal-close" type="button" onclick="closeModal()">
              ✕
            </button>
          </div>
          <div class="s-localization-modal-inner">
            <div class="s-localization-modal-section">
              <div class="s-localization-modal-section-inner">
                <div class="s-localization-modal-item">
                  <input
                    type="radio"
                    name="currency"
                    id="currency-AED"
                    value="AED"
                  />
                  <label class="s-localization-modal-label" for="currency-AED"
                    >درهم إماراتي (AED)</label
                  >
                </div>
                <div class="s-localization-modal-item">
                  <input
                    type="radio"
                    name="currency"
                    id="currency-EGP"
                    value="EGP"
                  />
                  <label class="s-localization-modal-label" for="currency-EGP"
                    >جنيه مصري (EGP)</label
                  >
                </div>
                <div class="s-localization-modal-item">
                  <input
                    type="radio"
                    name="currency"
                    id="currency-SAR"
                    value="SAR"
                  />
                  <label class="s-localization-modal-label" for="currency-SAR"
                    >ريال سعودي (SAR)</label
                  >
                </div>
                <div class="s-localization-modal-item">
                  <input
                    type="radio"
                    name="currency"
                    id="currency-USD"
                    value="USD"
                  />
                  <label class="s-localization-modal-label" for="currency-USD"
                    >دولار أمريكي (USD)</label
                  >
                </div>
              </div>
            </div>
            <div class="s-button-wrap">
              <button
                type="button"
                class="s-button-element"
                onclick="submitCurrency()"
              >
                موافق
              </button>
            </div>
          </div>
        </div>
      </div>

  

    </header>

`;

function openModal() {
  const modal = document.querySelector(".s-modal-wrapper");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeModal() {
  const modal = document.querySelector(".s-modal-wrapper");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 300);
}

function submitCurrency() {
  const selectedCurrency = document.querySelector(
    'input[name="currency"]:checked'
  );
  if (selectedCurrency) {
    updatePrices(selectedCurrency.value);
    closeModal();
  } else {
    alert("يرجى اختيار عملة قبل المتابعة");
  }
}

function updatePrices(currency) {
  const exchangeRates = {
    AED: 1.0,
    EGP: 8.0,
    SAR: 1.02,
    USD: 0.27,
  };

  const prices = document.querySelectorAll(".price");
  prices.forEach((price) => {
    const amount = price.getAttribute("data-amount");
    const convertedAmount = (amount * exchangeRates[currency]).toFixed(2);
    price.textContent = `${convertedAmount} ${currency}`;
  });
}

let header_ = document.getElementById("header_");

header_.innerHTML = header;

let footer = `
<footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-brand">
            <a href="#" class="logo">Gamics</a>

            <p class="footer-text">
              Gamics marketplace the relase etras thats sheets continig passag.
            </p>

            <ul class="contact-list">
              <li class="contact-item">
                <div class="contact-icon">
                  <ion-icon name="location" role="img" class="md hydrated" aria-label="location"></ion-icon>
                </div>

                <address class="item-text">
                  Address : PO Box W75 Street lan West new queens
                </address>
              </li>

              <li class="contact-item">
                <div class="contact-icon">
                  <ion-icon name="headset" role="img" class="md hydrated" aria-label="headset"></ion-icon>
                </div>

                <a href="tel:+241245654235" class="item-text">Phone : +24 1245 654 235</a>
              </li>

              <li class="contact-item">
                <div class="contact-icon">
                  <ion-icon name="mail-open" role="img" class="md hydrated" aria-label="mail open"></ion-icon>
                </div>

                <a href="mailto:info@exemple.com" class="item-text">Email : info@exemple.com</a>
              </li>
            </ul>
          </div>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Products</p>
            </li>

            <li>
              <a href="#" class="footer-link">Graphics (26)</a>
            </li>

            <li>
              <a href="#" class="footer-link">Backgrounds (11)</a>
            </li>

            <li>
              <a href="#" class="footer-link">Fonts (9)</a>
            </li>

            <li>
              <a href="#" class="footer-link">Music (3)</a>
            </li>

            <li>
              <a href="#" class="footer-link">Photography (3)</a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Need Help?</p>
            </li>

            <li>
              <a href="#" class="footer-link">Terms &amp; Conditions</a>
            </li>

            <li>
              <a href="#" class="footer-link">Privacy Policy</a>
            </li>

            <li>
              <a href="#" class="footer-link">Refund Policy</a>
            </li>

            <li>
              <a href="#" class="footer-link">Affiliate</a>
            </li>

            <li>
              <a href="#" class="footer-link">Use Cases</a>
            </li>
          </ul>

          <div class="footer-wrapper">
            <div class="social-wrapper">
              <p class="footer-list-title">Follow Us</p>

              <ul class="social-list">
                <li>
                  <a href="#" class="social-link" style="background-color: #3b5998">
                    <ion-icon name="logo-facebook" role="img" class="md hydrated" aria-label="logo facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link" style="background-color: #55acee">
                    <ion-icon name="logo-twitter" role="img" class="md hydrated" aria-label="logo twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link" style="background-color: #d71e18">
                    <ion-icon name="logo-pinterest" role="img" class="md hydrated" aria-label="logo pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link" style="background-color: #1565c0">
                    <ion-icon name="logo-linkedin" role="img" class="md hydrated" aria-label="logo linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer-newsletter">
              <p class="footer-list-title">Newsletter Sign Up</p>

              <form action="" class="footer-newsletter">
                <input type="email" name="email_address" aria-label="email" placeholder="Enter your email" required="" class="email-field">

                <button type="submit" class="footer-btn" aria-label="submit">
                  <ion-icon name="rocket" role="img" class="md hydrated" aria-label="rocket"></ion-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">
            © 2022 Gamics. All Right Reserved by
            <a href="#" class="copyright-link">codewithsadee</a>
          </p>

          <img src="./assets/images/footer-bottom-img.png" width="340" height="21" loading="lazy" alt="" class="footer-bottom-img">
        </div>
      </div>
    </footer>`;

let footer_ = document.getElementById("footer_");

footer_.innerHTML = footer;
