// スクロールするする度にフワッと...

const targetElememt = document.querySelectorAll(".animationTarget");

document.addEventListener("scroll", function () {
  // その時その時の画面上面から注目しているオブジェクト上辺までの距離を逐次計測する関数を得る。
  for (let i = 0; i < targetElememt.length; i++) {
    // getBoundingClientRect()とは、
    // その時その時の画面上面から注目しているオブジェクト上辺までの距離を逐次計測する関数。
    // プラス、オブジェクトが半分程度見える距離でフェードインするアニメーションが始まるように
    // 『top』メソッド（？）で得る距離にオブジェクトの半分の高さを加えて調整する。
    const getElementDistance = targetElememt[i].getBoundingClientRect().top + targetElememt[i].clientHeight * 0.2
    console.log(getElementDistance)
    // 開いている画面の高さ
    //   = 注目しているオブジェクトが画面をスクロールして画面下から出てくる距離
    if (window.innerHeight > getElementDistance) {
      targetElememt[i].classList.add("show")
    }
  }
})

// ヘッダーを隠す
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
