function navMenu() {
  let navBar = document.querySelector(".navbar-sticky");
  let scrollTopButton = document.querySelector("#scrollUp");
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 120) {
      navBar.classList.add("navbar-sticky-moved-up");
    } else {
      navBar.classList.remove("navbar-sticky-moved-up");
    }

    if (scroll >= 250) {
      navBar.classList.add("navbar-sticky-transition");
      // scrollTopButton.classList.add("scrollActive");
    } else {
      navBar.classList.remove("navbar-sticky-transition");
      // scrollTopButton.classList.remove("scrollActive");
    }

    if (scroll >= 500) {
      navBar.classList.add("navbar-sticky-on");
    } else {
      navBar.classList.remove("navbar-sticky-on");
    }
  };
}
navMenu();

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 10, 2000);
  counter("count2", 100, 20, 3000);
  counter("count3", 0, 30, 4000);
  counter("count4", 0, 10, 2000);
});

var swiper = new Swiper(".swiper-container.app-screen", {
  effect: "coverflow",
  loop: true,
  autoplaySpeed: 3000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickble: true,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
