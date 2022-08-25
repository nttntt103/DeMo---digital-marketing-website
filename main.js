// const navBar = document.getElementById('nav-bar')

// window.addEventListener('scroll', () => {
//       if (document.body.scrollTop > 79 || document.documentElement.scrollTop > 79) {
//         navBar.current.classList.add('nav-shrink')
//       } else {
//         navBar.current.classList.remove('nav-shrink')
//       }
//     })

const nav = document.querySelector('.header-section nav')

const navWrapper = document.querySelector(".nav-wrapper");
const menuBtn = document.querySelector(".menu-btn")
menuBtn.addEventListener('click', () => {
    navWrapper.classList.toggle('nav-active')
    nav.classList.toggle('menuToX')
})

const navLinks = document.querySelectorAll('.header-section ul li a')
const navBtn = document.querySelector('.header-section button.red-btn')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navWrapper.classList.toggle('nav-active')
      nav.classList.remove("menuToX")
    })
})
navBtn.addEventListener("click", () => {
  navWrapper.classList.toggle("nav-active")
  nav.classList.remove("menuToX")
});

const logo = document.querySelector('.header-section .logo')
logo.addEventListener("click", () => {
  navWrapper.classList.remove("nav-active");
  nav.classList.remove("menuToX");
});

const headerSection = document.querySelector('.header-section')
window.addEventListener('scroll', () => {
  if (document.body.scrollTop || document.documentElement.scrollTop) {
    headerSection.classList.add('sticky-active')
  } else {
    headerSection.classList.remove("sticky-active")
  }
})
