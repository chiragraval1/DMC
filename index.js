// Scroll Event Start
window.addEventListener("scroll", function () {
  var header = document.getElementById("header-main");
  if (window.scrollY > 300) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
// Scroll Event End

//Add parallax effect
document.addEventListener("scroll", function () {
  const parallax = document.querySelector(".ban-img");
  let scrollPosition = window.pageYOffset;
  parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menuCloseIcon = document.getElementById("menu-close-icon");
  const menu = document.querySelector(".menu");
  const mainHeader = document.getElementById("header-main");

  menuIcon.addEventListener("click", function () {
    menu.style.display = "block";
    menuIcon.style.display = "none";
    menuCloseIcon.style.display = "block";
    mainHeader.classList.add("mobile-header");
  });

  menuCloseIcon.addEventListener("click", function () {
    menu.style.display = "none";
    menuIcon.style.display = "block";
    menuCloseIcon.style.display = "none";
    mainHeader.classList.remove("mobile-header");
  });
});

// Swiper slider
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".banner .swiper-container", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 400,
  });

  var swiper = new Swiper(".featured-projects .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  var swiper = new Swiper(".logo-slider .swiper-container", {
    slidesPerView: 6,
    spaceBetween: 30,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".feature .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
