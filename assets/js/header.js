let header = `
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
