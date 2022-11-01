// slider swiper

// const swiper = new Swiper('.main-visual', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   autoplay: {
//     delay: 4000
//   },

//   effect: 'fade',

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// hamburger menu

const menu = document.querySelector(".gnav")
const button = document.querySelector(".btn")
const overlay = document.querySelector(".overlay")
const body = document.body

const toggleMenu = () => {
  menu.classList.toggle("menuIsOpen")
  overlay.classList.toggle("overlayIsOpen")
  button.classList.toggle("btnIsOpen")
  body.classList.toggle("isScrollAllowed")
}

button.addEventListener("click", () => {
  toggleMenu()
})
overlay.addEventListener("click", () => {
  toggleMenu()
})
