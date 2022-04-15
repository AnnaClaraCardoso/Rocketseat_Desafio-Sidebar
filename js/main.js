const menuBtn = document.querySelector('.menu-btn')
const sideBar = document.querySelector('aside')
const mainContent = document.querySelector('main')

menuBtn.addEventListener('click', toogleSideBar)

function toogleSideBar() {
  sideBar.classList.toggle('close')
  mainContent.classList.toggle('close')
}
