//lazyload
lazyload();

// slider
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

// tabs
const tabsBtn = document.querySelectorAll(".tabs-list__btn");
const tabsItem = document.querySelectorAll(".tabs-item");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach((btn) => {
      btn.classList.remove("tabs-list__btn--active");
    });
    e.currentTarget.classList.add("tabs-list__btn--active");

    tabsItem.forEach((item) => {
      item.classList.remove("tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

// accordion
new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

let accordion = document.querySelectorAll(".accordion");
let keys = {
  Enter: 13,
};

// burger
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = document.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__nav--active");

  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (element) {
  element.addEventListener("click", () => {
    burger.classList.remove("burger--active");
    menu.classList.remove("header__nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

// search
let btnSearh = document.querySelector(".search");
let fieldSearch = document.querySelector(".header__right");
let btnCloseSearch = document.querySelector(".header__close-search");

btnSearh.addEventListener("click", function () {
  fieldSearch.classList.add("header__right--active");
});

btnCloseSearch.addEventListener("click", function () {
  fieldSearch.classList.remove("header__right--active");
});
