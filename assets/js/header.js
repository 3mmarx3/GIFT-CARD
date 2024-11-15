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

    


       <div class="chat_Gpt">
      <button class="chatbot-toggler">
        <span class="material-symbols-rounded">mode_comment</span>
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="chatbot">
        <header>
          <h2>Chatbot</h2>
          <span class="close-btn material-symbols-outlined">close</span>
        </header>
        <ul class="chatbox">
          <li class="chat incoming">
            <span class="material-symbols-outlined">smart_toy</span>
            <p>Hi there <br />How can I help you today?</p>
          </li>
        </ul>
        <div class="chat-input">
          <textarea
            placeholder="Enter a message..."
            spellcheck="false"
            required
          ></textarea>
          <span id="send-btn" class="material-symbols-rounded">send</span>
        </div>
      </div>
    </div>

    <style>
      /* Import Google font - Poppins */
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  
    
      .chatbot-toggler {
        position: fixed;
        bottom: 100px;
        right: 30px;
        outline: none;
        border: none;
        height: 50px;
        width: 50px;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #724ae8;
        transition: all 0.2s ease;
        z-index: 99999999999;
}



ul.chatbox {
    direction: ltr;
}
.chat_Gpt {
    z-index: 999999999999999999999999999999999;
    position: absolute;
}

      }
      body.show-chatbot .chatbot-toggler {
        transform: rotate(90deg);
      }
      .chatbot-toggler span {
        color: #fff;
        position: absolute;
      }
      .chatbot-toggler span:last-child,
      body.show-chatbot .chatbot-toggler span:first-child {
        opacity: 0;
      }
      body.show-chatbot .chatbot-toggler span:last-child {
        opacity: 1;
      }
      .chatbot {
        position: fixed;
        right: 35px;
        bottom: 90px;
        width: 420px;
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
        transform: scale(0.5);
        transform-origin: bottom right;
        box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
          0 32px 64px -48px rgba(0, 0, 0, 0.5);
        transition: all 0.1s ease;
      }
      body.show-chatbot .chatbot {
        opacity: 1;
        pointer-events: auto;
        transform: scale(1);
      }
      .chatbot header {
        padding: 16px 0;
        position: relative;
        text-align: center;
        color: #fff;
        background: #724ae8;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      .chatbot header span {
        position: absolute;
        right: 15px;
        top: 50%;
        display: none;
        cursor: pointer;
        transform: translateY(-50%);
      }
      header h2 {
        font-size: 1.4rem;
      }
      .chatbot .chatbox {
        overflow-y: auto;
        height: 510px;
        padding: 30px 20px 100px;
      }
      .chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
        width: 6px;
      }
      .chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 25px;
      }
      .chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 25px;
      }
      .chatbox .chat {
        display: flex;
        list-style: none;
      }
      .chatbox .outgoing {
        margin: 20px 0;
        justify-content: flex-end;
      }
      .chatbox .incoming span {
        width: 32px;
        height: 32px;
        color: #fff;
        cursor: default;
        text-align: center;
        line-height: 32px;
        align-self: flex-end;
        background: #724ae8;
        border-radius: 4px;
        margin: 0 10px 7px 0;
      }
      .chatbox .chat p {
        white-space: pre-wrap;
        padding: 12px 16px;
        border-radius: 10px 10px 0 10px;
        max-width: 75%;
        color: #fff;
        font-size: 0.95rem;
        background: #724ae8;
      }
      .chatbox .incoming p {
        border-radius: 10px 10px 10px 0;
      }
      .chatbox .chat p.error {
        color: #721c24;
        background: #f8d7da;
      }
      .chatbox .incoming p {
        color: #000;
        background: #f2f2f2;
      }
      .chatbot .chat-input {
        display: flex;
        gap: 5px;
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #fff;
        padding: 3px 20px;
        border-top: 1px solid #ddd;
      }
      .chat-input textarea {
        height: 55px;
        width: 100%;
        border: none;
        outline: none;
        resize: none;
        max-height: 180px;
        padding: 15px 15px 15px 0;
        font-size: 0.95rem;
      }
      .chat-input span {
        align-self: flex-end;
        color: #724ae8;
        cursor: pointer;
        height: 55px;
        display: flex;
        align-items: center;
        visibility: hidden;
        font-size: 1.35rem;
      }
      .chat-input textarea:valid ~ span {
        visibility: visible;
      }

      @media (max-width: 490px) {
       
        .chatbot {
          right: 0;
          bottom: 0;
          height: 100%;
          border-radius: 0;
          width: 100%;
        }
        .chatbot .chatbox {
          height: 90%;
          padding: 25px 15px 100px;
        }
        .chatbot .chat-input {
          padding: 5px 15px;
        }
        .chatbot header span {
          display: block;
        }
      }
    </style>
   

    


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

//

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

// API configuration
const API_KEY = "PASTE-YOUR-API-KEY"; // Your API key here
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi; // return chat <li> element
};

const generateResponse = async (chatElement) => {
  const messageElement = chatElement.querySelector("p");

  // Define the properties and message for the API request
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: userMessage }],
        },
      ],
    }),
  };

  // Send POST request to API, get response and set the reponse as paragraph text
  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    // Get the API response text and update the message element
    messageElement.textContent =
      data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1");
  } catch (error) {
    // Handle error
    messageElement.classList.add("error");
    messageElement.textContent = error.message;
  } finally {
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }
};

const handleChat = () => {
  userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
  if (!userMessage) return;

  // Clear the input textarea and set its height to default
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display "Thinking..." message while waiting for the response
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
