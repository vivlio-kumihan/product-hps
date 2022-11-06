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

///////// 要リファクタリング /////////
// hidden header and header-top
let beforeScrollValue = 0
const topClassList = document.querySelector('.header').classList
window.addEventListener('scroll', () => {
  if (window.scrollY > beforeScrollValue) {
    topClassList.add('pullUp')
  } else {
    topClassList.remove('pullUp')
  }
  beforeScrollValue = window.scrollY
})
let beforeScrollValue_4headerTop = 0
const topClassList_headerTop = document.querySelector('section.header-top').classList
window.addEventListener('scroll', () => {
  if (window.scrollY > beforeScrollValue_4headerTop) {
    topClassList_headerTop.add('pullUp')
  } else {
    topClassList_headerTop.remove('pullUp')
  }
  beforeScrollValue_headerTop = window.scrollY
})


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

