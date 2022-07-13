const parents = document.querySelectorAll('.nav__link--dropdown-parent')
const header = document.querySelector('.header')
const openMenuBtn = document.querySelector('.menu-button--open')
const closeMenutBtn = document.querySelector('.menu-button--close')

openMenuBtn.addEventListener('click', () => {
 header.classList.add('menu-active')
})

closeMenutBtn.addEventListener('click', () => {
 header.classList.remove('menu-active')
})

parents.forEach(parent => {
 parent.addEventListener('click', (e) => {
  e.target.classList.toggle('active')
 })
})

console.log(header, openMenuBtn, closeMenutBtn)