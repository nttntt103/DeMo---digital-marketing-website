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
    })
})
navBtn.addEventListener("click", () => {
  navWrapper.classList.toggle("nav-active");
});
