const menuButton = document.querySelector(".menu__hamburger");
const menu = document.querySelector(".fullscrean-menu");
const closeElement = document.querySelector(".close__icon");




menuButton.addEventListener("click", e => {
  e.preventDefault();
  menu.style.display = "flex";
  
})

menu.addEventListener("click", e => {
  if (!e.target.classList.contains("list")){
    menu.style.display = "none";
  }
})

closeElement.addEventListener("click", e => {
  e.preventDefault();
  menu.style.display = "none";
})

const gearButton = document.querySelector(".offer__spec-bnt");
const specsListElement = document.querySelector(".offer__specs");
gearButton.addEventListener("mouseover", e => {
  specsListElement.style.opacity = "1";
  specsListElement.style.top = "0";
  
})
gearButton.addEventListener("mouseout", e => {
  specsListElement.style.opacity = "0"
  specsListElement.style.top = "-999999px"
})
specsListElement.addEventListener("mouseover", e => {
  specsListElement.style.opacity = "1";
  specsListElement.style.top = "0";
})
specsListElement.addEventListener("mouseout", e => {
  specsListElement.style.opacity = "0"
  specsListElement.style.top = "-999999px"
})