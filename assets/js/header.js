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

    




    <style>
      /* Import Google font - Poppins */
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  
    
      .chatbot-toggler {
       
        height: 50px;
        width: 50px;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.2s ease;
        z-index: 99999999999;
}



ul.chatbox {
    direction: ltr;
}


      }
      body.show-chatbot .chatbot-toggler {
        transform: rotate(90deg);
      }
      .chatbot-toggler span {
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







    <div
    id="kt_header"
    class="header"
    data-kt-sticky="true"
    data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}"
  >
    <!--begin::Container-->
    <div
      class="container-xxl d-flex align-items-stretch justify-content-between"
    >
      <!--begin::Left-->
      <div class="d-flex align-items-center none_">
        <!--begin::Mega Menu Toggler-->
        <button
          class="btn btn-icon btn-accent me-2 me-lg-6"
          id="kt_mega_menu_toggle"
          data-bs-toggle="modal"
          data-bs-target="#kt_mega_menu_modal"
        >
          <i class="ki-duotone ki-burger-menu-2 fs-1"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span
            ><span class="path5"></span><span class="path6"></span
            ><span class="path7"></span><span class="path8"></span
            ><span class="path9"></span><span class="path10"></span
          ></i>
        </button>
        <!--end::Mega Menu Toggler-->

        <!--begin::Logo-->
        <a href="/start-html-pro/index.html">
          GIFT-CARD
        </a>
        <!--end::Logo-->
      </div>
      <!--end::Left-->

      <!--begin::Right-->
      <div class="d-flex align-items-center">
        <!--begin::Search-->
       
        <!--end::Search-->

        <!--begin::Message-->
       
        
        <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          <input placeholder="Search" type="search" class="input">
        </div>
       

        <style>

.group {
display: flex;
line-height: 28px;
align-items: center;
position: relative;
max-width: 190px;
}

.input {
width: 100%;
height: 40px;
line-height: 28px;
padding: 0 1rem;
padding-left: 2.5rem;
border: 2px solid transparent;
border-radius: 8px;
outline: none;
background-color: #f3f3f4;
color: #0d0c22;
transition: .3s ease;
}

.input::placeholder {
color: #9e9ea7;
}

.input:focus, input:hover {
outline: none;
border-color: rgba(234,76,137,0.4);
background-color: #fff;
box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
position: absolute;
left: 1rem;
fill: #9e9ea7;
width: 1rem;
height: 1rem;
}






        </style>

      


        <!--  -->
        <button
        class="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
        id="kt_drawer_chat_toggle"
        onclick="openModal()"
      >
      
      
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
      </svg>

      </button>
<!--  -->
        <!--end::Message-->
  
                         <div class="chat_Gpt">
      <button class="chatbot-toggler">
        <span class="material-symbols-rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-dots" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></span>
        <span class="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></span>
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
        <!--begin::User-->
        <div class="ms-1 ms-lg-6">
          <!--begin::Toggle-->
          <div
            class="btn btn-icon btn-sm btn-active-bg-accent"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            id="kt_header_user_menu_toggle"
          >
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
          
          </div>
          <!--begin::Menu-->
      
          <!--end::Menu-->
        </div>
        <!--end::User-->

        <!--begin::Notifications-->
        <div class="ms-1 ms-lg-6">
          <!--begin::Dropdown-->
          <button
            class="btn btn-icon btn-sm btn-light-danger fw-bold pulse pulse-danger"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            id="kt_activities_toggle"
          >
           

          <div class="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
          </div>
        
            <span class="pulse-ring"></span>
          </button>
          <!--begin::Menu-->
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded fw-semibold menu-title-gray-800 menu-hover-bg menu-state-title-primary w-250px w-md-300px"
            data-kt-menu="true"
          >
            <div class="menu-item mx-3">
              <div class="menu-content fs-6 text-gray-900 fw-bold py-6">
                4 New Notifications
              </div>
            </div>

            <div class="separator mb-3"></div>

            <div class="menu-item mx-3">
              <a href="#" class="menu-link px-4 py-3">
                <div class="symbol symbol-35px">
                  <span class="symbol-label bg-light-info">
                    <i class="ki-duotone ki-abstract-26 fs-3 text-info"
                      ><span class="path1"></span><span class="path2"></span
                    ></i>
                  </span>
                </div>

                <div class="ps-4">
                  <span class="menu-title fw-semibold mb-1"
                    >New Uer Library Added</span
                  >
                  <span class="text-muted fw-semibold d-block fs-7"
                    >3 Hours ago</span
                  >
                </div>
              </a>
            </div>

            <div class="menu-item mx-3">
              <a href="#" class="menu-link px-4 py-3">
                <div class="symbol symbol-35px">
                  <span class="symbol-label bg-light-warning">
                    <i class="ki-duotone ki-call fs-3 text-warning"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span><span class="path4"></span
                      ><span class="path5"></span><span class="path6"></span
                      ><span class="path7"></span><span class="path8"></span
                    ></i>
                  </span>
                </div>
                <div class="ps-4">
                  <span class="menu-title fw-semibold mb-1"
                    >Clean Microphone</span
                  >
                  <span class="text-muted fw-semibold d-block fs-7"
                    >5 Hours ago</span
                  >
                </div>
              </a>
            </div>

            <div class="menu-item mx-3">
              <a href="#" class="menu-link px-4 py-3">
                <div class="symbol symbol-35px">
                  <span class="symbol-label bg-light-primary">
                    <i
                      class="ki-duotone ki-message-text-2 fs-3 text-primary"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span
                    ></i>
                  </span>
                </div>

                <div class="ps-4">
                  <span class="menu-title fw-semibold mb-1"
                    >Quick Chat Created</span
                  >
                  <span class="text-muted fw-semibold d-block fs-7"
                    >A Day ago</span
                  >
                </div>
              </a>
            </div>

            <div class="menu-item mx-3">
              <a href="#" class="menu-link px-4 py-3">
                <div class="symbol symbol-35px">
                  <span class="symbol-label bg-light-danger">
                    <i class="ki-duotone ki-disconnect fs-3 text-danger"
                      ><span class="path1"></span><span class="path2"></span
                      ><span class="path3"></span><span class="path4"></span
                      ><span class="path5"></span
                    ></i>
                  </span>
                </div>

                <div class="ps-4">
                  <span class="menu-title fw-semibold mb-1"
                    >32 New Attachements</span
                  >
                  <span class="text-muted fw-semibold d-block fs-7"
                    >2 Day ago</span
                  >
                </div>
              </a>
            </div>

            <div class="separator mt-3"></div>

            <div class="menu-item mx-2">
              <div class="menu-content py-5">
                <a href="#" class="btn btn-primary fw-bold me-2 px-5"
                  >Report</a
                >
                <a href="#" class="btn btn-light fw-bold px-5">Reset</a>
              </div>
            </div>
          </div>
        


        </div>
       

    
        <!--end::Sidebar Toggler-->
      </div>
      <!--end::Right-->
    </div>
    <!--end::Container-->
  </div>

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
        <a href="#" class="logo">جاميكس</a>

        <p class="footer-text">
          جاميكس هو أفضل موقع لشراء بطاقات الألعاب الرقمية بأفضل الأسعار وخدمة متميزة.
        </p>

        <ul class="contact-list">
          <li class="contact-item">
            <div class="contact-icon">
              <ion-icon name="location" role="img" class="md hydrated" aria-label="location"></ion-icon>
            </div>

            <address class="item-text">
              العنوان: صندوق بريد W75 شارع لان، كوينز الجديدة
            </address>
          </li>

          <li class="contact-item">
            <div class="contact-icon">
              <ion-icon name="headset" role="img" class="md hydrated" aria-label="headset"></ion-icon>
            </div>

            <a href="tel:+241245654235" class="item-text">الهاتف: +24 1245 654 235</a>
          </li>

          <li class="contact-item">
            <div class="contact-icon">
              <ion-icon name="mail-open" role="img" class="md hydrated" aria-label="mail open"></ion-icon>
            </div>

            <a href="mailto:info@gamics.com" class="item-text">البريد الإلكتروني: info@gamics.com</a>
          </li>
        </ul>
      </div>

      <ul class="footer-list">
        <li>
          <p class="footer-list-title">أهم الفئات</p>
        </li>

        <li>
          <a href="#" class="footer-link">بطاقات ستيم</a>
        </li>

        <li>
          <a href="#" class="footer-link">بطاقات بلاي ستيشن</a>
        </li>

        <li>
          <a href="#" class="footer-link">بطاقات إكس بوكس</a>
        </li>

        <li>
          <a href="#" class="footer-link">بطاقات نينتندو</a>
        </li>

        <li>
          <a href="#" class="footer-link">بطاقات جوجل بلاي</a>
        </li>
      </ul>

      <ul class="footer-list">
        <li>
          <p class="footer-list-title">روابط مهمة</p>
        </li>

        <li>
          <a href="#" class="footer-link">الشروط والأحكام</a>
        </li>

        <li>
          <a href="#" class="footer-link">سياسة الخصوصية</a>
        </li>

        <li>
          <a href="#" class="footer-link">سياسة الاسترداد</a>
        </li>

        <li>
          <a href="#" class="footer-link">كيفية الطلب</a>
        </li>

        <li>
          <a href="#" class="footer-link">الأسئلة الشائعة</a>
        </li>
      </ul>

      <div class="footer-wrapper">
        <div class="social-wrapper">
          <p class="footer-list-title">تابعنا على مواقع التواصل</p>

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
          <p class="footer-list-title">اشترك في النشرة الإخبارية</p>

          <form action="" class="footer-newsletter">
            <input type="email" name="email_address" aria-label="email" placeholder="أدخل بريدك الإلكتروني" required="" class="email-field">

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
        © 2022 جاميكس. جميع الحقوق محفوظة. Powered by
        <a href="#" class="copyright-link">Gamics Team</a>
      </p>

      <img src="./assets/images/footer-bottom-img.png" width="340" height="21" loading="lazy" alt="Gamics Footer Image" class="footer-bottom-img">
    </div>
  </div>
</footer>
`;

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
