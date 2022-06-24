const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".header-right");
const menuItems = document.querySelectorAll(".header .menu-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

for (let item of menuItems) {
  item.addEventListener("click", function () {
    burger.classList.remove("active");
    burgerMenu.classList.remove("active");
  });
}

const heroSlider = new Swiper(".hero-slider", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const blogSlider = new Swiper(".blog-slider", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const testimonialsSlider = new Swiper(".testimonials-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1800: {
      slidesPerView: 2.5,
      spaceBetween: 64,
    },
    1300: {
      slidesPerView: 1.7,
      spaceBetween: 50,
    },
    800: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 1.7,
      spaceBetween: 30,
    },
    430: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
});

const accordionBtns = document.querySelectorAll(".customer-item-title");

for (let value of accordionBtns) {
  value.addEventListener("click", function () {
    value.classList.toggle("active");
    const accordionContent = value.nextElementSibling;
    const accordionText = accordionContent.firstElementChild;
    if (accordionContent.style.height) {
      accordionContent.style.height = null;
    } else {
      if (document.body.clientWidth < 660) {
        accordionContent.style.height = accordionText.scrollHeight + 70 + "px";
      } else {
        accordionContent.style.height = accordionText.scrollHeight + "px";
      }
    }
  });
}
